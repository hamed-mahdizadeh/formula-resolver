
function _if(condition: boolean, passed: any, rejected: any): string {
    if(condition === true) {
        return passed + '';
    } else {
        return rejected + '';
    }
}

export function IF(params:string) {
    const [conditionStr, past, reject] = params.split(',');
    let condition: boolean;
    if(!isNaN(conditionStr as any)) {
        condition = +conditionStr > 0 ? true : false;
    } else {
        condition = conditionStr === 'true' ? true : false;
    }
    if(condition){
        return past;
    }
    return reject;
}