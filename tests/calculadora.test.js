const calculadora = require("../models/calculadora.js");

test("Deve retornar 4 ao somar 2 + 2", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Deve retornar 105 ao somar 100 + 5", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("Deve retornar 'Erro' ao somar banana + 5", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10 + abacaxi", () => {
  const resultado = calculadora.somar(10, "abacaxi");
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10 + true", () => {
  const resultado = calculadora.somar(10, true);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar null + 5", () => {
  const resultado = calculadora.somar(null, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar undefined + 5", () => {
  const resultado = calculadora.somar(undefined, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10 + []", () => {
  const resultado = calculadora.somar(10, []);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar {} + 5", () => {
  const resultado = calculadora.somar({}, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar () => {} + 5", () => {
  const resultado = calculadora.somar(() => {}, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10 + NaN", () => {
  const resultado = calculadora.somar(10, NaN);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar NaN + 5", () => {
  const resultado = calculadora.somar(NaN, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar Infinity + 5", () => {
  const resultado = calculadora.somar(Infinity, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10 + -Infinity", () => {
  const resultado = calculadora.somar(10, -Infinity);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar 10.5 + '5.5'", () => {
  const resultado = calculadora.somar(10.5, "5.5");
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar '10.5' + 5.5", () => {
  const resultado = calculadora.somar("10.5", 5.5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar [] + {}", () => {
  const resultado = calculadora.somar([], {});
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar () => {} + null", () => {
  const resultado = calculadora.somar(() => {}, null);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao subtrair 10 - '5'", () => {
  const resultado = calculadora.subtrair(10, "5");
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao multiplicar '10' * 5", () => {
  const resultado = calculadora.multiplicar("10", 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao dividir 10 / '2'", () => {
  const resultado = calculadora.dividir(10, "2");
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao dividir 10 / 0", () => {
  const resultado = calculadora.dividir(10, 0);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 3 ao subtrair 5 - 2", () => {
  const resultado = calculadora.subtrair(5, 2);
  expect(resultado).toBe(3);
});

test("Deve retornar 20 ao multiplicar 4 * 5", () => {
  const resultado = calculadora.multiplicar(4, 5);
  expect(resultado).toBe(20);
});

test("Deve retornar 5 ao dividir 10 / 2", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});

test("Deve retornar 2.5 ao dividir 5 / 2", () => {
  const resultado = calculadora.dividir(5, 2);
  expect(resultado).toBe(2.5);
});

test("Deve retornar 0.3333333333333333 ao dividir 1 / 3", () => {
  const resultado = calculadora.dividir(1, 3);
  expect(resultado).toBe(0.3333333333333333);
});

test("Deve retornar 'Erro' ao dividir 10 / NaN", () => {
  const resultado = calculadora.dividir(10, NaN);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao multiplicar 10 * NaN", () => {
  const resultado = calculadora.multiplicar(10, NaN);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao somar NaN + 5", () => {
  const resultado = calculadora.somar(NaN, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao subtrair Infinity - 5", () => {
  const resultado = calculadora.subtrair(Infinity, 5);
  expect(resultado).toBe("Erro");
});

test("Deve retornar 'Erro' ao dividir 10 / -Infinity", () => {
  const resultado = calculadora.dividir(10, -Infinity);
  expect(resultado).toBe("Erro");
});
