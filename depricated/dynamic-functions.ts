// import { OR } from "./dynamic-functions/dunamic-or";
// import { AND } from "./dynamic-functions/dynamic-and";
// import { IF } from "./dynamic-functions/dynamic-if";
// import { ABS, POWER, ROUND, SUM, TRUNC } from "./functions";


// export function resolveFunction(functionGroup: Group): string {
//     const stringParams = convertParams(functionGroup);
//     switch (functionGroup.content) {
//         case 'IF':
//             return IF(functionGroup);
//         case 'AND':
//             return AND(functionGroup);
//         case 'OR':
//             return OR(functionGroup);
//         case 'POWER':
//             return POWER(stringParams);
//         case 'SUM':
//             return SUM(stringParams);
//         case 'ABS':
//             return ABS(stringParams);
//         case 'TRUNC':
//             return TRUNC(stringParams);
//         case 'ROUND':
//             return ROUND(stringParams);
//         default:
//             return '';
//         // return loadFunction(fn, params);
//     }
// }

    // function DO(params:number) {
    //     console.log(params);
    //     return params;
    // }

    // export function getFunction(fnName: string) {
    //     switch (fnName) {
    //         case 'IF':
    //             return IF;
    //         case 'AND':
    //             return AND;
    //         case 'OR':
    //             return OR;
    //         case 'POWER':
    //             return POWER;
    //         case 'SUM':
    //             return SUM;
    //         case 'ABS':
    //             return ABS;
    //         case 'TRUNC':
    //             return TRUNC;
    //         case 'ROUND':
    //             return ROUND;
    //         case 'DO':
    //             return DO;
    //         default:
    //             return '';
    //         // return loadFunction(fn, params);
    //     }
    // }