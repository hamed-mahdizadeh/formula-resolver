function _round(number:number, number_digits: number) {
    return number.toFixed(number_digits);
}
export function ROUND(params:string) {
    const [num, dig] = params.split(',').map(c=>+c);
    return _round(num, dig) + '';
}