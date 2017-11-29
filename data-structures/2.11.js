/*
var date = new Date(2012, 01, 20, 3, 12);
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
console.log(date.toLocaleDateString("ru", options));
*/
/*
var date = new Date(2017, 10, 28);
var options = {
    weekday: 'short'
};
function getWeekDay(date){
    return date.toLocaleDateString("ru", options);
}
console.log(getWeekDay(date));
*/
/*
var date = new Date(2012, 0, 3);
function getLocalDay(date){
    var day = date.getDay();
    if(day ==0){
        return 7;
    }
    return day;
}
console.log(getLocalDay(date));
*/
/*
var date = new Date(2015, 0 ,2);
function getDateAgo(date, days){
    var day = new Date(date);
    day.setDate(date.getDate() - days);
    return day.getDate();
}
console.log(getDateAgo(date, 2));
*/
/*
function getLastDayOfMonth(date, month){
    var day = new Date(date, month+1, 0)
    return day.getDate();
}
console.log(getLastDayOfMonth(2012, 1));
*/
/*
function getSecondsToday(){
    var seconds = 0;
    var date = new Date();
    seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return seconds;
}
console.log(getSecondsToday());
*/
/*
function getSecondsToTomorrow(){
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    return Math.round((tomorrow-now)/1000) ;
}
console.log(getSecondsToTomorrow());
*/
var date = new Date(2014, 0, 30);
function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var mm = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    var yy = date.getFullYear() % 100;
    if (yy < 10) {
        yy = '0' + yy;
    }
    return dd + '.' + mm + '.' + yy;
}
console.log(formatDate(date));