const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");

const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateclock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();  
    let ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    
    h = h % 12;
    h = h ? h : 12; 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(updateclock, 1000);
}
updateclock();

const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

monthNameEl.innerText = date.toLocaleString("default", { month: "long" });
dayNameEl.innerText = date.toLocaleString("default", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();










    
 
