import React from 'react'
import PropTypes from 'prop-types'

const  Fila_Uso = ({dato}) => {

    return (
        <tr>
            {/* <td>{dato.id}</td> */}
            <td>{dato.fecha}</td>
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.nro_doc}</td>
            <td>{dato.descripcion}</td>
            <td>{dato.puntaje_utilizado}</td>

        </tr>

    )
}
Fila_Uso.propTypes = {
    dato:PropTypes.object
}

export default Fila_Uso