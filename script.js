const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mnsj");


function validatTexto() {

    let textWrite = textArea.value;
    let valuet = textWrite.match(/^[a-z ' ']*$/);

    if(!valuet || valuet === 0) {

        alert("Solo letras minusculas y sin acentos");
        location.reload();
        return true;

    };
};

function btnEncriptar() {

    if(!validatTexto()) {

        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = '';

    };

};

function encriptar(stringEncriptado) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        };

    };

    return stringEncriptado;

};

function btnDesencriptar() {

    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';

}

function desencriptar(stringDesencriptado) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        };

    };

    return stringDesencriptado;

};

function btnCopy() {

    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = '';


}

function btnPage() {
    
    navigator.clipboard.readText().then(texto => {
        textArea.value = texto;
    }).catch(error => {
        console.error("Error al leer el portapapeles:", error);
    });

}

function deleted() {
    mensaje.value = '';
    textArea.value = '';
}