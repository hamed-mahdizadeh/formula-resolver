import { DynamicResolver } from "../dynamic-resolver";
import { FunctionInfo } from "../function-info.model";


function convertToboolean(params:any) {
    return true;
}

export function AND(this: DynamicResolver, params:FunctionInfo) {
    let res = this.resolvePreProcessedParameter(params.params[0]);
    let condition = convertToboolean(res);
    if(condition){
        return this.resolvePreProcessedParameter(params.params[1]);
    } 
    return this.resolvePreProcessedParameter(params.params[1]);
    
}