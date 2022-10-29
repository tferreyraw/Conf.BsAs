const cantidadInput = document.querySelector("#cantidad");
const categoriaInput = document.querySelector("#categoria");
const resumenButton = document.querySelector("#resumen");

const valorTicket = 200;
const descuentos = {
  estudiante: 0.8,
  trainee: 0.5,
  junior: 0.15,
};

const valoresForm = {
  cantidad: 0,
  categoria: "estudiante",
};

const calcularPrecio = (cantidad, categoria) =>
  (valorTicket - valorTicket * descuentos[categoria]) * cantidad;

cantidadInput.addEventListener("change", (ev) => {
  valoresForm.cantidad = Number(ev.target.value);
});

categoriaInput.addEventListener("change", (ev) => {
  valoresForm.categoria = ev.target.value;
});

resumenButton.addEventListener("click", () => {
  document.querySelector("#total").innerText = calcularPrecio(
    valoresForm.cantidad,
    valoresForm.categoria
  );
});
