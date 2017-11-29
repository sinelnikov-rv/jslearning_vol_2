/*
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function (word){
    return word.length;
});
console.log(arrLength);
*/
function getSums(arr){
    var result = [];
    if (!arr.length){
        return result;
    }
        var all = arr.reduce(function(sum, current){
            result.push(sum);
            return sum + current;
        });
        result.push(all);
    
    return result;
}
