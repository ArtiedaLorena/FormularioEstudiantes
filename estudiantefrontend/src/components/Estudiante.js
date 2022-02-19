import React,{useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import{Container, Paper, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "&>*": {
      margin: theme.spacing(1),
      padding:theme.spacing(3),
      widht:theme.spacing(1),

    },
  },
}));

export default function Estudiante() {

  const paperStyle = {
    paddding: "50px 20px",
    
    margin: "20px auto",
  };
  const [nombre, setNombre]= useState('')
  const[direccion, setDireccion]=useState('')  
  const classes = useStyles();
  const [estudiantes, setEstudiantes]=useState([])

  const handleClick=(e)=>{
      e.preventDefault()
      const estudiante={nombre, direccion}
      console.log(estudiante)

      fetch("http://localhost:8080/estudiante/agregar",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(estudiante)
  }).then(()=>{
      console.log("Nuevo estudiante agregado")
   } )

  }

  useEffect(()=>{
      fetch("http://localhost:8080/estudiante/listar")
      .then(res=>res.json())
      .then((result)=>{
          setEstudiantes(result);
      }
  )
  },[])

  return (
    <Container widht='100px' >
      <Paper elevation={3} style={paperStyle}>
        <h1>Agregar estudiante</h1>
        <form
          padding="50px"
          className={classes.root}
          noValidate
          autoComplete="off"
          
        >
          <div >
            <TextField
              id="outlined-basic"
              label="Nombre del estudiante"
              variant="outlined"
              //fullWidth
              width="75%"
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
            />
          </div>
          <div>
            <TextField 
              id="outlined-basic"
              label="Direccion"
              variant="outlined"
              width="75%"
              //fullWidth
              value={direccion}
              onChange={(e)=> setDireccion(e.target.value)}
            />

          </div>


            <Button variant="contained" color ="primary" href="#contained-buttons" onClick={handleClick}>
            Enviar
            </Button>
        </form>
       
      </Paper>
      <h1>Estudiantes</h1>

      <Paper elevation={3} style={paperStyle}>

          {estudiantes.map(estudiante=>(
              <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={estudiante.id}>
          Estudiante Nº: {estudiante.id}<br/>
          Nombre: {estudiante.nombre}<br/>
          Direccion: {estudiante.direccion}<br/>
        </Paper>    ))}


      </Paper>
      
    </Container>
  );
}
