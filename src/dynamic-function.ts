import { IF } from "./dynamic-functions/dynamic-if";
import { DynamicResolver } from "./dynamic-resolver";
import { FunctionInfo } from "./function-info.model";
import { getMathFn } from "./functions";

export interface CustomResolver {
    resolveFunction(functionContext: DynamicResolver,fn: FunctionInfo, extraParams?: any): any;
}

let customResolver: CustomResolver;

export function register(resolver: CustomResolver) {
    customResolver = resolver;
}

function toSimpleParam(this: DynamicResolver, params:string[][], extraParams?:any) {
    return params.map(p=>this.resolvePreProcessedParameter(p, extraParams)).join(',');
}

export function resolveDynamicFunction(functionContext: DynamicResolver,fn: FunctionInfo, extraParams?: any) {
    switch (fn.fnName) {
        case 'IF':
            return IF.bind(functionContext)(fn, extraParams);
        default:
            const method = getMathFn(fn.fnName);
            if(method !== undefined) {
                return method(toSimpleParam.bind(functionContext)(fn.params, extraParams));
            } else {
                return customResolver.resolveFunction(functionContext,fn, extraParams);
            } 
    }
}