import { ABS, AND, IF, POWER, SUM } from '../src/functions';
import { ROUND } from '../src/functions/round';
import { TRUNC } from '../src/functions/trunc';

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
    it('TRUNC(5.68) Should be "5"', () => {
        const expression = '5.68';
        
        expect(TRUNC(expression)).toBe('5');
    });
    it('ROUND(128.6985,2) Should be "128.70"', () => {
        const expression = '128.6985,2';
        
        expect(ROUND(expression)).toBe('128.70');
    });
    it('ROUND(128,2) Should be "128"', () => {
        const expression = '128,2';
        
        expect(ROUND(expression)).toBe('128.00');
    });
});