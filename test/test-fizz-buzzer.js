const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function() {
    it('should return a remainder of zero', function() {
        const normalCases = [
            {a: 60, expected: 'fizz-buzz'},
            {a: 20, expected: 'buzz'},
            {a: 9, expected: 'fizz'}
        ];

        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected)
        });
    });

    it('should raise errors if arg is not a number', function() {
        const badInput = [
            {a: "hello", expected: 'fizz-buzz'},
            {a: "not", expected: 'buzz'},
            {a: "number", expected: 'fizz'}
        ];

        badInput.forEach(function(input){
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});
