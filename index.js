// 1) Write a function splitAndMerge
function splitAndMerge (string, separator) {
    if (separator === undefined) separator = ' ';
    return string.replace(new RegExp(separator,'g'), '').split('').join(' ');
}

console.log(splitAndMerge('My name is John'));
// https://jsfiddle.net/3eLg2xhy/1/

// 2. Write a function convert
var employee = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
};

function convert(object) {
    var result = [];
    for(var key in object) {
        result.push([key, object[key]]);
    }
    return result;
}

console.log(convert(employee));
// https://jsfiddle.net/7w0v62eh/

// 3) Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.
function toCamelCase(string) {
    var result = '';
    string.split(/[-_]/g).map(function(value, index) {
        if (!index) {
            result += value.toLowerCase();
        } else {
            result += value[0].toUpperCase() + value.slice(1).toLowerCase();
        }
    });
    return result;
}

console.log(toCamelCase('tHe-SteaLth-waRrrioR'));
console.log(toCamelCase('tHe_SteaLth_waRrrioR'));
// https://jsfiddle.net/fonvy6g8/

// 4) Write a function that takes a sentence (string)
// and reverses each word in the sentence.
function stringReverse(string, devider) {
    if (devider === undefined) devider = ' ';
    var result = [];
    string.split(devider).map(function(value) {
        result.push(value.split('').reverse().join(''));
    });
    return result.join(devider);
}

console.log(stringReverse(' A fun little challenge! '));
// https://jsfiddle.net/j82on4fr/

// 5) Write a function stringExpansion
function stringExpansion(string) {
    var result = '', number, letters;
    var arr = string.match(/[0-9]+[a-z]+/gi);
    arr.forEach(function(value, index) {
        number = value.match(/[0-9]+/gi)[0];
        number = +number.substring(number.length - 1);
        letters = value.match(/[a-z]+/gi)[0];
        result += letters.repeat(number);
    });
    return result;
}

console.log(stringExpansion('3a45Bcd2d8a'));
// https://jsfiddle.net/j82on4fr/1/

// 6) Write largest and smallest functions that returns
// the largest and smallest number passed like a argument.
function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));
// https://jsfiddle.net/7x691ve0/

// 7) Write function transform that will transform array of numbers
// to array of functions that will return value from a base array.
function transform(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(function (value) {
            return function () {
                return value;
            }
        }(arr[i]));
    }
    return result;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
// https://jsfiddle.net/cd4ge81q/

// 8) Write function sum. Function expects arbitrary number of digit
// arguments and returns compound value of them.
function sum() {
    if(arguments.length === 0){
        return 0;
    }
    function recursSum (array, key) {
        if (key === undefined) key = 0;
        if(key === array.length - 1) {
            return array[key];
        }
        return array[key] + recursSum(array, key + 1);
    }
    return recursSum(arguments);
}

console.log(sum(1,3,5,7));
// https://jsfiddle.net/1phqLsum/

// 9) Write function countDown. Function expects number and logs
// values one by one till zero with one second delay.
function countDown (number) {
    var counter = Number(number) || 0; // if number is string
    if (counter < 0) counter = 0; // if number is less than zero
    console.log(counter);
    var timer = setInterval(function () {
        if (counter <= 0) {
            clearInterval(timer);
            return;
        }
        console.log(counter - 1);
        counter--;
    }, 1000);
}

countDown(8);
// https://jsfiddle.net/su065doh/

// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind().
// myBind() should work in an exact same way as the usual bind() - take context
// as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind = function (context) {
    var myfunction = this;
    return function(number) {
        return myfunction.call(context, number);
    }
}

function addPropToNumber(number) {
    return this.prop + number
}

var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(2));
// https://jsfiddle.net/s8vj21tg/
