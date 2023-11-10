const listaPacientes = [];

const miModalAdd = new bootstrap.Modal("#modalAdd", {
  keyboard: false,
});

function addSubmit(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const paciente = {
    nombre: nombre.value,
    edad: edad.value,
  };
  listaPacientes.push(paciente);
  miModalAdd.hide();
}

function showModalAdd() {
  miModalAdd.show();
}
