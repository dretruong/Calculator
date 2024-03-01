//global variables:
let num1 = "",
num2= "",
operatorBool = false;
operator = ""

function add(left, right){
    return (left + right).toString()
}
function sub(left, right){
    return (left - right).toString()
}
function divide(left, right){
    return (left/right).toString()
}
function mult(left, right){
    return (left * right).toString()
}
function operate(left,operator,right){
    if(operator == "/"){
        return divide(left,right)
    }
    if(operator == "+"){
        return add(left,right)
    }
    if(operator == "-"){
        return sub(left,right)
    }
    if(operator == "*"){
        return mult(left,right)
    }
}
function display(){
    var screen = document.getElementById("display")
    var num = document.getElementsByClassName("number")
    for(var i = 0; i < num.length; i++){
        num[i].addEventListener("click", function(){ if(num1.length<9){num1 += this.innerHTML};
         screen.innerHTML = num1;
         });
    }  
}
function compute(left,operator,right){
    holderNum = "";
    var screen = document.getElementById("display")
    var operators = document.getElementsByClassName("operator");
    var equal = document.getElementById("equal");
    for (var i = 0; i < operators.length; i++){
        operators[i].addEventListener("click",function(){
            if(operatorBool == true){
                screen.innerHTML = operate(Number(holderNum), operator, Number(num1))
                operator = this.innerHTML;
                holderNum = screen.innerHTML;
                num1 = "";
            }
            else{
                operatorBool = true
                operator = this.innerHTML;
                holderNum = num1;
                num1 = "";
            }
            console.log(operator)
        })
    }
    equal.addEventListener("click", function(){
        screen.innerHTML = operate(Number(holderNum), operator, Number(num1))
        num1 = screen.innerHTML;
        operatorBool = false
    })
}
display()
compute()
