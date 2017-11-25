/*
function ucFirst(str){
    var str_r = str.charAt(0).toUpperCase() + str.slice(1);
    return str_r;
}
*/

/*
function checkSpam(str){
    if(str.toLowerCase().indexOf("viagra")>=0 || str.toLowerCase().indexOf("xxx")>=0){
        return true;
    }
    return false;
}
*/

/*
function truncate(str, maxlength){
    if(str.length>maxlength){
        return str.slice(0, maxlength-3) + "..."
    }
    return str;
}
*/

function extractCurrencyValue(str) {
    var num = "";
    for(i=0;i<str.length;i++){
    if(isNumeric(str[i])){
        num+=str[i];
    }
    }
    return num;
}
function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var str = prompt("enter string","");
//var maxlength = +prompt("enter maxlength", "");

//alert(ucFirst(str));
//alert(checkSpam(str));
//alert(truncate(str, maxlength));
alert(extractCurrencyValue(str));