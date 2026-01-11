const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");
const saatEl = document.getElementById("saat");

const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

monthNameEl.innerText = date.toLocaleString("default", { month: "long" });
dayNameEl.innerText = date.toLocaleString("default", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
saatEl.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


function set() { 
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
}

 
