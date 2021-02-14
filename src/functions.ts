import { SUM } from './functions/sum';
import { IF } from './functions/if';
import { AND } from './functions/and';
import { OR } from './functions/or';
import { POWER } from './functions/power';
import { ABS } from './functions/abs';
import { TRUNC } from './functions/trunc'
import { ROUND } from './functions/round';
import { CustomFunctionInfo } from './functions/custom-function-info.model';

export { SUM, IF, AND, OR, POWER, ABS, TRUNC, ROUND };

export type Fn = 'SUM' | 'IF' | 'AND' | 'OR' | 'POWER' | 'ABS' | 'TRUNC' | 'ROUND';

const dynamicFunctionMap = new Map<string, CustomFunctionInfo>();

export function register(info: CustomFunctionInfo) {

    dynamicFunctionMap.set(
        info.functionName,
        info
    );
}

export interface externalResolverModule {
    loadFunction: (functionName: string, parameters: string)=>string;
}

let externalResolverModule: externalResolverModule;

export function registerFunctionResolverModule(
    externulMOdule: externalResolverModule): void    {
        externalResolverModule = externulMOdule;
}


export function loadFunction(functionName: string, parameters: string) {
    if (!dynamicFunctionMap.has(functionName)) {
        if(externalResolverModule !== undefined){
            return externalResolverModule.loadFunction(functionName, parameters);
        }
        throw Error("#NAME!");
    }
    const fnInfo = dynamicFunctionMap.get(functionName);
    return fnInfo!.fn()(parameters, fnInfo!.source);
}


export function resolveFunction(fn: string, params: string) {
    switch (fn) {
        case 'SUM':
            return SUM(params);
        case 'IF':
            return IF(params);
        case 'AND':
            return AND(params);
        case 'OR':
            return OR(params);
        case 'POWER':
            return POWER(params);
        case 'ABS':
            return ABS(params);
        case 'TRUNC':
            return TRUNC(params);
        case 'ROUND':
            return ROUND(params);
        default:
            return loadFunction(fn, params);
    }
}

