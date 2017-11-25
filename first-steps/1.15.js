/*
for (var i=2; i<11; i+=2){
     alert(i);
}
*/

/*
var num = 0;
 while(num<100){
    num = +prompt("number biger than 100",'');
}
*/

var start = 2;
var stop = 10;

for(var i=start; i<stop;i++){
    if(!(i%2==0||i%3==0||i%5==0)){
        alert(i);
    }
}