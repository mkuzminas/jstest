/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstArg, secondArg) {
    this.firstArg = firstArg;
    this.secondArg = secondArg;
    this.sum = () => {
        return firstArg + secondArg;
    };
    this.subtraction = () => {
        return firstArg - secondArg;
    };
    this.multiplication = () => {
        return firstArg * secondArg;
    };
    this.division = () => {
        return firstArg / secondArg;
    };

};

const testCalc = new Calculator(70, 20);


console.log("Sum: ", testCalc.sum());
console.log("Subtract: ", testCalc.subtraction());
console.log("Multiply: ", testCalc.multiplication());
console.log("Divide: ", testCalc.division());