import { DynamicResolver } from "../dynamic-resolver";
import { FunctionInfo } from "../function-info.model";
import { convertToboolean } from "./util";


export function IF(this: DynamicResolver, params:FunctionInfo) {
    let res = this.resolvePreProcessedParameter(params.params[0]);
    let condition = convertToboolean(res);
    if(condition){
        return this.resolvePreProcessedParameter(params.params[1]);
    } 
    return this.resolvePreProcessedParameter(params.params[1]);
    
}