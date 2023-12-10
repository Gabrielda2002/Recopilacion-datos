
   async function enviarFormulario() {
      const formData = new FormData(document.getElementById('form-container'));
      const data = {};
      formData.forEach((value, key) => {
         data[key] = value;
      });

      try {
         const response = await fetch('/guardar-formulario', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });

         const result = await response.text();
         console.log(result);
      } catch (error) {
         console.error('Error al enviar el formulario:', error);
      }
   }

