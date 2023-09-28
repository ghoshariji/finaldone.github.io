function sum(){


let a = parseInt(document.getElementById('a').value);
let b = parseFloat(document.getElementById('b').value);
let c = document.getElementById('c').value;

let result;

if(c== '+')
{
    result = a + b ;
}
else if (c=='-')
{
    result=a-b;
}
else if(c=='*')
{
    result=a*b;
}
else if(c=='/')
{
    result=a/b;
}
else if(c=='%')
{
    result=a%b;
}
else
{
    result="In Valid Operand";
}
document.getElementById('result').textContent=result;

}
document.getElementById('btn').addEventListener('click',sum);



console.log("a");