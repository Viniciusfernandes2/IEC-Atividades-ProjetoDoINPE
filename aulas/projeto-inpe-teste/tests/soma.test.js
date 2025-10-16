// tests/soma.test.js

// Função simples para testar
function soma(a, b) {
  return a + b;
}

// Bloco de testes para a função soma
describe('Função de Soma', () => {
  test('soma de 2 + 3 deve ser 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma de números negativos', () => {
    expect(soma(-1, -2)).toBe(-3);
  });

  test('soma com zero', () => {
    expect(soma(0, 5)).toBe(5);
    expect(soma(5, 0)).toBe(5);
  });
});