/*
var age = +prompt("enter age", "");

function checkAge(age){
    return (age>18) ? true : confirm("parents");
    return (age > 18) || confirm("parents");
}

checkAge(age);
*/

/*
var a = +prompt("enter a", "");
var b = +prompt("enter b", "");

function min(a,b){
    if(a<b){
        return a;
    } 
    return b;
}

alert(min(a,b));
*/

var x = +prompt("enter x", "");
var n = +prompt("enter n", "");

function pow(x,n){
    var result=x;
    for(var i=0; i<n; i++){
        result *= x;
    }
    return result;
}

alert(pow(x,n));