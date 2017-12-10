/*
function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(1)(2));

console.log(sum(1)(2));
*/
/*
function makeBuffer() {
    var text = '';
    function buffer() {
        if (arguments.length != 0) {
            for (var i = 0; i < arguments.length; i++) {
                text += arguments[i];
            }
        }
        return text;
    }
    buffer.clear = function () {
        text = '';
    }
    return buffer;

}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());
buffer.clear();
console.log(buffer());
*/
/*
function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];
users.sort(byField('name'));
users.forEach(function (user) {
    console.log(user.name);
});

users.sort(byField('age'));
users.forEach(function (user) {
    console.log(user.name);
});
*/
/*
function filter(arr, func) {
    var retArr = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (func(value)) {
            retArr.push(value)
        }
    }
    return retArr;
}
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function (x) {
        return arr.indexOf(x) != -1;
    };
}
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, function (a) {
    return a % 2 == 0;
}));
console.log(filter(arr, inBetween(3, 6)));
console.log( filter(arr, inArray([1, 2, 10])) );
*/

function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = (function (x) {
            return function () {
                console.log(x);
            };
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();

army[0]();
