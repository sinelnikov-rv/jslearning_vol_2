/*
function Calculator () {
    this.read = function () {
        this.a = +prompt('enter a', 0);
        this.b = +prompt('enter b', 0);
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}
var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (){
        this.add = +prompt('enter value', 0);
        this.value += this.add;
    }
}
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );