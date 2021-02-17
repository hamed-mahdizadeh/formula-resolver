export function convertToboolean(conditionStr:string) {
    let condition: boolean;
    if(!isNaN(conditionStr as any)) {
        condition = +conditionStr > 0 ? true : false;
    } else {
        condition = conditionStr === 'true' ? true : false;
    }
    return condition;
}