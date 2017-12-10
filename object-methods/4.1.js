/*
var calculator ={
    read: function() {
        this.a = +prompt('enter a', 0);
        this.b = +prompt('enter b', 0);
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().up().down().showStep();