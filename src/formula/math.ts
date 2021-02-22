
import * as errors from '../errors';

function checkIsInvalid(...params: any[]) {
    return params.some(p=> p === undefined || isNaN(p));
}

export function ABS(param: string) {
    let numberParam = +param;
    if (isNaN(numberParam)) {
        return param;
    }
    return Math.abs(numberParam);
}

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
}

export function ACOT (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.atan(1 / numberParam);
}

export function ACOTH (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return 0.5 * Math.log((numberParam + 1) / (numberParam - 1));
}

export function ASIN (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.asin(numberParam);
}

export function ASINH (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log(numberParam + Math.sqrt(numberParam * numberParam + 1));
}

export function ATAN (params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.atan(numberParam);
}

export function COS(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.cos(numberParam);
}

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
        throw Error(errors.VALUE);
    }
    let [number, radix] = params.split(',').map(c=> c.trim());
    if (number === undefined || radix === undefined) {
        throw Error(errors.VALUE);
    }
    return parseInt(number, +radix);
}

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
    return _CEILING(numberParam, -2, -1);
}

export function ATANH(params: string) {
    let numberParam = +params;
    if (isNaN(numberParam)) {
        return params;
    }
    return Math.log((1 + numberParam) / (1 - numberParam)) / 2;
}

function _FACTDOUBLE(numberParam: number): number {
    var n = Math.floor(numberParam);
    if (n <= 0) {
        return 1;
    } else {
        return n * _FACTDOUBLE(n - 2);
    }
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
        return n * _FACTDOUBLE(n - 2);
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
    let logBase;
    if(!isNaN(+strBase)){
        logBase = +strBase;
    } else {
        logBase = 10;
    }

    if (!num || !logBase || isNaN(logBase) || isNaN(num)) {
        throw Error(errors.NUM);
    }

    if(Math.log(logBase) === 0){
        throw Error(errors.DIVBY0);
    } 

    return Math.log(num) / Math.log(logBase);
}

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
}

export function TRUNC(params:string) {
    const [strNumber, strDigits] = params.split(',').map(c=>c.trim());
    const digits = (strDigits === undefined) ? 0 : +strDigits;
    const number = +strNumber;
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
}

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

function  _CEILING(number: number, significance: number, mode: number) {
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

export function CEILING(params:string) {
    let [number, significance, mode] = params.split(',').map(c=> +c.trim());
    return _CEILING(number, significance, mode);
}

const _FACT = (function () {
    const MEMOIZED_FACT: number[] = [];
    return (num:number)=>{
        var n = Math.floor(num);
        if (n === 0 || n === 1) {
            return 1;
         } else if (MEMOIZED_FACT[n] > 0) {
            return MEMOIZED_FACT[n];
        } else {
            MEMOIZED_FACT[n] = _FACT(n - 1) * n;
            return MEMOIZED_FACT[n];
        }
    };
})();


export function FACT(params:string) {
    let number = +params;
    if(checkIsInvalid(number)){
        throw Error(errors.VALUE);
    }
    return _FACT(number);
}

function _COMBIN(number: number, number_chosen: number){
    if(checkIsInvalid(number, number_chosen)) {
        throw Error(errors.VALUE);
    }
    return _FACT(number) / (_FACT(number_chosen) * _FACT(number - number_chosen));
}

export function COMBIN(params:string) {
    const [number, number_chosen] = params.split(',').map(c=> +c.trim());
    return _COMBIN(number, number_chosen);
}

export function COMBINA (params: string) {
    const [number, number_chosen] = params.split(',').map(c=> +c.trim());
    if (checkIsInvalid(number, number_chosen)) {
        throw Error(errors.VALUE);
    }
    return (number === 0 && number_chosen === 0) ? 1 : _COMBIN(number + number_chosen - 1, number - 1);
}

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
}

export function EQ (params: string) {
    let paramsArray = params.split(',').map(c=>c.trim());
    let [value1, value2] = paramsArray;
    if (paramsArray.length !== 2) {
        throw Error(errors.NA);

    }
    return value1 === value2;
}

export function NE (params: string) {
    let paramsArray = params.split(',').map(c=>c.trim());
    let [value1, value2] = paramsArray;
    if (paramsArray.length !== 2) {
        throw Error(errors.NA);
    }
    return value1 !== value2;
}

export function MOD (params: string) {
    let [dividend, divisor] = params.split(',').map(c=>+c.trim());
    if(checkIsInvalid(dividend, divisor)){
        throw Error(errors.VALUE);
    }
    if (divisor === 0) {
        throw Error(errors.DIVBY0);
    }
    var modulus = Math.abs(dividend % divisor);
    return (divisor > 0) ? modulus : -modulus;
}

export function MROUND (params: string) {
    let [number, multiple] = params.split(',').map(c=>+c.trim());

    if (checkIsInvalid(number, multiple)) {
        throw Error(errors.VALUE);
    }
    if (number * multiple < 0) {
        throw Error(errors.NUM);
    }

    return Math.round(number / multiple) * multiple;
}

export function RADIANS (params: string) {
    let number = +params;
    if (checkIsInvalid(number)) {
        throw Error(errors.VALUE);
    }
    return number * Math.PI / 180;
}

export function RAND() {
    return Math.random();
}

export function PI () {
    return Math.PI;
}

export function MULTINOMIAL(params: string) {
    var args = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(...args)) {
        throw Error(errors.VALUE);
    }
    var sum = 0;
    var divisor = 1;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
        divisor *= _FACT(args[i]);
    }
    return _FACT(sum) / divisor;
}

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
}

export function QUOTIENT  (params: string) {
    let [numerator, denominator] = params.split(',').map(c=>+c.trim());
    
    if (checkIsInvalid(numerator, denominator)) {
        throw Error(errors.VALUE);
    }
    return parseInt((numerator / denominator) + '', 10);
}

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
}



export function RANDBETWEEN (params: string) {
    let [bottom, top] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(bottom, top)) {
        throw Error(errors.VALUE);
    }
    // Creative Commons Attribution 3.0 License
    // Copyright (c) 2012 eqcode
    return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
}

export function ROUND (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}

export function ROUNDDOWN (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
}

export function ROUNDUP (params: string) {
    const [number, digits] = params.split(',').map(c=>+c.trim());
    if (checkIsInvalid(number, digits)) {
        throw Error(errors.VALUE);
    }
    var sign = (number > 0) ? 1 : -1;
    return sign * (Math.ceil(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
}

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
}

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
}

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
}

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
}

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
}

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
}