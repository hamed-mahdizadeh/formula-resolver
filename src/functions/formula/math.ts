// var numeric = require('numeric');
// var utils = require('./utils');
// var error = require('./error');
// var statistical = require('./statistical');
// var information = require('./information');

import { isIdentifierOrPrivateIdentifier, parseJsonConfigFileContent } from 'typescript';
import * as errors from '../../errors';

function checkIsInvalid(...params: any[]) {
    return params.some(p=> p === undefined || isNaN(p));
}


export function ABS(param: string) {
    let numberParam = +param;
    if (isNaN(numberParam)) {
        return param;
    }
    return Math.abs(numberParam);
};

export function ACOS(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.acos(numberParam);
}

export function ACOSH (params: string) {  
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log(numberParam + Math.sqrt(numberParam * numberParam - 1));
};

export function ACOT (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.atan(1 / numberParam);
};

export function ACOTH (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 0.5 * Math.log((numberParam + 1) / (numberParam - 1));
};

export function ASIN (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.asin(numberParam);
};

export function ASINH (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log(numberParam + Math.sqrt(numberParam * numberParam + 1));
};

export function ATAN (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.atan(numberParam);
};

export function COS(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.cos(numberParam);
};
export function COSH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return (Math.exp(numberParam) + Math.exp(-numberParam)) / 2;
}

export function COT(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 1 / Math.tan(numberParam);
}

export function COTH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    var e2 = Math.exp(2 * numberParam);
    return (e2 + 1) / (e2 - 1);
}

export function CSC(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 1 / Math.sin(numberParam);
}

export function CSCH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 2 / (Math.exp(numberParam) - Math.exp(-numberParam));
}


export function DECIMAL(params: string) {
    if (params === undefined) {
        return errors.VALUE;
    }
    let [number, radix] = params.split(',').map(c=> c.trim());
    if (number === undefined || radix === undefined) {
        return errors.VALUE;
    }
    return parseInt(number, +radix);
};

export function DEGREES(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return numberParam * 180 / Math.PI;
}

export function EVEN(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return exports.CEILING(numberParam, -2, -1);
}

export function ATANH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log((1 + numberParam) / (1 - numberParam)) / 2;
}

export function FACTDOUBLE(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    var n = Math.floor(numberParam);
    if (n <= 0) {
        return 1;
    } else {
        return n * exports.FACTDOUBLE(n - 2);
    }
}

export function INT(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.floor(numberParam);
}

export function LN(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log(numberParam);
}

export function ODD(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    var temp = Math.ceil(Math.abs(numberParam));
    temp = (temp & 1) ? temp : temp + 1;
    return (numberParam > 0) ? temp : -temp;
}

export function SEC(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 1 / Math.cos(numberParam);
}

export function SECH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 2 / (Math.exp(numberParam) + Math.exp(-params));
}

export function SIGN(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    if (numberParam < 0) {
        return -1;
    } else if (numberParam === 0) {
        return 0;
    } else {
        return 1;
    }
}

export function SIN(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.sin(numberParam);
}

export function SINH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return (Math.exp(numberParam) - Math.exp(-numberParam)) / 2;
}

export function SQRT(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    if (numberParam < 0) {
        throw Error(errors.NUM);
    }
    return Math.sqrt(numberParam);
}

export function SQRTPI(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.sqrt(numberParam * Math.PI);
}

export function TAN(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.tan(numberParam);
}

export function TANH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    var e2 = Math.exp(2 * numberParam);
    return (e2 - 1) / (e2 + 1);
}

export function LOG (params: string) {
    const [strNum, strBase] = params.split(',').map(c=> c.trim())
    const num = +strNum;
    const logBase = +(strBase ?? 10);

    if (!num || !logBase || isNaN(logBase) || isNaN(num)) {
        throw Error(errors.NUM);
    }

    if(Math.log(logBase) === 0){
        throw Error(errors.DIVBY0);
    } 

    return Math.log(num) / Math.log(logBase);
};

export function LOG10(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log(numberParam) / Math.log(10);
}

function  _sum(...parameters: number[]): number {
    return parameters.reduce((sum, current)=> sum + current, 0);
}

export function SUM(params: string) {
    const parameters = params.split(',').map(p=> +p);
    return _sum(...parameters);
}



export function ATAN2 (params: string) {
    const [number_x, number_y] = params.split(',').map(c=> +c.trim());
    if (checkIsInvalid(number_x, number_y)) {
        throw Error(errors.VALUE);
    }
    return Math.atan2(number_x, number_y);
};

export function TRUNC(params:string) {
    const [strNumber, strDigits] = params.split(',').map(c=>c.trim());
    const digits = (strDigits === undefined) ? 0 : +strDigits;
    const number = +strNumber;
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};

export function LCM(param:string) {
    const params = param.split(',').map(c=> +c.trim());
    if(checkIsInvalid(...params)){
        throw Error(errors.VALUE);
    }
    for (var i, j, n, d, r = 1;
        (n = params.pop()) !== undefined;) {
        while (n > 1) {
            if (n % 2) {
                for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
                    //empty
                }
                d = (i <= j) ? i : n;
            } else {
                d = 2;
            }
            for (n /= d, r *= d, i = params.length; i;
                (params[--i] % d) === 0 && (params[i] /= d) === 1 && params.splice(i, 1)) {
                //empty
            }
        }
    }
    return r;
}

export function POWER(parameters:string) {
    const [number, power] = parameters.split(',').map(p=>{
        if(!isNaN(p as any)){
            return +p;
          }
          else throw Error("#VALUE!");
    });
    return Math.pow(number, power) + '';
}

export function BASE(params:string) {
    let [number, radix, min_length] = params.split(',').map(c=> +c);
    min_length = min_length || 0;
    if(checkIsInvalid(number, radix, min_length)){
        throw Error(errors.VALUE);
    }
    const result = number.toString(radix);
    return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
}

export function CEILING(params:string) {
    let [number, significance, mode] = params.split(',').map(c=> +c.trim());
    significance = (significance === undefined) ? 1 : significance;
    mode = (mode === undefined) ? 0 : mode;
    if(checkIsInvalid(number, significance, mode)){
        throw Error(errors.VALUE);
    }
    if (significance === 0) {
        return 0;
    }

    significance = Math.abs(significance);
    if (number >= 0) {
        return Math.ceil(number / significance) * significance;
    } else {
        if (mode === 0) {
            return -1 * Math.floor(Math.abs(number) / significance) * significance;
        } else {
            return -1 * Math.ceil(Math.abs(number) / significance) * significance;
        }
    }
}

exports.CEILING.MATH = exports.CEILING;

exports.CEILING.PRECISE = exports.CEILING;

const _FACT = (function () {
    const MEMOIZED_FACT: number[] = [];
    return (num:number)=>{
        var n = Math.floor(num);
        if (n === 0 || n === 1) {
            return 1;
         } else if (MEMOIZED_FACT[n] > 0) {
            return MEMOIZED_FACT[n];
        } else {
            MEMOIZED_FACT[n] = exports.FACT(n - 1) * n;
            return MEMOIZED_FACT[n];
        }
    };
})();


export function FACT(params:string) {
    let number = +params;
    if(checkIsInvalid(number)){
        return errors.VALUE;
    }
    return _FACT(number);
}

export function COMBIN(params:string) {
    const [number, number_chosen] = params.split(',').map(c=> +c.trim());
    if(checkIsInvalid(number, number_chosen)) {
        throw Error(errors.VALUE);
    }
    return _FACT(number) / (_FACT(number_chosen) * _FACT(number - number_chosen));
}

export function COMBINA (params: string) {
    const [number, number_chosen] = params.split(',').map(c=> +c.trim());
    if (checkIsInvalid(number, number_chosen)) {
        throw Error(errors.VALUE);
    }
    return (number === 0 && number_chosen === 0) ? 1 : exports.COMBIN(number + number_chosen - 1, number - 1);
};


exports.EXP = Math.exp;


export function FLOOR(params:string) {
    let [number, significance, mode] = params.split(',').map(c=> +c.trim());
    mode = (mode === undefined) ? 0 : mode;
    if(checkIsInvalid(number, significance, mode)) {
        throw Error(errors.VALUE);
    }
    if (significance === 0) {
        return 0;
    }
    significance = Math.abs(significance);
    if (number >= 0) {
        return Math.floor(number / significance) * significance;
    } else {
        if (mode === 0) {
            return -1 * Math.ceil(Math.abs(number) / significance) * significance;
        } else {
            return -1 * Math.floor(Math.abs(number) / significance) * significance;
        }
    }
}



// adapted http://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
export function GCD (params: string) {
    const range = params.split(',').map(c=>+c.trim());
    if(checkIsInvalid(...range)) {
        throw Error(errors.VALUE);
    }
    var n = range.length;
    var r0 = range[0];
    var x = r0 < 0 ? -r0 : r0;
    for (var i = 1; i < n; i++) {
        var ri = range[i];
        var y = ri < 0 ? -ri : ri;
        while (x && y) {
            if (x > y) {
                x %= y;
            } else {
                y %= x;
            }
        }
        x += y;
    }
    return x;
};


export function EQ (params: string) {
    let paramsArray = params.split(',').map(c=>c.trim());
    let [value1, value2] = paramsArray;
    if (paramsArray.length !== 2) {
        return errors.NA;
    }
    return value1 === value2;
};

export function NE (params: string) {
    let paramsArray = params.split(',').map(c=>c.trim());
    let [value1, value2] = paramsArray;
    if (paramsArray.length !== 2) {
        return errors.NA;
    }
    return value1 !== value2;
};

export function MOD (params: string) {
    let [dividend, divisor] = params.split(',').map(c=>+c.trim());
    if(checkIsInvalid(dividend, divisor)){
        throw Error(errors.VALUE);
    }
    if (divisor === 0) {
        return errors.DIVBY0;
    }
    var modulus = Math.abs(dividend % divisor);
    return (divisor > 0) ? modulus : -modulus;
};

export function MROUND (params: string) {
    let [number, multiple] = params.split(',').map(c=>+c.trim());

    if (checkIsInvalid(number, multiple)) {
        throw Error(errors.VALUE);
    }
    if (number * multiple < 0) {
        throw Error(errors.NUM);
    }

    return Math.round(number / multiple) * multiple;
};

export function RADIANS (params: string) {
    let number = +params;
    if (checkIsInvalid(number)) {
        throw Error(errors.VALUE);
    }
    return number * Math.PI / 180;
};

export function RAND() {
    return Math.random();
};

export function PI () {
    return Math.PI;
};

export function MULTINOMIAL(params: string) {
    var args = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(...args)) {
        throw Error(errors.VALUE);
    }
    var sum = 0;
    var divisor = 1;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
        divisor *= exports.FACT(args[i]);
    }
    return exports.FACT(sum) / divisor;
};




export function PRODUCT (params: string) {
    var args = params.split(',').map(c=>+c.trim());
    if (args instanceof Error) {
        return args;
    }
    var result = 1;
    for (var i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
};

export function QUOTIENT  (params: string) {
    let [numerator, denominator] = params.split(',').map(c=>+c.trim());
    
    if (checkIsInvalid(numerator, denominator)) {
        throw Error(errors.VALUE);
    }
    return parseInt((numerator / denominator) + '', 10);
};

export function DIVIDE (params: string) {
    const [dividend, divisor] = params.split(',').map(c=>+c.trim());
    if (arguments.length !== 2) {
        throw Error(errors.NA);
    }
    if (checkIsInvalid(dividend, divisor)) {
        throw Error(errors.VALUE);
    }

    if (divisor === 0) {
        throw Error(errors.DIVBY0);
    }

    return dividend / divisor;
};



export function RANDBETWEEN (params: string) {
    let [bottom, top] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(bottom, top)) {
        throw Error(errors.VALUE);
    }
    // Creative Commons Attribution 3.0 License
    // Copyright (c) 2012 eqcode
    return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
};

export function ROUND (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
};

export function ROUNDDOWN (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};

export function ROUNDUP (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.ceil(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
};

export function ADD (param: string) {
    const params = param.split(',').map(c=>+c.trim())
    const [num1, num2] = params;
    if (params.length !== 2) {
        throw Error(errors.NA);
    }
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE)
    }

    return num1 + num2;
};

export function MINUS (param: string) {
    const params = param.split(',').map(c=>+c.trim())
    const [num1, num2] = params;
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE)
    }
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE)
    }

    return num1 - num2;
};

export function MULTIPLY (param: string) {
    const params = param.split(',').map(c=>+c.trim());
    const [factor1, factor2] = params;
    if (params.length !== 2) {
        throw Error(errors.VALUE);
    }
    if (checkIsInvalid(factor1, factor2)) {
        throw Error(errors.VALUE);
    }
    return factor1 * factor2;
};

export function GTE  (param: string) {
    const params = param.split(',').map(c=>+c.trim())
    const [num1, num2] = params;
    if (params.length !== 2) {
        throw Error(errors.VALUE);
    }
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE);
    }
    return num1 >= num2;
};

export function LT  (param: string) {
    const params = param.split(',').map(c=>+c.trim())
    const [num1, num2] = params;
    if (params.length !== 2) {
        throw Error(errors.VALUE);
    }
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE);
    }
    return num1 < num2;
};

export function LTE  (param: string) {
    const params = param.split(',').map(c=>+c.trim())
    const [num1, num2] = params;
    if (params.length !== 2) {
        throw Error(errors.VALUE);
    }
    if (checkIsInvalid(num1, num2)) {
        throw Error(errors.VALUE);
    }
    return num1 <= num2;
};




/*exports.SUMIF = function (range, criteria) {
    range = utils.parseNumberArray(utils.flatten(range));
    if (range instanceof Error) {
        return range;
    }
    var result = 0;
    for (var i = 0; i < range.length; i++) {
        result += (eval(range[i] + criteria)) ? range[i] : 0; // jshint ignore:line
    }
    return result;
};

exports.SUMIFS = function () {
    var args = utils.argsToArray(arguments);
    var range = utils.parseNumberArray(utils.flatten(args.shift()));
    if (range instanceof Error) {
        return range;
    }
    var criteria = args;

    var n_range_elements = range.length;
    var n_criterias = criteria.length;

    var result = 0;
    for (var i = 0; i < n_range_elements; i++) {
        var el = range[i];
        var condition = '';
        for (var c = 0; c < n_criterias; c++) {
            condition += el + criteria[c];
            if (c !== n_criterias - 1) {
                condition += '&&';
            }
        }
        if (eval(condition)) { // jshint ignore:line
            result += el;
        }
    }
    return result;
};

exports.SUMPRODUCT = function () {
    if (!arguments || arguments.length === 0) {
        return error.value;
    }
    var arrays = arguments.length + 1;
    var result = 0;
    var product;
    var k;
    var _i;
    var _ij;
    for (var i = 0; i < arguments[0].length; i++) {
        if (!(arguments[0][i] instanceof Array)) {
            product = 1;
            for (k = 1; k < arrays; k++) {
                _i = utils.parseNumber(arguments[k - 1][i]);
                if (_i instanceof Error) {
                    return _i;
                }
                product *= _i;
            }
            result += product;
        } else {
            for (var j = 0; j < arguments[0][i].length; j++) {
                product = 1;
                for (k = 1; k < arrays; k++) {
                    _ij = utils.parseNumber(arguments[k - 1][i][j]);
                    if (_ij instanceof Error) {
                        return _ij;
                    }
                    product *= _ij;
                }
                result += product;
            }
        }
    }
    return result;
};

exports.SUMSQ = function () {
    var numbers = utils.parseNumberArray(utils.flatten(arguments));
    if (numbers instanceof Error) {
        return numbers;
    }
    var result = 0;
    var length = numbers.length;
    for (var i = 0; i < length; i++) {
        result += (information.ISNUMBER(numbers[i])) ? numbers[i] * numbers[i] : 0;
    }
    return result;
};

exports.SUMX2MY2 = function (array_x, array_y) {
    array_x = utils.parseNumberArray(utils.flatten(array_x));
    array_y = utils.parseNumberArray(utils.flatten(array_y));
    if (utils.anyIsError(array_x, array_y)) {
        return error.value;
    }
    var result = 0;
    for (var i = 0; i < array_x.length; i++) {
        result += array_x[i] * array_x[i] - array_y[i] * array_y[i];
    }
    return result;
};

exports.SUMX2PY2 = function (array_x, array_y) {
    array_x = utils.parseNumberArray(utils.flatten(array_x));
    array_y = utils.parseNumberArray(utils.flatten(array_y));
    if (utils.anyIsError(array_x, array_y)) {
        return error.value;
    }
    var result = 0;
    array_x = utils.parseNumberArray(utils.flatten(array_x));
    array_y = utils.parseNumberArray(utils.flatten(array_y));
    for (var i = 0; i < array_x.length; i++) {
        result += array_x[i] * array_x[i] + array_y[i] * array_y[i];
    }
    return result;
};

exports.SUMXMY2 = function (array_x, array_y) {
    array_x = utils.parseNumberArray(utils.flatten(array_x));
    array_y = utils.parseNumberArray(utils.flatten(array_y));
    if (utils.anyIsError(array_x, array_y)) {
        return error.value;
    }
    var result = 0;
    array_x = utils.flatten(array_x);
    array_y = utils.flatten(array_y);
    for (var i = 0; i < array_x.length; i++) {
        result += Math.pow(array_x[i] - array_y[i], 2);
    }
    return result;
};




//TODO: use options
exports.AGGREGATE = function (function_num, options, ref1, ref2) {
    function_num = utils.parseNumber(function_num);
    options = utils.parseNumber(function_num);
    if (utils.anyIsError(function_num, options)) {
        return error.value;
    }
    switch (function_num) {
        case 1:
            return statistical.AVERAGE(ref1);
        case 2:
            return statistical.COUNT(ref1);
        case 3:
            return statistical.COUNTA(ref1);
        case 4:
            return statistical.MAX(ref1);
        case 5:
            return statistical.MIN(ref1);
        case 6:
            return exports.PRODUCT(ref1);
        case 7:
            return statistical.STDEV.S(ref1);
        case 8:
            return statistical.STDEV.P(ref1);
        case 9:
            return exports.SUM(ref1);
        case 10:
            return statistical.VAR.S(ref1);
        case 11:
            return statistical.VAR.P(ref1);
        case 12:
            return statistical.MEDIAN(ref1);
        case 13:
            return statistical.MODE.SNGL(ref1);
        case 14:
            return statistical.LARGE(ref1, ref2);
        case 15:
            return statistical.SMALL(ref1, ref2);
        case 16:
            return statistical.PERCENTILE.INC(ref1, ref2);
        case 17:
            return statistical.QUARTILE.INC(ref1, ref2);
        case 18:
            return statistical.PERCENTILE.EXC(ref1, ref2);
        case 19:
            return statistical.QUARTILE.EXC(ref1, ref2);
    }
};

exports.ARABIC = function (text) {
    // Credits: Rafa? Kukawski
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)) {
        return error.value;
    }
    var r = 0;
    text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (i) {
        r += {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }[i];
    });
    return r;
};

exports.SUBTOTAL = function (function_code, ref1) {
    function_code = utils.parseNumber(function_code);
    if (function_code instanceof Error) {
        return function_code;
    }
    switch (function_code) {
        case 1:
            return statistical.AVERAGE(ref1);
        case 2:
            return statistical.COUNT(ref1);
        case 3:
            return statistical.COUNTA(ref1);
        case 4:
            return statistical.MAX(ref1);
        case 5:
            return statistical.MIN(ref1);
        case 6:
            return exports.PRODUCT(ref1);
        case 7:
            return statistical.STDEV.S(ref1);
        case 8:
            return statistical.STDEV.P(ref1);
        case 9:
            return exports.SUM(ref1);
        case 10:
            return statistical.VAR.S(ref1);
        case 11:
            return statistical.VAR.P(ref1);
        // no hidden values for us
        case 101:
            return statistical.AVERAGE(ref1);
        case 102:
            return statistical.COUNT(ref1);
        case 103:
            return statistical.COUNTA(ref1);
        case 104:
            return statistical.MAX(ref1);
        case 105:
            return statistical.MIN(ref1);
        case 106:
            return exports.PRODUCT(ref1);
        case 107:
            return statistical.STDEV.S(ref1);
        case 108:
            return statistical.STDEV.P(ref1);
        case 109:
            return exports.SUM(ref1);
        case 110:
            return statistical.VAR.S(ref1);
        case 111:
            return statistical.VAR.P(ref1);

    }
};*/


// exports.POWER = function (number, power) {
//     number = utils.parseNumber(number);
//     power = utils.parseNumber(power);
//     if (utils.anyIsError(number, power)) {
//         return error.value;
//     }
//     var result = Math.pow(number, power);
//     if (isNaN(result)) {
//         return error.num;
//     }

//     return result;
// };


// exports.SUM = function () {
//     var result = 0;
//     var argsKeys = Object.keys(arguments);
//     for (var i = 0; i < argsKeys.length; ++i) {
//         var elt = arguments[argsKeys[i]];
//         if (typeof elt === 'number') {
//             result += elt;
//         } else if (typeof elt === 'string') {
//             var parsed = parseFloat(elt);
//             !isNaN(parsed) && (result += parsed);
//         } else if (Array.isArray(elt)) {
//             result += exports.SUM.apply(null, elt);
//         }
//     }
//     return result;
// };

// exports.POW = function (base, exponent) {
//     if (arguments.length !== 2) {
//         return error.na;
//     }

//     base = utils.parseNumber(base);
//     exponent = utils.parseNumber(exponent);
//     if (utils.anyIsError(base, exponent)) {
//         return error.error;
//     }

//     return exports.POWER(base, exponent);
// };

exports.FLOOR.MATH = exports.FLOOR;

// Deprecated
exports.FLOOR.PRECISE = exports.FLOOR.MATH;


/*
exports.MINVERSE = function (matrix) {
    matrix = utils.parseMatrix(matrix);
    if (matrix instanceof Error) {
        return matrix;
    }
    return numeric.inv(matrix);
};

exports.MMULT = function (matrix1, matrix2) {
    matrix1 = utils.parseMatrix(matrix1);
    matrix2 = utils.parseMatrix(matrix2);
    if (utils.anyIsError(matrix1, matrix2)) {
        return error.value;
    }
    return numeric.dot(matrix1, matrix2);
};

exports.MDETERM = function (matrix) {
    matrix = utils.parseMatrix(matrix);
    if (matrix instanceof Error) {
        return matrix;
    }
    return numeric.det(matrix);
};
//TODO: verify
exports.ISO = {
    CEILING: exports.CEILING
};
export function MUNIT(params: string) {
    const dimension = +params;
    if (checkIsInvalid(dimension)) {
        return dimension;
    }
    return numeric.identity(dimension);
};
// TODO
exports.ROMAN = function (number) {
    number = utils.parseNumber(number);
    if (number instanceof Error) {
        return number;
    }
    // The MIT License
    // Copyright (c) 2008 Steven Levithan
    var digits = String(number).split('');
    var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var roman = '';
    var i = 3;
    while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    }
    return new Array(+digits.join('') + 1).join('M') + roman;
};




exports.SERIESSUM = function (x, n, m, coefficients) {
    x = utils.parseNumber(x);
    n = utils.parseNumber(n);
    m = utils.parseNumber(m);
    coefficients = utils.parseNumberArray(coefficients);
    if (utils.anyIsError(x, n, m, coefficients)) {
        return error.value;
    }
    var result = coefficients[0] * Math.pow(x, n);
    for (var i = 1; i < coefficients.length; i++) {
        result += coefficients[i] * Math.pow(x, n + i * m);
    }
    return result;
};

*/