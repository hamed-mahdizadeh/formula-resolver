function _and(...parameters: boolean[]): boolean {
    return parameters.reduce((chain, current)=> chain && current);
}

export function  AND(parameters:string): string {
    const conditions = parameters.split(',').map(c=>{
        if(!isNaN(c as any)) {
            return +c > 0 ? true : false;
        } else {
            return c === 'true' ? true : false;
        }
    });
    return _and(...conditions) === true ? 'true': 'false';
}