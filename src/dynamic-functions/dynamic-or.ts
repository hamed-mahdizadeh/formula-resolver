import { DynamicResolver } from "../dynamic-resolver";
import { FunctionInfo } from "../function-info.model";
import { convertToboolean } from "./util";


export function  OR(this: DynamicResolver, params:FunctionInfo, extraParams?: any): string {
    for(let param of params.params) {
        let res = this.resolvePreProcessedParameter(param, extraParams);
        let condition = convertToboolean(res);
        if(condition === true){
            return 'true';
        }
    }
    return 'false';
}