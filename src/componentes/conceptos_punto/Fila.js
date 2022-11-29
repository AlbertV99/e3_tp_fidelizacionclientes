import React from 'react'
import PropTypes from 'prop-types'

const  Fila = (prop) => {
    const {dato,eliminar} = prop;
    return (
        <tr>
            <td>{dato.id}</td>
            <td>{dato.descripcion}</td>
            <td>{dato.puntos_requeridos}</td>
            { (prop.eliminar && <td><button onClick={()=>{eliminar(dato.id)}}> Eliminar</button></td>) }
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila
