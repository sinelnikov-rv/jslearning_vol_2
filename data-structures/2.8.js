/*
function addClass(obj, cls) {
    var arrClassName = [];
    if(obj.className){
        arrClassName = obj.className.split(' ');
    }
    for (var i = 0; i < arrClassName.length; i++) {
        if (arrClassName[i] == cls) {
            return;
        }
    }
    arrClassName.push(cls);    
    obj.className = arrClassName.join(' ');
    return obj;
}
var obj = {
    className: 'open menu'
  };
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log(obj.className);
*/

/*
function camelize(str){
    var strWords = [];
    strWords = str.split('-');
    for(var i=1; i<strWords.length; i++){
            strWords[i] = strWords[i].charAt(0).toUpperCase() + strWords[i].slice(1)
    }
    var str = strWords.join("");
    return str;
}

console.log(camelize("-webkit-transition"));
*/

/*
function removeClass(obj, cls) {
    var arrClassName = [];
    arrClassName = obj.className.split(' ');
    for (var i = 0; i < arrClassName.length; i++) {
        if (arrClassName[i] == cls) {
            arrClassName.splice(arrClassName.indexOf(cls), 1);
            i--;
        }
    }
    obj.className = arrClassName.join(' ');
    return obj;
}

var obj = {
    className: 'open menu ld ld dg'
};

console.log(removeClass(obj, "ld"));
*/

/*
function filterRangeInPlace(arr, a, b){
    for(var i=0; i<arr.length; i++){
        if(!(arr[i]>a && arr[i]<b)){
            arr.splice(i,1);
        }
    }
    return arr;
}
*/

/*
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function reverseSort(arr){
    for (var i = 0; i<arr.length; i++){
        arr.sort(compareNumeric);
    }
    return arr.reverse();
}

console.log(reverseSort([5, 2, 1, -10, 8]));
*/

/*
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();
console.log(arr);
console.log(arrSorted);
*/

/*
function randSort(a,b){
    return (Math.random()-0.5)
}
*/

/*
function compareAge(a,b){
    return (a.age - b.age);
}
function objSort(arr){
        arr.sort(compareAge);
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

objSort(people);
*/

/*
function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next
    }
}
*/
/*
function printList(list){
    console.log(list.value);
    if(list.next){
        printList(list.next);
    }
}

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);
*/

/*
function sumOfChar(str) {
    var sum = 0;
    var str = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}
function aclean(arr) {
    outer: for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (sumOfChar(arr[i]) == sumOfChar(arr[j])) {
                arr.splice(i,1);
                continue outer;
            }
        }
    }
    return arr;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(aclean(arr));
*/

function unique(arr) {
    var result = [];
    oute: 
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
        for (var j = 0; j < result.length; j++) {
            if (result[j] == str) {
                continue oute;
            }
        }
        result.push(str);
    }
    return result;
}

var arr = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", "8-()"];

console.log(unique(arr));