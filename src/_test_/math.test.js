const {add, subtract, multiply} = require('/home/ec2-user/project/src/math.js');

describe('math function', () => {
    it('addition', () => {
        expect(add(5, 3)).toBe(8);
    });

    it('subtract', () => {
        expect(subtract(5, 1)).toBe(4);
    });

    it('multiply', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});
