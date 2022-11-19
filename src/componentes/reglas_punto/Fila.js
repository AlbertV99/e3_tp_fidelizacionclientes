import React from 'react'
import PropTypes from 'prop-types'

const  Fila = ({dato}) => {

    return (
        <tr>
            <td>{dato.id}</td>
            <td>{dato.limite_inferior}</td>
            <td>{dato.limite_superior}</td>
            <td>{dato.monto_equivalencia}</td>
            <td>{dato.dias_vencimiento}</td>
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila