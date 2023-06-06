alert("Bem Vindo");
var para = document.querySelector ("h1");
var x = 0

function ALTERAR(){

para.style.color = getCor(x % 3);
x = x + 1;
}
function getCor(n){
    cores = ["red", "blue", "purple"];
return cores[n]
}