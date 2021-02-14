import { CustomResolver } from "../src/dynamic-function";
import { DynamicResolver } from "../src/dynamic-resolver";
import { FunctionInfo } from "../src/function-info.model";


describe('Calculate Excel-Like Filled Formula', () => {
    let resolver: DynamicResolver;
    class TestResolver implements CustomResolver {
 
        DO = function(this: DynamicResolver, param: string[][]) {
            let strParam = this.resolvePreProcessedParameter(param[0]);
            console.log('Method DO Called With Param ' + strParam);
            return strParam + '';
        }
        resolveFunction(functionContext: DynamicResolver, fn: FunctionInfo) {
            switch (fn.fnName) {
                case 'DO':
                    return this.DO.bind(functionContext)(fn.params);
                default:
                    return '';
            }
        }

    }
    beforeEach(() => {
        resolver = new DynamicResolver();
    });


    it('Expression IF(true=true,DO(1),DO(2)) Should call DO method only one time with parameter [["1"]] In DynamicResolver.resolve', () => {
        let testResolver = new TestResolver();
        spyOn(testResolver, 'DO').and.returnValue('-1');
        const expression = 'IF(true=true,DO(1),DO(2))';
        
        resolver.register(testResolver);
        resolver.resolve(expression);
        expect(testResolver.DO).toHaveBeenCalledOnceWith([['1']]);
    });

    it('Expression IF(true=true,DO(1),DO(2)) Should have Result 1 DynamicResolver.resolve', () => {
        const expression = 'IF(true=true,DO(1),DO(2))';
        
        resolver.register(new TestResolver());
        expect(resolver.resolve(expression).result).toBe('1');
    });

    it('Expression 50 + IF(true=true,ABS(-1000000),ABS(1000/0)) Should have Result 1000050 DynamicResolver.resolve', () => {
        const expression = '50 + IF(true=true,ABS(-1000000),ABS(1000/0))';
        
        expect(resolver.resolve(expression).result).toBe('1000050');
    });
    
    
});