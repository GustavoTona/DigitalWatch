const horas = document.getElementById('horas')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;

})