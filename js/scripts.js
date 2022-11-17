function changeMonthRandomly() {
    const targetElement  = document.getElementById("heading");
    var months = ["January","February", "March", "April", "May","June","July", "August", "September", "October", "November", "December"]
    var number = getRandomNumber(0,months.length)
    targetElement.innerHTML= months[number];
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}