function MyMath(firstOp, secondOp) {
    this.a = firstOp;
    this.b = secondOp;
}
MyMath.prototype.add = function () {
    return this.a + this.b;
}
MyMath.prototype.subtract = function () {
    return this.a - this.b;
}
MyMath.prototype.multiply = function () {
    return this.a * this.b;
}
MyMath.prototype.divide = function () {
    return this.a / this.b;
}

function Calc() {
    var firstOpLocator = $('input[name=firstOp]');
    var firstOpValue = parseFloat(firstOpLocator.val());
    if (isNaN(firstOpValue)) {
        firstOpLocator.val('');
        return '';
    }

    var secondOpLocator = $('input[name=secondOp]');
    var secondOpValue = parseFloat(secondOpLocator.val());
    if (isNaN(secondOpValue)) {
        secondOpLocator.val('');
        return '';
    }    

    var operator = $('input[name=operator]:checked').val();

    var myMath = new MyMath(firstOpValue, secondOpValue);

    switch (operator) {
        case 'add':
            return myMath.add();

        case 'subtract':
            return myMath.subtract();

        case 'multiply':
            return myMath.multiply();

        case 'divide':
            return myMath.divide();

        default:
            break;
    }
}

$(function () {
    $('input[name=operator]').change(function () {
        $('input[name=result]').val(Calc());
    });

    $('input[name=firstOp]').keyup(function () {
        $('input[name=result]').val(Calc());
    });

    $('input[name=secondOp]').keyup(function () {
        $('input[name=result]').val(Calc());
    });
});