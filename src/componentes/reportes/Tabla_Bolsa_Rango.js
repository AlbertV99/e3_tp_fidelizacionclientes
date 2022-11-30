import React from 'react'
import PropTypes from 'prop-types'
import Fila_Bolsa_Rango from './Fila_Bolsa_Rango'

const  Tabla_Bolsa_Rango = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=[ "Nombre", "Apellido","Documento", "Fecha Asignacion", "Fecha Caducidad", "Puntaje Asignado", "Puntaje Utilizado", "Saldo de Puntos", "Saldo Restante"];
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
                        return <Fila_Bolsa_Rango key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla_Bolsa_Rango.propTypes = {
    datos:PropTypes.object
}

export default Tabla_Bolsa_Rango