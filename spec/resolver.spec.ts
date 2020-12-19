import { Resolver } from "../src/resolver";


describe('Calculate Excel-Like Filled Formula', () => {
    it('Should Calculate Result OF "IF(true=true,SUM(10,20,5),1000/0)" Witch Is "35"', () => {
        const expression = 'IF(true=true,SUM(10,20,5),1000/0)';
        const resolver = new Resolver();

        expect(resolver.resolve(expression)).toBe('35');
    });
    it('Should Calculate Result OF 10+200 Whitch is 210', () => {
        const expression = '10+200';
        const resolver = new Resolver();

        expect(resolver.resolve(expression)).toBe('210');
    });
    it('Should Calculate Result OF 10*SUM(2,3)+5 Whitch is 55', () => {
        const expression = '10*SUM(2,3)+5';
        const resolver = new Resolver();

        expect(resolver.resolve(expression)).toBe('55');
    });
    it('Should Calculate Result OF 10+2*5^3/4 Whitch is 72.5', () => {
        const expression = '10+2*5^3/4';
        const resolver = new Resolver();

        expect(resolver.resolve(expression)).toBe('72.5');
    });
    it('Should Calculate Result OF 2*SUM(-100,20,10)-10 which is -150', () => {
        const expression = '2*SUM(-100,20,10)-10';
        const resolver = new Resolver();

        expect(resolver.resolve(expression)).toBe('-150');
    });
});