/*! For license information please see adminux-explorer.js.LICENSE.txt */
"use strict";
document.addEventListener("DOMContentLoaded", function () {
  new ProgressBar.Circle(circleprogressblue, {
    color: "#015EC2",
    strokeWidth: 10,
    trailWidth: 10,
    easing: "easeInOut",
    trailColor: "rgba(66, 157, 255, 0.15)",
    duration: 1400,
    text: { autoStyleContainer: !1 },
    from: { color: "#015EC2", width: 10 },
    to: { color: "#015EC2", width: 10 },
    step: function (t, a) {
      a.path.setAttribute("stroke", t.color),
        a.path.setAttribute("stroke-width", t.width);
      Math.round(100 * a.value());
    },
  }).animate(0.65),
    new ProgressBar.Circle(circleprogressyellow, {
      color: "#ffc107",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(255, 200, 0, 0.3)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#ffc107", width: 10 },
      to: { color: "#ffc107", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        Math.round(100 * a.value());
      },
    }).animate(0.85),
    new ProgressBar.Circle(circleprogressredsum, {
      color: "#f03d4f",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(255, 0, 43, 0.2)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#f03d4f", width: 10 },
      to: { color: "#f03d4f", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        Math.round(100 * a.value());
      },
    }).animate(0.45),
    new ProgressBar.Circle(circleprogresswhite, {
      color: "#ffffff",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(255, 255, 255, 0.25)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#ffffff", width: 10 },
      to: { color: "#ffffff", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        Math.round(100 * a.value());
      },
    }).animate(0.68),
    new ProgressBar.Circle(circleprogressblue1, {
      color: "#015EC2",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(66, 157, 255, 0.15)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#015EC2", width: 10 },
      to: { color: "#015EC2", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        var r = Math.round(100 * a.value());
        0 === r ? a.setText("") : a.setText(r + "<small>%<small>");
      },
    }).animate(0.65),
    new ProgressBar.Circle(circleprogressgreen1, {
      color: "#91C300",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(10, 161, 43, 0.15)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#91C300", width: 10 },
      to: { color: "#91C300", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        var r = Math.round(100 * a.value());
        0 === r ? a.setText("") : a.setText(r + "<small>%<small>");
      },
    }).animate(0.85),
    new ProgressBar.Circle(circleprogressyellow1, {
      color: "#fdba00",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(255, 200, 0, 0.3)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#fdba00", width: 10 },
      to: { color: "#fdba00", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        var r = Math.round(100 * a.value());
        0 === r ? a.setText("") : a.setText(r + "<small>%<small>");
      },
    }).animate(0.45),
    new ProgressBar.Circle(circleprogressred1, {
      color: "#dd2739",
      strokeWidth: 10,
      trailWidth: 10,
      easing: "easeInOut",
      trailColor: "rgba(255, 0, 43, 0.2)",
      duration: 1400,
      text: { autoStyleContainer: !1 },
      from: { color: "#dd2739", width: 10 },
      to: { color: "#dd2739", width: 10 },
      step: function (t, a) {
        a.path.setAttribute("stroke", t.color),
          a.path.setAttribute("stroke-width", t.width);
        var r = Math.round(100 * a.value());
        0 === r ? a.setText("") : a.setText(r + "<small>%<small>");
      },
    }).animate(0.68),
    (window.randomScalingFactor = function () {
      return Math.round(20 * Math.random());
    }),
    (window.randomScalingFactor2 = function () {
      return Math.round(10 * Math.random());
    });
  var t = document.getElementById("areachartblue1").getContext("2d"),
    a = t.createLinearGradient(0, 0, 0, 240);
  a.addColorStop(0, "rgba(1, 94, 194, 0.55)"),
    a.addColorStop(1, "rgba(1, 94, 193, 0)");
  var r = t.createLinearGradient(0, 0, 0, 235);
  r.addColorStop(0, "rgba(240, 61, 79, 0.85)"),
    r.addColorStop(1, "rgba(255, 223, 220, 0)");
  var o = t.createLinearGradient(0, 0, 0, 240);
  o.addColorStop(0, "rgba(255, 193, 7, 0.5)"),
    o.addColorStop(1, "rgba(255, 193, 7, 0)");
  var n = {
      type: "line",
      data: {
        labels: [
          "Jan-15",
          "Jan-30",
          "Feb-15",
          "Feb-30",
          "Mar-15",
          "Mar-30",
          "Apr-15",
          "Apr-30",
          "May-15",
          "May-30",
          "Jun-15",
          "Jun-30",
          "Jul-15",
          "Jul-30",
          "Aug-15",
          "Aug-30",
        ],
        datasets: [
          {
            label: "# income",
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            radius: 2,
            pointBackgroundColor: "#ffffff",
            backgroundColor: o,
            borderColor: "#ffc107",
            borderWidth: 1,
            fill: !0,
            tension: 0.35,
          },
          {
            label: "# of Expense",
            data: [
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
            ],
            radius: 2,
            pointBackgroundColor: "#ffffff",
            backgroundColor: r,
            borderColor: "rgba(240, 61, 79, 0.65)",
            borderWidth: 1,
            fill: !0,
            tension: 0.3,
          },
          {
            label: "# of Investments",
            data: [
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
              randomScalingFactor2(),
            ],
            radius: 2,
            pointBackgroundColor: "#ffffff",
            backgroundColor: a,
            borderColor: "#015ec2",
            borderWidth: 1,
            fill: !0,
            tension: 0.4,
          },
        ],
      },
      options: {
        layout: { padding: 0 },
        maintainAspectRatio: !1,
        plugins: { legend: { display: !1 } },
        scales: {
          y: { display: !1, beginAtZero: !0 },
          x: { grid: { display: !1 }, display: !1, beginAtZero: !1 },
        },
      },
    },
    e = new Chart(t, n);
  setInterval(function () {
    n.data.datasets.forEach(function (t) {
      t.data = t.data.map(function () {
        return randomScalingFactor();
      });
    }),
      e.update();
  }, 3500);
});
