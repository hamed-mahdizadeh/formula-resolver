async function calculate (param: any, type: 'boolean' | 'number' | 'string' | 'any') {
    param.resolve();
    let result = await param;
    if(type === 'boolean') {
        if(result === 'true'){
            return true;
        } else if(result === 'false'){
            return false;
        } else if (!isNaN(param)){
            return +param > 0 ? true : false;
        } else if(param || ''){
            return true;
        } 
        return false; 
    } else if(type === 'number'){
        if(!isNaN(result)){
            return +result;
        } else {
            return result;
        }
    }  
}

export async function IF() {
    const conditionResult = await calculate(arguments[0], 'boolean');
    if (conditionResult) {
        return await calculate(arguments[1], 'any');
    }
    else {
        return await calculate(arguments[2], 'any');
    }
}