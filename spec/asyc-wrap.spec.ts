import { asyncWrap } from '../src/async-wrap';

describe('Test resolve wrapped promises outside of the core method', () => {
    it('Simple resolve sum method', (done) => {
        function sum(a: number, b: number) {
            return a + b;
        }

        let token = asyncWrap(this, sum, 10, 17);
        setTimeout(() => {
            token.resolve();
        }, 200);
        token.then(result=>{
            console.log(result);
            expect(result).toBe(27);
            done();
        });
    });
})