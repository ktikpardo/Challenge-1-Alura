const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".texto__resultado");
const muneco = document.querySelector(".muneco__fondo");
const textoH2 = document.querySelector(".texto-h2");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    muneco.style.display = "none";
    textoH2.style.visibility = "hidden";
    let textoP1 = document.querySelector('.textoP1');
    if (textoP1) {
        textoP1.style.display = 'none';
    }

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.textContent = textoEncriptado;
    textArea.value = "";
    muneco.style.display = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada
}

function copiarTextoResultado() {
    const textoResultado = document.querySelector(".texto__resultado");
    
    // Crea un elemento temporal para copiar el contenido
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoResultado.textContent;  // Obtén el texto del elemento
    document.body.appendChild(tempTextArea);
    
    // Selecciona el contenido del textarea y cópialo
    tempTextArea.select();
    document.execCommand("copy");
    
    // Elimina el textarea temporal
    document.body.removeChild(tempTextArea);
    
    // Opcional: Mostrar un mensaje al usuario
    alert("Texto copiado al portapapeles");
}
