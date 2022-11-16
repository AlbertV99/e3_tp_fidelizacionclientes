import React from 'react'
import PropTypes from 'prop-types'

const  Fila = ({dato}) => {

    return (
        <tr>
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.nro_doc}</td>
            <td>{dato.telefono}</td>
            <td>{dato.nacionalidad}</td>
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila
