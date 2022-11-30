import React from 'react'
import PropTypes from 'prop-types'
import Fila_Cliente from './Fila_Cliente'

const  Tabla_Cliente = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=[ "nombre", "apellido", "Email","Telefono","Fecha nacimiento", "Documento", "Nacionalidad", "Tipo documento"];
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
                    datos.datos.map(
                    (fila)=>{
                        return <Fila_Cliente key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla_Cliente.propTypes = {
    datos:PropTypes.object
}

export default Tabla_Cliente