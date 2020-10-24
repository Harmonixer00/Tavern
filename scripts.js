var today = new Date(),
    open = "We're open today from 9am - 5pm",
    closed = "We're closed and will open again tomorrow 9am - 6pm",
    display = document.getElementById('display');

if (today.getHours() >= 9 && today.getHours() < 18) {
    display.innerHTML = open;
} else {
    display.innerHTML = closed;
}