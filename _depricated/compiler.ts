import { Item } from "../src/item";

export class Compiler {
    constructor() {

    }
    private itemDevideRegex = /([\(\)])/g;


    private level1Split(expression: string): { val: string, id: number, parentId: number }[] {
        const stack = expression.split(this.itemDevideRegex).map(c => {
            let itm = {
                val: c,
                id: -1,
                parentId: -1
            }
            return itm;
        });
        return stack;
    }

    resolve(item: Item) {
        //item.base.split
    }
    tempRunner(expression: string) {
        const itemList = this.level1Split(expression);
        const result = this.convertToItemArray(itemList);
        console.log(result);
    }
    convertToItemArray(stack: { val: string, id: number, parentId: number }[]) {
        let items = new Map<number, Item>();
        let child_pntr = -1;
        for (let pntr = 0; pntr < stack.length; pntr++) {
            let item = new Item();
            let item_base = '';
            if (stack[pntr].val === ')') {
                stack[pntr].val = '{)}';
                child_pntr = pntr;
                while (stack[child_pntr].val !== '(') {
                    child_pntr--;
                }
                if (stack[child_pntr].val === '(') {
                    stack[child_pntr].val = '{(}'
                }

                items.set(item.id, item);

                for (let i = child_pntr + 1; i < pntr; i++) {
                    if (stack[i].id === -1) {
                        stack[i].id = item.id;
                        item_base += stack[i].val;
                    }
                    else if (stack[i].parentId === -1) {
                        stack[i].parentId = item.id;
                        if (!item_base.includes(`{${stack[i].id}}`)) {
                            item_base += `{${stack[i].id}}`;
                        }
                    }
                }
                item.base = item_base;
            }
        }
        items.forEach(
            itm =>
                itm.base = itm.base
                    .replace('{)}', ')')
                    .replace('{(}', '(')
        );
        return items;
    }

    convertPrintices(expression: string): string[] {
        let itemId = -1;
        let itemStack: number[] = [];
        const converted: string[] = [];
        for (let pointer = 0; pointer < expression.length; pointer++) {
            let current = expression[pointer];
            if (current === '(') {
                converted.push(`{${++itemId}}`);
                itemStack.push(itemId);
            } else if (current === ')') {
                if (!itemStack.length) throw Error('Invalid expression');
                converted.push(`{${itemStack.pop()}}`);
            }
            else {
                converted.push(current);
            }
        }
        return converted;
    }

    itemScopeRegex = /^{\d+}$/;
    operatorsRegex = /[+-*\/=]/;
    calculationRegex = /[+-*\/]/;
    splitersRegex = /[+-*\/=,]/;

    calculateValue(expression: string) {
        const items = expression.split(this.operatorsRegex);

    }

    processItem(expression: string, start: number) {
        let pointer = start;
        let result = '';
        while (expression[++pointer] !== expression[start]) {
            if (expression[pointer].match(this.itemScopeRegex)) {
                result += this.processItem(expression, pointer);
            }
            result += expression[pointer];
        }
        return this.calculateValue(result);
    }

    compile(expression: string[]): Item[] {
        for (let [val, index] of expression.entries()) {

        }
        return [];
    }

}