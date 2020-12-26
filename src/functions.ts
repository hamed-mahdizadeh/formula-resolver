import { SUM } from './functions/sum';
import { IF } from './functions/if';
import { AND } from './functions/and';
import { OR } from './functions/or';
import { POWER } from './functions/power';
import { ABS } from './functions/abs';
import { TRUNC } from './functions/trunc'
import { ROUND } from './functions/round';

export { SUM, IF, AND, OR, POWER, ABS };

export type Fn = 'SUM' | 'IF' | 'AND' | 'OR' | 'POWER' | 'ABS' | 'TRUNC' | 'ROUND';

export function resolveFunction(fn: Fn, params: string) {
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
            throw Error('#NAME?');
    }
}

