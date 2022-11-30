import React from 'react'
import PropTypes from 'prop-types'

const  Fila = ({dato}) => {

    return (
        <tr>
            <td>{dato.id}</td>
            <td>{dato.id_cliente}</td>
            <td>{dato.fecha_asignacion}</td>
            <td>{dato.fecha_caducidad}</td>
            <td>{dato.puntaje_asignado}</td>
            <td>{dato.puntaje_utilizado}</td>
            <td>{dato.puntos_saldo}</td>
            <td>{dato.monto_saldo}</td>
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila
