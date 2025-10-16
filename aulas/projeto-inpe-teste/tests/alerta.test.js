// tests/alerta.test.js
const { classificarAlerta } = require('../src/alerta');

describe('Sistema de Classificação de Alertas Climáticos - INPE', () => {
  // Teste para alertas CRÍTICOS
  describe('Alertas Críticos (nível > 80)', () => {
    test('deve retornar "Crítico" para nível 90', () => {
      expect(classificarAlerta(90)).toBe('Crítico');
    });

    test('deve retornar "Crítico" para nível 81', () => {
      expect(classificarAlerta(81)).toBe('Crítico');
    });

    test('deve retornar "Crítico" para nível 100', () => {
      expect(classificarAlerta(100)).toBe('Crítico');
    });
  });

  // Teste para alertas ALTOS
  describe('Alertas Altos (50 < nível ≤ 80)', () => {
    test('deve retornar "Alto" para nível 70', () => {
      expect(classificarAlerta(70)).toBe('Alto');
    });

    test('deve retornar "Alto" para nível 51', () => {
      expect(classificarAlerta(51)).toBe('Alto');
    });

    test('deve retornar "Alto" para nível 80', () => {
      expect(classificarAlerta(80)).toBe('Alto');
    });
  });

  // Teste para alertas MODERADOS
  describe('Alertas Moderados (nível ≤ 50)', () => {
    test('deve retornar "Moderado" para nível 50', () => {
      expect(classificarAlerta(50)).toBe('Moderado');
    });

    test('deve retornar "Moderado" para nível 30', () => {
      expect(classificarAlerta(30)).toBe('Moderado');
    });

    test('deve retornar "Moderado" para nível 0', () => {
      expect(classificarAlerta(0)).toBe('Moderado');
    });

    test('deve retornar "Moderado" para nível negativo', () => {
      expect(classificarAlerta(-10)).toBe('Moderado');
    });
  });

  // Testes de borda (edge cases)
  describe('Casos de Borda', () => {
    test('deve retornar "Alto" para nível 50.1', () => {
      expect(classificarAlerta(50.1)).toBe('Alto');
    });

    test('deve retornar "Crítico" para nível 80.1', () => {
      expect(classificarAlerta(80.1)).toBe('Crítico');
    });
  });
});