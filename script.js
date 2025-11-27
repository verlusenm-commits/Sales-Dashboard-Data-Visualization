// Dados simulados
const vendas = 120;
const clientes = 85;
const faturamento = 7800;

document.getElementById("vendas").textContent = vendas;
document.getElementById("clientes").textContent = clientes;
document.getElementById("faturamento").textContent = faturamento;

// Gráfico
const ctx = document.getElementById("grafico");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
        datasets: [{
            label: "Faturamento (R$)",
            data: [1200, 1500, 1700, 1600, 1800],
            borderWidth: 1
        }]
    }
});
