import { DynamicResolver } from "../dynamic-resolver";
import { FunctionInfo } from "../function-info.model";
import { convertToboolean } from "./util";


export function IF(this: DynamicResolver, params:FunctionInfo, extraParams?: any) {
    let res = this.resolvePreProcessedParameter(params.params[0], extraParams);
    let condition = convertToboolean(res);
    if(condition){
        return this.resolvePreProcessedParameter(params.params[1], extraParams);
    } 
    return this.resolvePreProcessedParameter(params.params[2], extraParams);
    
}