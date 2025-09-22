
// Chart management utility
const chartInstances = {};

function initializeChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) {
    console.warn(`Canvas element with ID '${canvasId}' not found`);
    return null;
  }

  // Destroy existing chart if it exists
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }

  // Create new chart
  chartInstances[canvasId] = new Chart(ctx, config);
  return chartInstances[canvasId];
}

document.addEventListener('DOMContentLoaded', function () {
    // Custom toast styles
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        width: '400px',
        padding: '1.25rem',
        backdrop: false,
        animation: true,
        customClass: {
            container: 'animate__animated animate__fadeInRight',
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html',
            icon: 'custom-swal-icon'
        },
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    // Display flash messages
    flashMessages.forEach(msg => {
        if (msg.category && msg.message) {
            var icon = msg.category === 'danger' ? 'error' : msg.category;
            var iconColor = 
                msg.category === 'danger' ? '#ef4444' :
                msg.category === 'success' ? '#10b981' :
                msg.category === 'warning' ? '#f59e0b' : '#3b82f6';
            
            Toast.fire({
                icon: icon,
                title: msg.message,
                background: '#fff',
                color: '#1e293b',
                iconColor: iconColor,
                showClass: {
                    popup: 'animate__animated animate__fadeInRight animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutRight animate__faster'
                }
            });
        }
    });

    // Enhanced session timeout dialog
    let inactivityTimer;
    const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(logout, 30 * 60 * 1000);
    };
    
    const logout = () => {
        Swal.fire({
            title: '<span style="color:#1e293b">Session Timeout</span>',
            html: '<div style="color:#64748b">You will be logged out due to inactivity</div>',
            icon: 'warning',
            iconColor: '#f59e0b',
            showCancelButton: true,
            confirmButtonText: 'Stay Logged In',
            cancelButtonText: 'Logout Now',
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#ef4444',
            background: '#fff',
            customClass: {
                container: 'animate__animated animate__fadeIn',
                popup: 'shadow-lg rounded-xl',
                title: 'text-xl font-semibold',
                htmlContainer: 'text-base',
                confirmButton: 'px-4 py-2 rounded-lg',
                cancelButton: 'px-4 py-2 rounded-lg'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp animate__faster'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                resetTimer();
                Toast.fire({
                    icon: 'success',
                    title: 'Session extended',
                    iconColor: '#10b981'
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.href = "{{ url_for('admin_logout') }}";
            }
        });
    };
    
    // Reset timer on user activity
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
});

document.addEventListener('DOMContentLoaded', function() {
  // Summary Chart
  const summaryCtx = document.getElementById('summarychart');
  if (summaryCtx) {
    new Chart(summaryCtx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Portfolio Value',
          data: [58000, 59200, 60500, 62000, 63500, 64800, 65520],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return '$' + context.raw.toLocaleString();
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }

  // Doughnut Chart
  const doughnutCtx = document.getElementById('doughnutchart');
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        // labels: ['Share Holdings', 'Mutual Funds', 'Bank Bonds', 'Gov. Securities', 'Fixed Deposit'],
        datasets: [{
          data: [165520, 265850, 356260, 185650, 190450],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(201, 203, 207, 0.8)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { position: 'right' },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: $${value.toLocaleString()} (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

  // Area Chart
  const areaCtx = document.getElementById('areachartblue1');
  if (areaCtx) {
    new Chart(areaCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Wallet Value',
          data: [1100000, 1120000, 1135000, 1152250],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return '$' + context.raw.toLocaleString();
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return '$' + (value / 1000).toLocaleString() + 'k';
              }
            }
          }
        }
      }
    });
  }
});