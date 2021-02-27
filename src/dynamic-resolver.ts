import { Operator } from "./operator";
import { resolveFunction } from "./functions";
import { FunctionInfo } from "./function-info.model";
import { CustomResolver, register, resolveDynamicFunction } from "./dynamic-function";



export class DynamicResolver {

    constructor() {
        this.setOperatorPriorities();
    }

    private setOperatorPriorities() {
        this.operatorPriorities
            .set('^', 2)
            .set('*', 3)
            .set('/', 3)
            .set('+', 4)
            .set('-', 4)
            .set('=', 5)
            .set('>', 5)
            .set('<>', 5)
            .set('<', 5)
            .set('=', 5)
    }


    //private seperatorRegex = /(\(|\)|\,|[+\-*\/=]|<(?=[^=>])|(?<=[^<=])>|<>|>=|<=|[\^])/g;
    private seperatorRegex = /((?<![+\-*\/]|<>|>=|<=|[><=\(,\^])[+\-*\/]|>=|<=|<>|[<>=\^]|[\(\),])/g;
    private operatorsRegexAtomic = /^([+\-*\/=]|<>|>=|<=|>|<|[\^])$/;
    private stringVariableRegex = /".*"/g;
    private functionNameRegex = /[a-zA-Z][a-zA-Z\d]*/;
    //private operatorsRegex = /(?<!\(|\)|\,|[+\-*\/=]|<(?=[^=])|>(?=[^=])|<>|>=|<=|[\^])([+\-*\/=]|<(?=[^=>])|(?<=[^<=])>|<>|>=|<=|[\^])/g;
    private operatorsRegex = /((?<![+\-*\/\^]|<>|>=|<=|[><=])[+\-*\/\^]|>=|<=|<>|[<>=])/g;
    private fnPlaceHolder = /{{\d+}}/;
    private fnKey = /(?<={{)\d+(?=}})/;
    private operatorPriorities: Map<string, number> = new Map();


    public fnMap: Map<number, FunctionInfo> = new Map();

    private convertResult(res: any): string {
        if (typeof res === 'string') {
            return res;
        }
        if (typeof res === 'number') {
            return res + '';
        }
        if (typeof res === 'boolean') {
            return String(res);
        }
        return '';
    }

    private setFunctionResult(
        params: string,
        expression: string[],
        fnPointer: number,
        pointer: number): number {
        let result = '';
        let start = fnPointer;
        if (!this.functionNameRegex.test(expression[fnPointer])) {
            result = params;
            start++;
        } else {
            result = this.convertResult(this.resolveFunction(expression[fnPointer], params));
        }
        let removeLength = pointer - start + 1;
        expression.splice(start, removeLength, result).length;
        return pointer - start - 1;
    }

    resolveFunction(fn: string, params: string) {
        return resolveFunction(fn, params);
    }

    private normalizeOperand(operand: string) {
        if (this.stringVariableRegex.test(operand)) {
            return operand.toLowerCase();
        } else if (!isNaN(operand as any)) {
            return +operand;
        } else return operand.toLowerCase();

    }


    private doSingleOperation(
        operant1: string,
        operand2: string,
        operator: Operator) {

        switch (operator) {
            case '+':
                return +operant1 + +operand2;
            case '-':
                return +operant1 - +operand2;
            case '*':
                return +operant1 * +operand2;
            case '/':
                return +operant1 / +operand2;
            case '^':
                return Math.pow(+operant1, +operand2);
            case '=':
                return operant1.toLowerCase() === operand2.toLowerCase();
            case '<>':
                return operant1.toLowerCase() !== operand2.toLowerCase();
            case '<':
                return this.normalizeOperand(operant1) < this.normalizeOperand(operand2);
            case '>':
                return this.normalizeOperand(operant1) > this.normalizeOperand(operand2);
            case '>=':
                return this.normalizeOperand(operant1) >= this.normalizeOperand(operand2);
            case '<=':
                this.normalizeOperand(operant1) <= this.normalizeOperand(operand2);

        }
    }

    private getOperands(
        operator: { operator: string, index: number },
        itemList: string[]) {
        let operand1 = '';
        let operand2 = '';
        let operand1Index = operator.index;
        if (operator.index === 0) {
            if (operator.operator === '-' || operator.operator === '+') {
                operand1 = '0';
                operand1Index = -1;
            } else {
                throw Error('#INVALID!');
            }
        }
        else {
            while (operand1 === '' && operand1Index > 0) {
                operand1Index--;
                if (itemList[operand1Index] !== '') {
                    operand1 = itemList[operand1Index];
                }
            }
        }
        let operand2Index = operator.index;
        while (operand2 === '' && operand2Index < itemList.length) {
            operand2Index++;
            if (itemList[operand2Index] !== '') {
                operand2 = itemList[operand2Index];
            }
        }
        return {
            operand1,
            operand1Index,
            operand2,
            operand2Index
        };
    }

    private fillOperandsCells(
        operand1Index: number,
        operand2Index: number,
        itemList: string[]) {
        itemList.fill('', operand1Index > 0 ? operand1Index : 0, operand2Index + 1);
    }

    private calculate(itemList: string[]) {
        const operators: { operator: string, index: number }[] = []
        itemList.forEach((v, i) => {
            if (this.operatorsRegexAtomic.test(v)) {
                operators.push({ operator: v, index: i });
            }
        });
        operators.sort((a, b) => {
            let aWeight = ((1 / this.operatorPriorities.get(a.operator)!) + (1 / (10 + a.index)));
            let bWeight = ((1 / this.operatorPriorities.get(b.operator)!) + (1 / (10 + b.index)));
            return bWeight - aWeight;
        });
        operators.forEach((v, i) => {
            const operands = this.getOperands(v, itemList);
            let res = this.doSingleOperation(
                operands.operand1,
                operands.operand2,
                v.operator as any) + '';
            this.fillOperandsCells(
                operands.operand1Index,
                operands.operand2Index,
                itemList);
            itemList[v.index] = res;
        });
        let result = itemList.filter(c => c + ''.trim() !== '').join('');
        return result;
    }

    resolvePreProcessedItem(fn: FunctionInfo, extraParams?: any): string {
        if (fn.fnName !== '') {
            return resolveDynamicFunction(this, fn, extraParams);
        }
        if (fn.params.length !== 1) {
            throw Error('Invalid Format! ' + fn.params.join(','));
        }
        return this.calculate(fn.params[0]);
    }

    resolveItemAsFn(item: string, extraParams?: any) {
        if (this.fnPlaceHolder.test(item)) {
            const fn = this.fnMap.get(+(this.fnKey.exec(item)![0]))!;
            return this.resolvePreProcessedItem(fn, extraParams);
        }
        return item;
    }

    resolvePreProcessedParameter(paramItem: string[], extraParams?: any) {
        let preProcessedparamItem = paramItem.map(item => this.resolveItemAsFn(item, extraParams));
        return this.calculate(preProcessedparamItem);
    }

    resolve(expression: string, extraParams?: any): { result: string } {
        const expressionParts = expression.trim().replace(/^=/gm, '')
            .split(this.seperatorRegex)
            .map(i => i.trim())
            .filter(i => i !== '');
        const stack: number[] = [];
        const index: number[][] = [];
        let methodCount = 0;
        for (let i = 0; i < expressionParts.length; i++) {
            if (expressionParts[i] === '(') {
                stack.push(i);
            } else if (expressionParts[i] === ')') {
                index.push([stack.pop()!, i]);
            }
        }
        index.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
        for (let i = 0; i < index.length; i++) {
            let begin = index[i][0];
            if (begin > 0) {
                const params = expressionParts.slice(index[i][0] + 1, index[i][1]).filter(c => c !== '');
                let fnName = '';
                if (this.functionNameRegex.test(expressionParts[begin - 1])) {
                    fnName = expressionParts[begin - 1];
                }
                const subExpression = expressionParts.slice(index[i][0], index[i][1] + 1).filter(c => c !== '');
                this.fnMap.set(methodCount, new FunctionInfo(subExpression, fnName, params));
                index[i][0] = begin - 1;
            }
            expressionParts.fill('', index[i][0], index[i][1] + 1);
            expressionParts[index[i][0]] = `{{${methodCount++}}}`;

        }
        let processedExpressionParts = expressionParts.filter(c => c !== '');
        for (let i = 0; i < processedExpressionParts.length; i++) {
            let item = processedExpressionParts[i];
            if (this.fnPlaceHolder.test(item)) {
                const fn = this.fnMap.get(+(this.fnKey.exec(item)![0]))!;
                processedExpressionParts[i] = this.resolvePreProcessedItem(fn, extraParams);
            }
        }
        let result = '';
        processedExpressionParts = processedExpressionParts.filter(c => c !== undefined && c !== null && c !== '');
        if (processedExpressionParts.length > 0) {
            result = this.calculate(processedExpressionParts);
        }
        return { result };
    }

    register(customResolver: CustomResolver) {
        return register(customResolver);
    }
}