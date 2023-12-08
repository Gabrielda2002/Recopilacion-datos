const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/proyecto_db', { useNewUrlParser: true, useUnifiedTopology: true });

const formSchema = new mongoose.Schema({
    name: String,
    lastName1: String,
    lastName2: String,
    typeDoc: String,
    num_doc: Number,
    Date: Date,
    Gendere: String,
    phoneNumber: String,
    emailPer: String,
    emailInst: String,
});

const Formulario = mongoose.model('formulario', formSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/guardar-formulario', (req, res) => {
    console.log('Solicitud post recibida', req.body)
    const nuevoFormulario = new Formulario(req.body);

    nuevoFormulario.save((err) => {
        if (err) {
            res.status(500).send('Error al guardar en la base de datos');
        } else {
            res.status(200).send('Datos guardados correctamente');
        }
    });
});

app.listen(port, () => {
    console.log("Servidor en ejecución en http://localhost:" + port);
});
