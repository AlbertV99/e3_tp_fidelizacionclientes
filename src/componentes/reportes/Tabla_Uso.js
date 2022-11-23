import React from 'react'
import PropTypes from 'prop-types'
import Fila_Uso from './Fila_Uso'

const  Tabla_Uso = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=["fecha", "nombre", "apellido", "nro_doc", "descripcion", "puntaje_utilizado"];
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
                        return <Fila_Uso key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla_Uso.propTypes = {
    datos:PropTypes.object
}

export default Tabla_Uso
