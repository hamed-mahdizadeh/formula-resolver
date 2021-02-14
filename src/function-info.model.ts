export class FunctionInfo {
    constructor(
        public subExpression: string[] = [],
        public fnName: string = '',
        rawParams: string[] = []
    ) {
        this.params = [];
        let param: string[] = [];
        for (let item of rawParams) {
            if (item === ',') {
                this.params.push(param);
                param = [];
                continue;
            }
            param.push(item);
        }
        if (param && param.length) {
            this.params.push(param);
        }

    }
    public params: string[][];
}