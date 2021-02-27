import { CustomFunctionInfo  } from "../src/functions/custom-function-info.model";
import { Resolver } from "../src/resolver";


describe('Calculate Excel-Like Filled Formula', () => {
    let resolver: Resolver;
    beforeEach(() => {
        resolver = new Resolver();
    });

    it('Should Calculate Result OF "IF(true=true,SUM(10,20,5),1000/0)" Witch Is "35"', () => {
        const expression = 'IF(true=true,SUM(10,20,5),1000/0)';
        expect(resolver.resolve(expression).result).toBe('35');
    });
    
    it('Should Calculate Result OF 10+200 Whitch is 210', () => {
        const expression = '10+200';
        expect(resolver.resolve(expression).result).toBe('210');
    });

    it('Should Calculate Result OF 10*SUM(2,3)+5 Whitch is 55', () => {
        const expression = '10*SUM(2,3)+5';
        expect(resolver.resolve(expression).result).toBe('55');
    });

    it('Should Calculate Result OF 10+2*5^3/4 Whitch is 72.5', () => {
        const expression = '10+2*5^3/4';
        expect(resolver.resolve(expression).result).toBe('72.5');
    });

    it('Should Calculate Result OF 2*SUM(-100,20,10)-10 which is -150', () => {
        const expression = '2*SUM(-100,20,10)-10';
        expect(resolver.resolve(expression).result).toBe('-150');
    });

    it('Should Calculate Result OF 2+(-100+50*10)-10 which is -498', () => {
        const expression = '2+(-100+50*10)-10';
        expect(resolver.resolve(expression).result).toBe('392');
    });

    it('Should Calculate Result OF -80<0 which is true', () => {
        const expression = '-80<0';
        expect(resolver.resolve(expression).result).toBe('true');
    });
    it('Should Calculate Result OF -124+123+3-4>0 which is false', () => {
        const expression = '-124+123+3-4>0';
        expect(resolver.resolve(expression).result).toBe('false');
    });
    it('Should Calculate Result OF SUM(-10,9)+3-1<0 which is false', () => {
        const expression = 'SUM(-10,9)+3-1<0';
        expect(resolver.resolve(expression).result).toBe('false');
    });
    it('Should Calculate Result OF SUM(-10,9)+3-4<0 which is true', () => {
        const expression = 'SUM(-10,9)+3-4<0';
        expect(resolver.resolve(expression).result).toBe('true');
    });
    it('Should Calculate Result OF SUM(-10,9)+3-4>0 which is false', () => {
        const expression = 'SUM(-10,9)+3-4>0';
        expect(resolver.resolve(expression).result).toBe('false');
    });
    it('Should Calculate Result OF SUM(-10,9)+3-2>=0 which is true', () => {
        const expression = 'SUM(-10,9)+3-2>=0';
        expect(resolver.resolve(expression).result).toBe('true');
    });


    const registerPrintFunction = () => {
        const functionInfo = new CustomFunctionInfo(
            (params: string, source: any) => {
                console.log(params);
                return params;
            },
            'PRINT'

        )
        resolver.register(functionInfo);
    }
    const registerSourceModifyFunction = () => {
        const functionInfo = new CustomFunctionInfo(
            (params: string, source: { callCounter: number }) => {
                return params;
            },
            'SOURCEMODIFY'
        )
        resolver.register(functionInfo);
    }
    it('Should print the text in console and returned it by the custom method.', () => {
        registerPrintFunction();
        const expression = 'PRINT("Test Text!")';
        expect(resolver.resolve(expression).result).toBe('"Test Text!"');
    });
    it('Should print and return "Passed!"', () => {
        registerPrintFunction();
        const expression = 'IF(10>0,PRINT("Passed!"),PRINT("Rejected!"))';
        expect(resolver.resolve(expression).result).toBe('"Passed!"');
    });
    it('Should print and return "Rejected!"', () => {
        registerPrintFunction();
        const expression = 'IF(10<0,PRINT("Passed!"),PRINT("Rejected!"))';
        expect(resolver.resolve(expression).result).toBe('"Rejected!"');
    });
});