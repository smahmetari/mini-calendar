const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
const day = date.getDate();

monthNameEl.innerText = date.toLocaleString("default", { month: "long" });
dayNameEl.innerText = date.toLocaleString("default", { weekday: "long" });
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
