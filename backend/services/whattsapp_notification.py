# backend/services/whatsapp_notification.py
from flask import current_app as app
import requests
import re
from twilio.rest import Client  # Add this import

def format_phone_number(phone_number):
    """Convert phone numbers to E.164 format for Twilio"""
    # Remove any non-digit characters except +
    cleaned = re.sub(r'[^\d+]', '', phone_number)
    
    # Handle common formats
    if cleaned.startswith('00'):
        cleaned = '+' + cleaned[2:]
    elif cleaned.startswith('0'):
        # Saudi numbers: remove leading 0 and add +966
        if len(cleaned) == 10 and cleaned.startswith('0'):
            cleaned = '+966' + cleaned[1:]
        elif len(cleaned) == 9:
            cleaned = '+966' + cleaned
    elif not cleaned.startswith('+'):
        # If no country code, assume Saudi (+966)
        if len(cleaned) == 9:
            cleaned = '+966' + cleaned
        else:
            cleaned = '+' + cleaned
    
    return cleaned

def send_whatsapp_notification(event, phone_numbers):
    """Send WhatsApp notification for calendar event using Twilio Client"""
    try:
        # Check if WhatsApp is configured
        account_sid = app.config.get('WHATSAPP_ACCOUNT_SID')
        auth_token = app.config.get('WHATSAPP_AUTH_TOKEN')
        from_number = app.config.get('WHATSAPP_FROM_NUMBER')
        sandbox_phrase = app.config.get('WHATSAPP_SANDBOX_PHRASE', 'join planned-pitch')
        
        app.logger.info(f"WhatsApp Config - SID: {account_sid}, From: {from_number}")
        
        if not all([account_sid, auth_token, from_number]):
            app.logger.error("WhatsApp credentials not configured properly")
            return False
            
        if not phone_numbers:
            app.logger.warning("No phone numbers to send WhatsApp to")
            return False
        
        # Create WhatsApp message
        message_body = f"""
        *Event Invitation: *{event.title.upper()}* 🔔

        📅 *Date & Time:* {event.start_datetime.strftime('%A, %B %d, %Y at %I:%M %p')}
        ⏰ *Duration:* {(event.end_datetime - event.start_datetime).seconds // 3600} hours

        📍 *Location:* {event.location or 'Online'}
        *Event Type:* {event.event_type.title()}
        *Organizer:* {event.organizer.username}

        👤 *Description:* {event.description or 'No description provided'}

        💬 *Additional Notes:* {event.email_message or 'You are invited to this event. Please mark your calendar.'}

       _This is an automated notification from RSR Calendar System_
        """.strip()
        
        # Initialize Twilio client
        client = Client(account_sid, auth_token)
        
        success_count = 0
        failed_numbers = []
        optin_required_numbers = []
        
        # Send to each phone number
        for phone_number in phone_numbers:
            try:
                # Format phone number to E.164 format
                formatted_number = format_phone_number(phone_number.strip())
                to_number = f'whatsapp:{formatted_number}'
                
                app.logger.info(f"Sending WhatsApp from {from_number} to {to_number}")

                # Send message using Twilio client
                message = client.messages.create(
                    body=message_body,
                    from_=from_number,
                    to=to_number
                )
                
                if message.sid:
                    app.logger.info(f"WhatsApp sent successfully to {to_number}, SID: {message.sid}")
                    success_count += 1
                else:
                    app.logger.error(f"Failed to send WhatsApp to {to_number}")
                    failed_numbers.append(phone_number)
                    
            except Exception as e:
                error_msg = str(e)
                app.logger.error(f"Error sending to {phone_number}: {error_msg}")
                
                # Check if it's an opt-in error
                if "opt-in" in error_msg.lower() or "63007" in error_msg:
                    optin_required_numbers.append(formatted_number)
                    app.logger.warning(f"Opt-in required for {formatted_number}")
                else:
                    failed_numbers.append(phone_number)

        # Handle users who need to opt-in
        if optin_required_numbers:
            app.logger.warning("🔔 OPT-IN REQUIRED FOR THESE NUMBERS:")
            for number in optin_required_numbers:
                app.logger.warning(f"  - {number} needs to send '{sandbox_phrase}' to {from_number}")
        
        app.logger.info(f"WhatsApp results: {success_count} successful, {len(failed_numbers)} failed, {len(optin_required_numbers)} need opt-in")
        
        # Log detailed instructions for users
        if optin_required_numbers:
            app.logger.info(f"""
            📋 INSTRUCTIONS FOR USERS:
            1. Open WhatsApp on your phone
            2. Send this exact message: '{sandbox_phrase}'
            3. To this number: {from_number.replace('whatsapp:', '')}
            4. Wait for confirmation from WhatsApp
            5. You will then receive event notifications
            """)
            
        return success_count > 0
            
    except Exception as e:
        app.logger.error(f"Failed to send WhatsApp notification: {str(e)}")
        import traceback
        app.logger.error(f"Traceback: {traceback.format_exc()}")
        return False