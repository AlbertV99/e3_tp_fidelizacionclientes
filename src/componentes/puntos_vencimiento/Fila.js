import React from 'react'
import PropTypes from 'prop-types'

const  Fila = ({dato}) => {

    return (
        <tr>
            <td>{dato.id}</td>
            <td>{dato.fecha_inicio}</td>
            <td>{dato.fecha_fin}</td>
            <td>{dato.duracion}</td>
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila