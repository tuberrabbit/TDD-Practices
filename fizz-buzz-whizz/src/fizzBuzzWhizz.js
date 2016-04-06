module.exports = {
    apply: function (number) {
        if (!(number % 105)) {
            return 'fizzbuzzwhizz';
        }
        if (!(number % 35)) {
            return 'buzzwhizz';
        }
        if (!(number % 21)) {
            return 'fizzwhizz';
        }
        if (!(number % 15)) {
            return 'fizzbuzz';
        }
        if (!(number % 7)) {
            return 'whizz';
        }
        if (!(number % 5)) {
            return 'buzz';
        }
        if (!(number % 3)) {
            return 'fizz';
        }
        return number;
    }
};