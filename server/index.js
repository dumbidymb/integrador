const express = require("express");

const mysql = require("mysql");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "clinica.cf14bqp4ggtp.us-east-1.rds.amazonaws.com",
  user: "Drakencito",
  password: "Pumas1234.",
  database: "BD1"
});

app.post("/create",(req,res)=>{ 
 
    const curp = req.body.curp;
    const fecha = req.body.date;
    const hora = req.body.selectedTime;
    const folio = req.body.folio;

    db.query("INSERT INTO Cita(Fecha,Curp,Hora,Folio) VALUES(?,?,?,?) ", [fecha,curp,hora,folio],
    (err,result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send("citas echa!");
        }
    }
    );
    
});



app.post("/create2",(req,res)=>{ 

const nombre = req.body.nombre_usuario;
const correo = req.body.correo;
const curp = req.body.curp;
const numero = req.body.numero;
const apellido_M = req.body.apellido_M;
const apellido_P = req.body.apellido_P;
const dia_nac = req.body.dia_nac;
const mes_nac = req.body.mes_nac;
const anio_nac = req.body.anio_nac;
const ciudad = req.body.ciudad;
const colonia = req.body.colonia;
const calle  = req.body.calle;
const num_casa = req.body.num_casa;
const religion = req.body.religion;
const c_postal = req.body.c_postal;
const genero = req.body.genero;







  db.query("INSERT INTO Pacientes(Curp,Nombre,Ape_p,Ape_m,Correo,Numero,Dia_nac,Ciudad,Colonia,Calle,Num_casa,C_postal,Genero,Religion,Mes_nac,Año_nac) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ", [curp,nombre,apellido_P,apellido_M,correo,numero,dia_nac,ciudad,colonia,calle,num_casa,c_postal,genero,religion,mes_nac,anio_nac],
  (err,result)=>{
      if (err) {
          console.log(err);
      } else {
          res.send("citas echa!");
      }
  }
  );
  
});

app.post("/registro", (req, res) => {
  const { correo, nombre, contrasena } = req.body;



  db.query("INSERT INTO usuario (correo, usuario, contraseña) VALUES (?, ?, ?)", [correo, nombre, contrasena], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error al registrar el usuario" });
    } else {
      res.status(200).json({ message: "Usuario registrado exitosamente" });
    }
  });
});




app.post('/mostrar', (req, res) => {
  const folio = req.body.folio;
  db.query("SELECT * FROM Cita WHERE Folio = ?",[folio], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al obtener los datos de la tabla Citas' });
    } else {
      res.status(200).json(result);
    }
  });
});

  app.post('/formulario', (req, res) => {
    const usuario = req.body.usuario;
    const contraseña = req.body.contrasena;
  
    db.query(
      'SELECT * FROM usuario WHERE usuario = ? AND contraseña = ?',
      [usuario, contraseña],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Error al verificar las credenciales' });
        } else {
          if (result.length > 0) {
            res.send(true)
          } else {
            res.send(false)
          }
        }
      }
    );
 });


app.delete('/eliminar/:folio', (req, res) => {
  const { folio } = req.params.folio;
  const query = 'DELETE FROM Cita WHERE Folio=?';
  connection.query(query, [folio], (error, results) => {
    if (error) {
      console.error('Error deleting row: ', error);
      res.status(500).json({ error: 'Error deleting row.' });
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete('/menu/:folio', (req, res) => {
  const folio = req.params.folio;

  const query = 'DELETE FROM menu WHERE nombreplatillo = ?';
  connection.query(query, [nombreplatillo], (err, result) => {
      if (err) {
          console.error('Error al eliminar el platillo:', err);
          res.status(500).json({ error: 'Error al eliminar el platillo' });
          return;
      }
      if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Platillo no encontrado' });
          return;
      }
      res.json({ message: 'Platillo eliminado exitosamente' });
  });
});

app.listen(3002,()=>{
console.log("corriendo en el puerto 3302")

})

