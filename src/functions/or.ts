function _or(...parameters: boolean[]): boolean {
    return parameters.reduce((chain, current)=> chain || current);
}

export function  OR(parameters:string): string {
    const conditions = parameters.split(',').map(c=>{
        if(!isNaN(c as any)) {
            return +c > 0 ? true : false;
        } else {
            return c === 'true' ? true : false;
        }
    });
    return _or(...conditions) === true ? 'true': 'false';
}