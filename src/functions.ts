import { IF } from './functions/if';
import { AND } from './functions/and';
import { OR } from './functions/or';
import { CustomFunctionInfo } from './functions/custom-function-info.model';

import * as mathFn from './formula/math';
type SupportedMathFunction = keyof typeof mathFn;

const dynamicFunctionMap = new Map<string, CustomFunctionInfo>();

export function register(info: CustomFunctionInfo) {

    dynamicFunctionMap.set(
        info.functionName,
        info
    );
}

export interface externalResolverModule {
    loadFunction: (functionName: string, parameters: string) => string;
}

let externalResolverModule: externalResolverModule;

export function registerFunctionResolverModule(
    externulMOdule: externalResolverModule): void {
    externalResolverModule = externulMOdule;
}


export function loadFunction(functionName: string, parameters: string) {
    if (!dynamicFunctionMap.has(functionName)) {
        if (externalResolverModule !== undefined) {
            return externalResolverModule.loadFunction(functionName, parameters);
        }
        throw Error("#NAME!");
    }
    const fnInfo = dynamicFunctionMap.get(functionName);
    return fnInfo!.fn()(parameters, fnInfo!.source);
}

export function resolveMathFunctions(fn: string, params: string) {

}

function loadMethod<K extends keyof typeof mathFn>(fnName: K): typeof mathFn[K] {
    return mathFn[fnName];
}

function loadMethod2(fnName: SupportedMathFunction) {
    return mathFn[fnName];
}
function isMemberOfMathFn(methodName: string): methodName is keyof typeof mathFn {
    return methodName in mathFn;
}

export function resolveMathFn(methodName: string, params: string) {
    if (isMemberOfMathFn(methodName)) {
        return mathFn[methodName](params) + '';
    }
}

export function getMathFn(methodName: string) {
    if (isMemberOfMathFn(methodName)) {
        return mathFn[methodName];
    }
}

export function resolveFunction(fn: string, params: string) {
    switch (fn) {
        case 'IF':
            return IF(params);
        case 'AND':
            return AND(params);
        case 'OR':
            return OR(params);
        // case 'POWER':
        //     return POWER(params);
        // case 'ABS':
        //     return ABS(params);
        // case 'TRUNC':
        //     return TRUNC(params);
        // case 'ROUND':
        //     return ROUND(params);
        // case 'SUM':
        //     return SUM(params);
        default:
            const method = getMathFn(fn);
            if (method !== undefined) {
                return method!(params);
            } else {
                return loadFunction(fn, params);
            }
    }
}

