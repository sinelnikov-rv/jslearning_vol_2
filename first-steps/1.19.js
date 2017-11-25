var num = +prompt("enter number", "");
/* 
function sumTo(n){
    var result = 0;
    for (var i=0; i<=n; i++){
        result +=i;
    }
    return result;
}
*/
/*
function sumTo(n){
    if(n==1) return 1
    return n + sumTo(n-1);
}
*/
function sumTo(n) {
    return n * (n + 1) / 2;
}
function expTo(n) {
    if (n == 1) return 1
    return n * expTo(n - 1);
}
function fib(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
//alert(sumTo(num));
//alert(expTo(num));
alert(fib(num));