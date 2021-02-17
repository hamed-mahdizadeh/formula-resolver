import { DynamicResolver } from "../dynamic-resolver";
import { FunctionInfo } from "../function-info.model";
import { convertToboolean } from "./util";

export function  OR(this: DynamicResolver, params:FunctionInfo): string {
    for(let param of params.params) {
        let res = this.resolvePreProcessedParameter(param);
        let condition = convertToboolean(res);
        if(condition === false){
            return 'false';
        }
    }
    return 'true';
}