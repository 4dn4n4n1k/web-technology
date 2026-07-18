function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}

updateClock();
setInterval(updateClock, 1000);