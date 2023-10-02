const button = document.querySelector("#btn");
button.addEventListener("click", result);
const par = document.querySelector("#show");
function result(e) {
    e.preventDefault();

let points = 0;
if (document.querySelector("#answer1").checked) {
    points ++;
}
if (document.querySelector("#answer2").checked) {
    points ++;
}
if (document.querySelector("#answer3").checked) {
    points ++;
}
if (document.querySelector("#answer4").checked) {
    points ++;
}
if (document.querySelector("#answer5").checked) {
    points ++;
}
if (document.querySelector("#answer6").checked) {
    points ++;
}
if (document.querySelector("#answer7").checked) {
    points ++;
}
if (document.querySelector("#answer8").checked) {
    points ++;
}
if (document.querySelector("#answer9").checked) {
    points ++;
}
if (document.querySelector("#answer10").checked) {
    points ++;
}
par.textContent = "Ваши баллы:" + points;
}

gsap.from(".picture", {opacity: 0,duration: 4, delay: .5, stagger:1.2})