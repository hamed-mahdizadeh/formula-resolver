export function POWER(parameters:string) {
    const [number, power] = parameters.split(',').map(p=>{
        if(!isNaN(p as any)){
            return +p;
          }
          else throw Error("#VALUE!");
    });
    return Math.pow(number, power) + '';
}