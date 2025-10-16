// src/alerta.js
function classificarAlerta(nivel) {
  if (nivel > 80) return "Crítico";
  if (nivel > 50) return "Alto";
  return "Moderado";
}

// Exporte a função para uso em outros arquivos
module.exports = { classificarAlerta };