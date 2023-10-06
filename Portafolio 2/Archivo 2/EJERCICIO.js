
let number1, number2;
let resultado = 0;
function sumar(){
number1= document.getElementById("num1").value;
number2= document.getElementById("num2").value;
resultado= parseFloat(number1) + parseFloat(number2);
document.getElementById("resultado").innerHTML=resultado;
}
function restar(){
    number1= document.getElementById("num1").value;
    number2= document.getElementById("num2").value;
    resultado= parseFloat(number1) - parseFloat(number2);
    document.getElementById("resultado").innerHTML=resultado;
    }
function multiplicara(){
    number1= document.getElementById("num1").value;
    number2= document.getElementById("num2").value;
    resultado= parseFloat(number1) * parseFloat(number2);
    document.getElementById("resultado").innerHTML=resultado;
    }
function dividir(){
    number1= document.getElementById("num1").value;
    number2= document.getElementById("num2").value;
    resultado= parseFloat(number1) / parseFloat(number2);
    document.getElementById("resultado").innerHTML=resultado;
    }