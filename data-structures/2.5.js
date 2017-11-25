/* 
function isEmpty(obj){
    var keys = 0;
    for (var key in obj){
        keys++;
    }
    if(keys > 0){
      return false;
    }
    return true;
} 
*/

/*
function sumOfKeyValues(obj){
    var sum = 0;
    for(var key in obj){
        sum+=obj[key];
    }
    return sum;
}

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250 
};
*/

function multiplyNumeric(obj){
    for (var key in obj){
        if(isNumeric(obj[key])){
            obj[key]*=2;
        }
    }
    return obj;
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

//alert(sumOfKeyValues(salaries));
console.dir(multiplyNumeric(menu));