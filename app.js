//lista para almacenar los nombres ingresados por el usuario
let amigos = [];

// Función para agregar un nombre a la lista de amigos
function agregarAmigo() {
    // 1. Obtener el valor que el usuario escribió en el input con id="amigo"
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Quitamos espacios en blanco al inicio y final

    // 2. Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return; // Si está vacío, detenemos la función aquí
    }

    // 3. Agregar el nombre al array 'amigos'
    amigos.push(nombre);
    //llamamos a la funcion que actualiza la lista en pantalla
    actualizarLista();

    // 4. Limpiar el campo de entrada
    input.value = "";

    // (Opcional por ahora) 5. Mostrar la lista en consola para verificar
    console.log("Lista actual de amigos:",amigos);;
}

// Función para mostrar los nombres de los amigos en la lista HTML
function actualizarLista() {
    // 1. Obtener el elemento UL donde se mostrarán los nombres
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista actual para evitar duplicados
    lista.innerHTML = "";

    // 3. Recorrer el array 'amigos' y crear elementos <li> por cada uno
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo <li> con el nombre del amigo
        const item = document.createElement("li");
        item.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(item);
    }
}
function sortearAmigo() {
  // Verificar si la lista de amigos está vacía
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  // Calcular un índice aleatorio según la cantidad de amigos
  const i = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre que corresponde a ese índice
  const ganador = amigos[i];

  // Mostrar el resultado en el elemento con id="resultado"
  const res = document.getElementById('resultado');
  res.innerHTML = '<li>El amigo secreto es: <strong>' + ganador + '</strong></li>';
}
