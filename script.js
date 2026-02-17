// Basic starter script for the Clock Exercise.

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatTime(d) {
  const hh = pad2(d.getHours());
  const mm = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  return `${hh}:${mm}:${ss}`;
}

function startClock() {
  const digital = document.getElementById("clock");
  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  const tick = () => {
    const now = new Date();

    // digital time
    if (digital) {
      digital.textContent = formatTime(now);
    }

    // analogue hands
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12 + minutes / 60;

    const secondDeg = seconds * 6; // 360 / 60
    const minuteDeg = minutes * 6 + seconds * 0.1; // smooth minute hand
    const hourDeg = hours * 30; // 360 / 12

    if (secondHand) {
      secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }
    if (minuteHand) {
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    }
    if (hourHand) {
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }
  };

  tick();
  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startClock();
});
