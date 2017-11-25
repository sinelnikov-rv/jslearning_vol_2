var userAnswer = prompt("Original name of JavaScript", " ");
if(userAnswer == "ECMAScript"){
    alert("You are right");
} else {
    alert("You are wrong");
}

var userNumber = prompt("Please enter the number", " ");
if(userNumber>0){
    alert("1");
} else if (userNumber < 0){
    alert("-1");
} else {
    alert("0");
}

var login = prompt("Enter login","");
if (login == null){
    alert("Access denied");
} else if(login != "admin"){
    alert("wrong login");
} else {
    var pass = prompt("Enter password", "");
    if(pass == null){
        alert("Access denied");
    } else if (pass != "admin"){
        alert("wrong pass");
    } else {
        alert("acces granted")
    }
}