
let manualTime = null;
let is24Hour = true;

// Update clock
function updateClock() {
    let currentTime = manualTime || new Date();

    let time = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !is24Hour
    });

    document.getElementById("clock").innerText = time;
}

// Change time format
function changeFormat() {
    is24Hour = !is24Hour;

    let button = document.getElementById("formatButton");

    if (is24Hour) {
        button.innerText = "Switch to 12-Hour Format";
    } else {
        button.innerText = "Switch to 24-Hour Format";
    }

    updateClock();
}

// Update date and day
function updateDate() {
    let currentDate = new Date();

    let day = currentDate.toLocaleDateString("en-US", {
        weekday: "long"
    });

    let date = currentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
}

// Run functions
setInterval(updateClock, 1000);

updateClock();
updateDate();

// Stopwatch variables
let stopwatchSeconds = 0;
let stopwatchInterval = null;

// Start Stopwatch
function startStopwatch() {

    if (stopwatchInterval !== null) {
        return;
    }

    stopwatchInterval = setInterval(function() {

        stopwatchSeconds++;

        let hours = Math.floor(stopwatchSeconds / 3600);
        let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        let seconds = stopwatchSeconds % 60;

        let display =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

        document.getElementById("stopwatchDisplay").innerText = display;

    }, 1000);
}

// Pause Stopwatch
function pauseStopwatch() {

    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

// Reset Stopwatch
function resetStopwatch() {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;
    stopwatchSeconds = 0;

    document.getElementById("stopwatchDisplay").innerText = "00:00:00";
}

// Countdown Timer variables
let countdownSeconds = 0;
let countdownInterval = null;

// Display countdown
function updateCountdownDisplay() {

    let hours = Math.floor(countdownSeconds / 3600);
    let minutes = Math.floor((countdownSeconds % 3600) / 60);
    let seconds = countdownSeconds % 60;

    let display =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    document.getElementById("countdownDisplay").innerText = display;
}

// Start countdown
function startCountdown() {

    if (countdownInterval !== null) {
        return;
    }

    if (countdownSeconds === 0) {

        let hours = Number(document.getElementById("countHours").value || 0);
        let minutes = Number(document.getElementById("countMinutes").value || 0);
        let seconds = Number(document.getElementById("countSeconds").value || 0);

        if (
            !Number.isInteger(hours) ||
            !Number.isInteger(minutes) ||
            !Number.isInteger(seconds) ||
            hours < 0 || hours > 99 ||
            minutes < 0 || minutes > 59 ||
            seconds < 0 || seconds > 59 ||
            (hours === 0 && minutes === 0 && seconds === 0)
        ) {
            alert("Please enter a valid countdown time.");
            return;
        }

        countdownSeconds = hours * 3600 + minutes * 60 + seconds;
        updateCountdownDisplay();
    }

    countdownInterval = setInterval(function() {

        countdownSeconds--;

        updateCountdownDisplay();

        if (countdownSeconds <= 0) {

            clearInterval(countdownInterval);
            countdownInterval = null;

            alert("Time is up!");
        }

    }, 1000);
}

// Pause countdown
function pauseCountdown() {

    clearInterval(countdownInterval);
    countdownInterval = null;
}

// Reset countdown
function resetCountdown() {

    clearInterval(countdownInterval);

    countdownInterval = null;
    countdownSeconds = 0;

    document.getElementById("countHours").value = "";
    document.getElementById("countMinutes").value = "";
    document.getElementById("countSeconds").value = "";

    updateCountdownDisplay();
}

// Dark and Light Theme

function changeTheme() {

    document.body.classList.toggle("light-mode");

    let button = document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {

        button.innerText = "Switch to Dark Mode";

    } else {

        button.innerText = "Switch to Light Mode";

    }
}

// World Clock Function

function updateWorldClocks() {

    let pakistan = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let uk = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let uae = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let usa = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("pakistanTime").innerText = pakistan;

    document.getElementById("ukTime").innerText = uk;

    document.getElementById("uaeTime").innerText = uae;

    document.getElementById("usaTime").innerText = usa;
}

// Update World Clock every second

setInterval(updateWorldClocks, 1000);

updateWorldClocks();
