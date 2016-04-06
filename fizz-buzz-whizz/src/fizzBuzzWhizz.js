module.exports = {
    apply: function (number) {
        var result = [];
        if (!(number % 3)) {
            result.push('fizz');
        }
        if (!(number % 5)) {
            result.push('buzz');
        }
        if (!(number % 7)) {
            result.push('whizz');
        }
        return result.join('') || number;
    }
};