import { IF } from "./dynamic-functions/dynamic-if";
import { DynamicResolver } from "./dynamic-resolver";
import { FunctionInfo } from "./function-info.model";
import { getMathFn } from "./functions";
import * as mathFn from './formula/math';
type SupportedMathFunction = keyof typeof mathFn;

export interface CustomResolver {
    resolveFunction(functionContext: DynamicResolver,fn: FunctionInfo): any;
}

let customResolver: CustomResolver;

export function register(resolver: CustomResolver) {
    customResolver = resolver;
}

function toSimpleParam(this: DynamicResolver, params:string[][]) {
    return params.map(p=>this.resolvePreProcessedParameter(p)).join(',');
}

export function resolveDynamicFunction(functionContext: DynamicResolver,fn: FunctionInfo) {
    switch (fn.fnName) {
        // case 'SUM':
        //     return SUM(fn);
        case 'IF':
            return IF.bind(functionContext)(fn);
        // case 'AND':
        //     return AND(fn);
        // case 'OR':
        //     return OR(fn);
        // case 'POWER':
        //      return POWER(toSimpleParam.bind(functionContext)(fn.params));
        // case 'ABS':
        //      return ABS(toSimpleParam.bind(functionContext)(fn.params));
        // case 'TRUNC':
        //     return TRUNC(toSimpleParam.bind(functionContext)(fn.params));
        // case 'ROUND':
        //      return ROUND(toSimpleParam.bind(functionContext)(fn.params));
        default:
            const method = getMathFn(fn.fnName);
            if(method !== undefined) {
                return method(toSimpleParam.bind(functionContext)(fn.params));
            } else {
                return customResolver.resolveFunction(functionContext,fn);
            } 
    }
}