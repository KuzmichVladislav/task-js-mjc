/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const D = new Date("2020-06-01T00:00:00.000Z");
    D.setSeconds(D.getSeconds() + seconds);
    return D;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {number}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    let bin = 0;
    let rem, i = 1;
    while (decimal !== 0) {
        rem = decimal % 2;
        decimal = parseInt(decimal / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    const re = new RegExp('[' + substring + ']', 'gi');
    const arr = text.match(re);
    if (arr == null) {
        return 0;
    } else {
        return arr.length;
    }
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let returnString = '';
    for (const stringElement of string) {
        returnString = returnString + stringElement.repeat(2);
    }
    return returnString;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    function newFunction(str1) {
        return str1;
    }

    return newFunction(str)
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    return Math.pow(2, disks) - 1;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const matrix1NumRows = matrix1.length, matrix1NumCols = matrix1[0].length,
        matrix2NumCols = matrix2[0].length,
        resultMatrix = new Array(matrix1NumRows);
    for (let r = 0; r < matrix1NumRows; ++r) {
        resultMatrix[r] = new Array(matrix2NumCols);
        for (let c = 0; c < matrix2NumCols; ++c) {
            resultMatrix[r][c] = 0;
            for (let i = 0; i < matrix1NumCols; ++i) {
                resultMatrix[r][c] += matrix1[r][i] * matrix2[i][c];
            }
        }
    }
    return resultMatrix;
}


/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all the arguments provided to the gather functions as a string in the order
 * specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(...str) {
    function order(...matrix1) {
        let resultString = "";
        for (const matrixElement of matrix1) {
            resultString = resultString + str[matrixElement];
        }
        return resultString
    }

    return order;
}

module.exports = {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    matrixMultiplication,
    towerHanoi,
    gather
};
