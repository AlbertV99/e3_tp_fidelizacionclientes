import React from 'react'
import PropTypes from 'prop-types'
import Fila from './Fila'

const  Tabla = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=["Nombre","Apellido","cedula","Usuario"];
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
                        return <Fila key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla.propTypes = {
    datos:PropTypes.object
}

export default Tabla
