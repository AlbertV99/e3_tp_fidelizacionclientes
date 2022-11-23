import React from 'react'
import PropTypes from 'prop-types'

const  Fila_Bolsa_Rango = ({dato}) => {

    return (
        <tr>
            {/* <td>{dato.id}</td> */}
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.nro_doc}</td>
            <td>{dato.fecha_asignacion}</td>
            <td>{dato.fecha_caducidad}</td>
            <td>{dato.puntaje_asignado}</td>
            <td>{dato.puntaje_utilizado}</td>
            <td>{dato.puntos_saldo}</td>
            <td>{dato.monto_saldo}</td>
        </tr>

    )
}
Fila_Bolsa_Rango.propTypes = {
    dato:PropTypes.object
}

export default Fila_Bolsa_Rango