/*var add = 0;

function rotate() {
    document.getElementById("dominoe5-0").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
window.onload = function () {
    var el = document.getElementById("dominoe5-0");
    if (el) {
        el.addEventListener("click", rotate, true);
    }
}*/
var add = 0;

function rotate() {
    document.getElementById("dominoe0-0").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe0-0");
el.addEventListener("click", rotate);


function rotate2() {
    document.getElementById("dominoe0-1").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe0-1");
el.addEventListener("click", rotate2);

function rotate3() {
    document.getElementById("dominoe1-1").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe1-1");
el.addEventListener("click", rotate3);

function rotate4() {
    document.getElementById("dominoe0-2").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe0-2");
el.addEventListener("click", rotate4);

function rotate5() {
    document.getElementById("dominoe5-0").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe5-0");
el.addEventListener("click", rotate5);

function rotate6() {
    document.getElementById("dominoe5-1").style.transform = 'rotate(' + add + 'deg)';
    add += 90;
}
var el = document.getElementById("dominoe5-1");
el.addEventListener("click", rotate6);

/*function melange
function distribution
function placement
function pioche
function victorieux*/

var tableau = new Array();
tableau[0] = 'dominoe0-0'
tableau[1] = 'dominoe0-1'
tableau[2] = 'dominoe1-1'
tableau[3] = 'dominoe0-2'
tableau[4] = 'dominoe5-0'
tableau[5] = 'dominoe5-1'

console.log(tableau);

/*var A = tableau[0, 5];
var B = A;*/

