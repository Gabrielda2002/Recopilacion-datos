const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/proyecto_db'

mongoose.connect(url, {
    // useNewUrlParser:true,
    // useUnifiedTopology: true
    // useFindAndModify: false,
    // useCreateIndex: true
})
.then( () => console.log("conectado a mongo"))
.catch((e)=> console.log("error de conexcion "+ e))


const EstududianteSchema = mongoose.Schema({
    Nombre: String,
    Apellido1: String,
    Apellido2: String,
    TipoDoc: String,
    NumDoc: Number,
    FechaNacimiento: Date,
    Genero: String,
    Numero: String,
    EmailPer: String,
    EmailInst: String,
})

const estudianteModel = mongoose.model('Estudiante', EstududianteSchema)

// mostrar

const mostrar =async ()=>{
    const estudiantes = await estudianteModel.find()
    console.log(estudiantes)
}

// * crear
const crear = async () =>{
    const estudiante = new estudianteModel({
        Nombre: req.body.name,
         Apellido1: req.body.lastName1,
         Apellido2: req.body.lastName2,
         TipoDoc: req.body.typeDoc,
         NumDoc: req.body.num_doc,
         FechaNacimiento: req.body.Date,
         Genero: req.body.Gendere,
         Numero: req.body.phoneNumber,
         EmailPer: req.body.emailPer,
         EmailInst: req.body.emailInst,
    }, {versionKey: false})
    const resultado = await estudiante.save()
    console.log(resultado);
}

// actualizar
const actualizar = async (id)=>{
    const estudiante = await estudianteModel.updateOne({_id:id},
        {
            $set:{
                Nombre: "Gabriel modificado"
            }
        })
}
const eliminar = async (id)=>{
    const estudiante = await estudianteModel.deleteOne({_id:id})
    console.log(estudiante);
}
// mostrar()
// crear()
// actualizar("6574a29b5169e9e4bf93492b")
// eliminar("6574a6c19feb118459ed6119")

// ... (código de conexión y definición de modelo)

app.post('/guardar-formulario', async (req, res) => {
    try {
       const nuevoFormulario = await estudianteModel.create(req.body);
       res.status(200).send('Datos guardados correctamente');
    } catch (error) {
       console.error('Error al guardar en la base de datos:', error);
       res.status(500).send('Error al guardar en la base de datos');
    }
 });
 