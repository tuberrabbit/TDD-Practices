var expect = require('chai').expect;
var fizzBuzzWhizz = require('../src/fizzBuzzWhizz');

describe('fizz buzz whizz test suite', function () {

    it('should return 1 when apply 1', function () {
        expect(fizzBuzzWhizz.apply(1)).to.equal(1);
    });

    it('should return 2 when apply 2', function () {
        expect(fizzBuzzWhizz.apply(2)).to.equal(2);
    });

    it('should return fizz when apply number divisible 3', function () {
        expect(fizzBuzzWhizz.apply(3)).to.equal('fizz');
        expect(fizzBuzzWhizz.apply(6)).to.equal('fizz');
    });

    it('should return buzz when apply number divisible 5', function () {
        expect(fizzBuzzWhizz.apply(5)).to.equal('buzz');
        expect(fizzBuzzWhizz.apply(10)).to.equal('buzz');
    });

    it('should return whizz when apply number divisible 7', function () {
        expect(fizzBuzzWhizz.apply(7)).to.equal('whizz');
        expect(fizzBuzzWhizz.apply(14)).to.equal('whizz');
    });

    it('should return 4 when apply 4', function () {
        expect(fizzBuzzWhizz.apply(4)).to.equal(4);
    });

    it('should return fizzbuzz when apply number divisible 15', function () {
        expect(fizzBuzzWhizz.apply(15)).to.equal('fizzbuzz');
        expect(fizzBuzzWhizz.apply(30)).to.equal('fizzbuzz');
    });

    it('should return fizzwhizz when apply number divisible 21', function () {
        expect(fizzBuzzWhizz.apply(21)).to.equal('fizzwhizz');
        expect(fizzBuzzWhizz.apply(42)).to.equal('fizzwhizz');
    });

    it('should return buzzwhizz when apply number divisible 35', function () {
        expect(fizzBuzzWhizz.apply(35)).to.equal('buzzwhizz');
        expect(fizzBuzzWhizz.apply(70)).to.equal('buzzwhizz');
    });

    it('should return fizzbuzzwhizz when apply number divisible 105', function () {
        expect(fizzBuzzWhizz.apply(105)).to.equal('fizzbuzzwhizz');
        expect(fizzBuzzWhizz.apply(210)).to.equal('fizzbuzzwhizz');
    });

    it('should return [1,2,fizz,4] when call range 1 to 4', function () {
        expect(fizzBuzzWhizz.range(1, 4)).to.eql([1, 2, 'fizz', 4]);
    });

    it('should return [fizz,4,buzz,fizz] when call range 3 to 6', function () {
        expect(fizzBuzzWhizz.range(3, 6)).to.eql(['fizz', 4, 'buzz', 'fizz']);
    });
    
});