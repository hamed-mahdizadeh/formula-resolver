export function  ABS(parameter:string): string {
    let reslut: number; 
    if(!isNaN(parameter as any)) {
        return Math.abs(+parameter) + '';
    } else if(parameter.toLowerCase() === 'true'){
       return '1';
    } else if(parameter.toLowerCase() === 'false') {
        return '0';
    }
    throw Error('#VALUE!');
}