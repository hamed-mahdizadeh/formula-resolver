// import { Operator } from "./operator";
// import { resolveFunction, register  } from "./functions";
// import { FunctionInfo } from "./functions/function-info.model";

// export class Group {
//     constructor(public content: string){
//     }
//     members: Group[] = [];
// } 

// export class DynamicResolver {

//     constructor() {
//         this.setOperatorPriorities();
//     }

//     private setOperatorPriorities() {
//         this.operatorPriorities
//             .set('=', 1)
//             .set('>', 1)
//             .set('<>', 1)
//             .set('<', 1)
//             .set('=', 1)
//             .set('^', 2)
//             .set('*', 3)
//             .set('/', 3)
//             .set('+', 4)
//             .set('-', 4);
//     }

   
//     private seperatorRegex = /(\(|\)|\,|[+\-*\/=]|<(?=[^=>])|(?<=[^<=])>|<>|>=|<=|[\^])/g;
//     private operatorsRegexAtomic = /^([+\-*\/=]|<>|>=|<=|>|<|[\^])$/;
//     private stringVariableRegex = /".*"/g;
//     private functionNameRegex = /[a-zA-Z][a-zA-Z\d]*/;
//     private operatorsRegex = /(?<!\(|\)|\,|[+\-*\/=]|<(?=[^=])|>(?=[^=])|<>|>=|<=|[\^])([+\-*\/=]|<(?=[^=>])|(?<=[^<=])>|<>|>=|<=|[\^])/g;
//     private operatorPriorities: Map<string, number> = new Map();

//     // private setFunctionResult(
//     //     params: string,
//     //     expression: string[],
//     //     fnPointer: number,
//     //     pointer: number): number {
//     //     let result = '';
//     //     let start = fnPointer;
//     //     if (!this.functionNameRegex.test(expression[fnPointer])) {
//     //         result = params;
//     //     } else {
//     //         result = this.resolveFunction(expression[fnPointer], params);
//     //     }
//     //     let removeLength = pointer - start + 1;
//     //     expression.splice(start, removeLength, result).length;
//     //     return pointer - start - 1;
//     // }

//     resolveFunction(fn: string, params: string){
//         return resolveFunction(fn, params);
//     }

//     private normalizeOperand(operand: string) {
//         if (this.stringVariableRegex.test(operand)) {
//             return operand.toLowerCase();
//         } else if (!isNaN(operand as any)) {
//             return +operand;
//         } else return operand.toLowerCase();

//     }


//     private doSingleOperation(
//         operant1: string,
//         operand2: string,
//         operator: Operator) {

//         switch (operator) {
//             case '+':
//                 return +operant1 + +operand2;
//             case '-':
//                 return +operant1 - +operand2;
//             case '*':
//                 return +operant1 * +operand2;
//             case '/':
//                 return +operant1 / +operand2;
//             case '^':
//                 return Math.pow(+operant1, +operand2);
//             case '=':
//                 return operant1.toLowerCase() === operand2.toLowerCase();
//             case '<>':
//                 return operant1.toLowerCase() !== operand2.toLowerCase();
//             case '<':
//                 return this.normalizeOperand(operant1) < this.normalizeOperand(operand2);
//             case '>':
//                 return this.normalizeOperand(operant1) > this.normalizeOperand(operand2);
//             case '>=':
//                 return this.normalizeOperand(operant1) >= this.normalizeOperand(operand2);
//             case '<=':
//                 this.normalizeOperand(operant1) <= this.normalizeOperand(operand2);

//         }
//     }

//     private getOperands(
//         operator: { operator: string, index: number },
//         itemList: Group[]) {
//         let operand1 = '';
//         let operand2 = '';
//         let operand1Index = operator.index;
//         if (operator.index === 0) {
//             if (operator.operator === '-' || operator.operator === '+') {
//                 operand1 = '0';
//                 operand1Index = -1;
//             } else {
//                 throw Error('#INVALID!');
//             }
//         }
//         else {
//             while (operand1 === '' && operand1Index > 0) {
//                 operand1Index--;
//                 if (itemList[operand1Index].content !== '') {
//                     operand1 = itemList[operand1Index].content;
//                 }
//             }
//         }
//         let operand2Index = operator.index;
//         while (operand2 === '' && operand2Index < itemList.length) {
//             operand2Index++;
//             if (itemList[operand2Index].content !== '') {
//                 operand2 = itemList[operand2Index].content;
//             }
//         }
//         return {
//             operand1,
//             operand1Index,
//             operand2,
//             operand2Index
//         };
//     }

//     private fillOperandsCells(
//         operand1Index: number,
//         operand2Index: number,
//         itemList: Group[]) {
//         itemList.fill(new Group(''), operand1Index > 0 ? operand1Index : 0, operand2Index + 1);
//     }

//     private calculate(expression: Group) {
//         const operators: { operator: string, index: number }[] = [];
//         expression.members.forEach((v, i) => {
//             if (this.operatorsRegexAtomic.test(v.content)) {
//                 operators.push({ operator: v.content, index: i });
//             }
//         });
//         operators.sort((a, b) => {
//             let aWeight = ((1 / this.operatorPriorities.get(a.operator)!) + (1 / (10 + a.index)));
//             let bWeight = ((1 / this.operatorPriorities.get(b.operator)!) + (1 / (10 + b.index)));
//             return bWeight - aWeight;
//         });
//         operators.forEach((v, i) => {
//             const operands = this.getOperands(v, expression.members);
//             let res = this.doSingleOperation(
//                 operands.operand1,
//                 operands.operand2,
//                 v.operator as any) + '';
//             this.fillOperandsCells(
//                 operands.operand1Index,
//                 operands.operand2Index,
//                 expression.members);
//             expression.members[v.index].content = res;
//         });
//         // let result = itemList.filter(c=> c.trim() !== '').join('');
//         // return result;
//         return '';
//     }

//     private calculateParams(expressionParts: Group[]): string {
//         const result = expressionParts.map(p => this.calculate(p)).join(',');
//         return result;
//     }

//     groupItems(expression: Group[], start: number, end: number) {
//         const group = new Group('');
//         const members = expression.slice(start,end + 1);
//         group.members = JSON.parse(JSON.stringify(members));
//         return group;
//     }

//     private setFunctionResult(
//         params: Group,
//         expression: Group[],
//         fnPointer: number,
//         pointer: number): number {
//         let result: Group;
//         let start = fnPointer;
//         if (!this.functionNameRegex.test(expression[fnPointer].content)) {
//             result = params;
//             start++;
//         } else {
//             params.content = expression[fnPointer].content;
//             result = params;
//         }
//         let removeLength = pointer - start + 1;
//         expression.splice(start, removeLength, result).length;
//         return pointer - start - 1;
//     }

//     resolve(expression: string, start: number = -1): string {
//         const expressionParts = expression
//             .split(this.seperatorRegex)
//             .map(i => i.trim())
//             .filter(i => i !== '')
//             .map(c=> new Group(c));
//         let pointer = start;
//         const resolve = (start: number) => {
//             while (pointer < expressionParts.length) {
//                 pointer++;
//                 if (expressionParts[pointer].content === '(') {
//                     resolve(pointer);
//                 } else if (expressionParts[pointer].content === ')') {
//                     let params = this.groupItems(expressionParts, start, pointer);
//                     pointer = this.setFunctionResult(params, expressionParts, start - 1, pointer);
//                     return '';
//                 }
//             }
//             return this.calculateParams(expressionParts);
//         }
//         return resolve(start);
//     }


//     /**
//      * Params resolver
//      * @param functionInfo  
//      * object includes: 
//      * fn: custom function
//      * functionName: name of the function
//      * context: optional context (thisArg) which will be bound to custom function
//      * passive: If set to true function only would resolved if parent methods already had bean resolved
//      * This function prevents internal functions of methods like IF from being executed before the condition is applied.
//      * Passive functions could not set nested inside of each others.
//      * source: data or any object which you want have access to it in your custom function   
//      * @returns  
//      */
//     register(functionInfo: FunctionInfo){
//         return register(functionInfo);
//     }
// }