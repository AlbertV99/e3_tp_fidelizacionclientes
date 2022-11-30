import React from 'react'
import PropTypes from 'prop-types'

const  Fila_Cliente = ({dato}) => {

    return (
        <tr>
            {/* <td>{dato.id}</td> */}
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.mail}</td>
            <td>{dato.telefono}</td>
            <td>{dato.fecha_nacimiento}</td>
            <td>{dato.nro_doc}</td>
            <td>{dato.nacionalidad}</td>
            <td>{dato.tipo_doc}</td>

        </tr>

    )
}
Fila_Cliente.propTypes = {
    dato:PropTypes.object
}

export default Fila_Cliente