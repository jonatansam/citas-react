import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

        {pacientes && pacientes.length ? (     // creamos condicional para cambiar el titulo del listado de pacientes 
          <>    
          
              <h2 className="font-black text-3xl text-center ">Listado pacientes</h2>
              <p className="text-center mt-5 mb-10 ">
                  Administra tus {''}
                  <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>
              </p>
              <div className="mb-10 md:h-screen overflow-y-scroll">

                { pacientes.map( paciente => (  //itera sobre los pacientes
                    <Paciente 
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                    />
                ))}  
                

              </div>
          </>

        ): (
          <>

            <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
              <p className="text-center mt-5 mb-10 ">
                  Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
              </p>
          </>




        )}
       

        

        
    </div>
  )
}

export default ListadoPacientes;