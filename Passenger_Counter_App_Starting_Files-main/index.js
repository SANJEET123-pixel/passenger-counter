let countEL = document.getElementById("count-el")
let count = 0

let saveEL = document.getElementById("save-el")

function increment() {
    count += 1;
    countEL.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0
}