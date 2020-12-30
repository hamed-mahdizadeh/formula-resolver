export class FunctionInfo {

    constructor(
        fn: (paramers: string, source?: any) => string,
        public functionName: string,
        public context?: any,
        public passive?: boolean,
        public source?: any
    ) {
        this.fn = () => fn
    }
    fn: () => (paramers: string, source?: any) => string;
}