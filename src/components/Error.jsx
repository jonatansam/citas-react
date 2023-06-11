
//el prop(propiedad) children nos permite pasar linas html al componente toma todo lo que se pasa
const Error = ({children}) => {
  return (
      <div className='bg-red-600 text-white text-center p-3 uppercase mb-3 font-bold rounded-md'>
         {children}
      </div>
 
  )
}

export default Error