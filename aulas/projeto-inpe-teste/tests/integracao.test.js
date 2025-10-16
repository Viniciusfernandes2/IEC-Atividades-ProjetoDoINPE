function classificarAlerta(valor) {
return valor > 80 ? "Crítico" : "Moderado";
}
function enviarNotificacao(alerta) {
return`Notificação enviada: ${alerta}`;
}
test("classificação + notificação", () => {
const alerta = classificarAlerta(90);
const resultado = enviarNotificacao(alerta);
expect(resultado).toBe("Notificação enviada: Crítico");
});