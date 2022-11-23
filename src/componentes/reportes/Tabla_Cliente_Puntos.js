import React from 'react'
import PropTypes from 'prop-types'
import Fila_Cliente_Puntos from './Fila_Cliente_Puntos'

const  Tabla_Cliente_Puntos = ({datos}) => {
    //// <th>Nombre</th><th>Correo</th><th>Rol</th>
    const cabecera=[ "Nombre", "Apellido", "Saldo de Puntos","Mail","Telefono","Fecha nacimiento", "Documento", "Nacionalidad", "Tipo documento"];
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
                        return <Fila_Cliente_Puntos key="fila-{fila.dato1}" dato ={fila}/>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

Tabla_Cliente_Puntos.propTypes = {
    datos:PropTypes.object
}

export default Tabla_Cliente_Puntos 