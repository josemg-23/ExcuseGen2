console.log("Agregando Index")

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function random(arreglo) {
    let max = arreglo.length
    let random = Math.random() * max
    random = Math.floor(random)
    return arreglo[random]
}
let excuse =`${random(who)} ${random(action)} ${random (what)} ${random(when)}`
console.log(excuse)
window.onload = function(){
    document.querySelector("#excuse").innerHTML = excuse
}
