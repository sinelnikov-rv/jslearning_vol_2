/* 
var styles = ["jazz", "bluz"];
styles.push("rock-n-roll");
styles[styles.length-2] = "classic";
alert(styles.shift());
styles.unshift("rap", "reggi");
 */

 /*
 var arr =["apple", "orange", "lime", "banan"];
 var rand = Math.floor(Math.random()*arr.length);
 alert(arr[rand]);
 */

/*
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
var numbers = [];
var sum = 0;
while(true){
    number = prompt("enter numbers", "");
    if(isNumeric(number)){
        numbers.push(+number);
    } else{
        break;
    }
}
for(i=0; i<numbers.length; i++){
    sum += numbers[i];
}
alert(sum);
*/

/* 
function find(arr,value){
    for(var i=0; i<arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
*/

/*
function filterRange(arr, a, b){
    var filtered =[];
    for(i=0; i<arr.length; i++){
        if(arr[i]>=a && arr[i]<=b){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}
*/
/*
function isPrime(num){
    for(var i=2; i < num; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}
function findSimple(num){
    var simpled = [];
    for(var i=2; i<num; i++){
        if(isPrime(i)){
            simpled.push(i);
        }
    }
    return simpled;
}
function sumOfPrime(n){
    var sum = 0;
    var arr = findSimple(n);
    for(var i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
alert(sumOfPrime(100));
*/

function getMaxSubSum(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        var subSum =0 
        for(var j=i; j<arr.length; j++) {
            subSum += arr[j];
            sum = Math.max(sum, subSum);
        }
    }
    return sum;
}