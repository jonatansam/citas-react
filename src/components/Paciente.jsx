const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {    //funcion para eliminar pacinete colocando una confirmacion
        const respuesta = confirm('Deseas eliminar ese paciente');  //creamos confirmacion eliminar paciente por navegador
        
        if(respuesta) {  //si la respuesta es true(si) llamamos la funcion eliminar paciente
            eliminarPaciente(id)
        }

    }
    
  return (
    <div className="mb-5 mx-5 bg-white shadown-md px-7  py-5 rounded-xl mb-50 ">
        
        <p className="font-bold mb-3 text-black uppercase">Nombre: {''}
            <span className="text-blue-600 font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-black uppercase">Propietario: {''}
            <span className="text-blue-600 font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-black uppercase">Email: {''}
            <span className="text-blue-600 font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-black uppercase">fecha alta: {''}
            <span className="text-blue-600 font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-black uppercase">Sintomas: {''}
            <span className="text-blue-600 font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between">
            <button
                type= "button"
                className='mt-10 px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => setPaciente(paciente)}
            >Editar</button>
             <button
                type= "button"
                className='mt-10 px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={handleEliminar}
            >Eliminar</button>
        </div>

    </div>
  )
}

export default Paciente