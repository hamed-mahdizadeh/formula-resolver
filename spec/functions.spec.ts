import { ABS, AND, IF, POWER, SUM } from '../src/functions';

describe('Calculation of different functions with comma seperated string parameter', () => {
    it('SUM(100,200,1000,5) Should be "1305"', () => {
        const expression = '100,200,1000,5';
        
        expect(SUM(expression)).toBe('1305');
    });

    it('IF(true,1000,0) Should be "1000"', () => {
        const expression = 'true,1000,0';
        
        expect(IF(expression)).toBe('1000');
    });

    it('AND(-100,10,true) Should be "false"', () => {
        const expression = '-100,10,true';
        
        expect(AND(expression)).toBe('false');
    });

    it('OR(-100,10,true) Should be "false"', () => {
        const expression = '-100,10,true';
        
        expect(AND(expression)).toBe('false');
    });

    it('ABS(-9) Should be "9"', () => {
        const expression = '-9';
        
        expect(ABS(expression)).toBe('9');
    });

    it('POWER(2,3) Should be "8"', () => {
        const expression = '2,3';
        
        expect(POWER(expression)).toBe('8');
    });
});