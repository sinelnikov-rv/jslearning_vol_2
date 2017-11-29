function sum(){
    var argSum = 0;
    for(var i = 0; i<arguments.length; i++){
        argSum += arguments[i];
    }
    return argSum;
}

console.log(sum(1,2,3));