import React from 'react'
import PropTypes from 'prop-types'
import Fila from './Fila'

const  Tabla = ({datos,eliminar}) => {

    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=["Nombre","Apellido","cedula","Telefono","Nacionalidad"];
    console.log(datos)
  return (
    <>
        <table className="table table-striped table-hover" style={{backgroundColor:"#ffffff"}}>
            <thead className="table-dark">
                <tr >
                    {
                        cabecera.map(
                            (dato) => {
                             return  <th>{dato}</th>
                            }
                        )
                    }

                </tr>
            </thead>
            <tbody>
                {
                    datos.datos.map((fila)=>{
                        return <Fila key={"fila-"+fila.id+""} dato ={fila} eliminar={eliminar}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla.propTypes = {
    datos:PropTypes.object,
    eliminar:PropTypes.func
}

export default Tabla
