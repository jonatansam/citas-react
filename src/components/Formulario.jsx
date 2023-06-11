//rafce para crear componentes
import { useState, useEffect } from 'react';         //e significa evento
import Error from './Error';
import React from 'react'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);  // variable para verificar el error en el formulario


    //espera a que el componente este listo para ejecutar una accion en este caso setear el formulario para que aparezac informacion paciente  a editar
    useEffect(() => {
        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente] )

    const generarId = () => {    //funcion para generar id aleatorio
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha

    }

    const handleSubmit = (e) => {       //funcion para verificar accion antes de enviar formulario

        e.preventDefault();   

        //validar formulario

        if([ nombre, propietario, email, fecha, sintomas ].includes('') ){
            console.log('todos los campos son obligatorios')

            setError(true)
            return;
        }

        setError(false)

        //creamos el objeto del paciente le pasamos todas las caracteristicas del paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }
        
        //verificamos si el paciente existe para editarlo
        
        if(paciente.id) {
            //editando el registro
            objetoPaciente.id = paciente.id

            //iteramos sobre los pacientes de la lista con .map devuelve arreglo nuevo
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
            paciente.id ? objetoPaciente : pacienteState)
            
            //añadimos el arreglo nuevo a set pacientes para actualizar la lista
            setPacientes(pacientesActualizados)
            
            //limpiamos el paciente antiguo en memoria
            setPaciente({})
            
        } else{
            //nuevo registro
            
            //los 3 puntos significa que tomamos una copia de pacientes 
            
            objetoPaciente.id = generarId()   //agregamos el id al objeto paciente
            setPacientes([...pacientes, objetoPaciente]);
        }




        //reiniciar/limpiar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimineto Pacientes</h2>

            <p className="text-lg mt-4 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form  
                onSubmit={handleSubmit}  //meodo onsumit llama a funcion handlesubmit
                className="bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-5"
            >
            
                
                { error &&  <Error><p>TODOS LOS CAMPO SON OBLIGATORIOS</p></Error>}  
                <div className="mb-8">
                    <label htmlFor='mascota' className="block text-gray-800 uppercase font-bold text-center">
                        Nombre Mascota
                    </label>

                    <input 
                    id='mascota'
                    type="text" 
                    placeholder='Nombre De La Mascota'
                    className="border-2 w-full p-2 mt-2 placeholder-blue-700 rounded-md text-center"
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}  //evento para modificar state
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor='propietario' className="block text-gray-800 uppercase font-bold text-center">
                        Nombre Propietario
                    </label>

                    <input 
                    id='propietario'
                    type="text" 
                    placeholder='Nombre Del Propietario'
                    className="border-2 w-full p-2 mt-2 placeholder-blue-700 rounded-md text-center"
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor='email' className="block text-gray-800 uppercase font-bold text-center">
                        Email
                    </label>

                    <input 
                    id='propietario'
                    type="email" 
                    placeholder='Email Del Propietario'
                    className="border-2 w-full p-2 mt-2 placeholder-blue-700 rounded-md text-center"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor='fechaalta' className="block text-gray-800 uppercase font-bold text-center">
                        Fecha De Alta
                    </label>

                    <input 
                    id='fechaalta'
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-blue-700 rounded-md text-center"
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-8">
                    <label htmlFor='fechaalta' className="block text-gray-800 uppercase font-bold text-center">
                        sintomas
                    </label>
                    <textarea
                        id='sintomas'
                        className="border-2 w-full p-2 mt-2 placeholder-blue-700 rounded-md text-center"
                        placeholder='Describe Los SIntomas'
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}

                    />
                </div>

                <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } //si hay un is en paciente entonces colocar editar paciente si no colocar agregar paciente
                />

                

            </form>
        </div>
    )
}

export default Formulario;

