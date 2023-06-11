import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState([]);  //estado arreglo de pacientes(lista)
  const [paciente, setPaciente] = useState({});   // estado objeto paciente

  //verificamos si hay algo en localstorage para que no se pierda la informacion antes guardada
  useEffect( () => {
    const obtenerLS = () => {
      
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];  // si no hay nada en localstorage cooca un arrego vacio
  
      setPacientes(pacientesLS)  //almacenar lo que haya en locarstorage en setpacientes(lista pacientes)
    }

    obtenerLS();

  }, []) //como no le pasamos ninguan parametro se ejcutara una vez


  //creamos useeffect para detectar cuando haya cmabios en pacientes
  useEffect( () => {        //localstroage solo permite string para ello usamosjson.stringify
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));    //tomamos todo lo que haya en pacientes y lo alamacenamos en localstorage
  },[pacientes])


  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);  //por cada paciente en pacientes.id regresa todos los pacientes con id diferente al que se pase 
    setPacientes(pacientesActualizados)  //actualizamos la lista de pacientes
  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      
      <div className="mt-10 md:flex ">
        <Formulario 
          pacientes= {pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    
    </div>

   
  )
}

export default App
