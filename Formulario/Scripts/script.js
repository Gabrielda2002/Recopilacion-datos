function enviarFormulario() {
    const formulario = document.getElementById('form-container');
    const formData = new FormData(formulario);

    const data = Array.from(formData).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});


    console.log('Datos a enviar: ', data);
    fetch('http://localhost:8080/guardar-formulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
    })
    .catch(error => console.error('Error: ', error));
}
