function add(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let add=parseInt(number1)+parseInt(number2);
    document.getElementById("total").innerHTML="Addition of Two Number:"+add;
}
function sub(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let sub=parseInt(number1)-parseInt(number2);
    document.getElementById("total").innerHTML="Subtraction of Two Number:"+sub;
}
function mul(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let mul=parseInt(number1)*parseInt(number2);
    document.getElementById("total").innerHTML="Multiplication of Two Number:"+mul;
}

function div(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let div=parseInt(number1)/parseInt(number2);
    document.getElementById("total").innerHTML="Division of Two Number:"+div;
}
