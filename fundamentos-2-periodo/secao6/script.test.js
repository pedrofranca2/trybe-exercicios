const { removeItem, myFizzBuzz, encode, decode } = require('./script');

// Exercício 1
describe('testes da função removeItem', () => {
    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

// Exercício 2

describe('A função myFizzBuzz(num) recebe um número num como parâmetro', () => {
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    it('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });

    it('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz('2')).toBeFalsy();
    });
});

// Exercício 3

describe('testes função encode e decode', () => {
    it('teste se encode e decode são funções.', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });

    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('trybe').length).toEqual(5);
        expect(encode('trybe').length).toEqual(5);
    });
});

