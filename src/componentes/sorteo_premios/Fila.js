import React from 'react'
import PropTypes from 'prop-types'

const  Fila = (prop) => {
    const {dato,eliminar} = prop;
    return (
        <tr>
            <td>{dato.id}</td>
            <td>{dato.limite_inferior}</td>
            <td>{dato.limite_superior}</td>
            <td>{dato.descripcion}</td>
            <td>{dato.fecha_sorteo}</td>
            { (prop.eliminar && <td><button onClick={()=>{eliminar(dato.id)}} style={{backgroundColor: "red", border: "solid 1px white"}}><i className="bi bi-trash" style={{color: "white"}}></i></button></td>) }
        </tr>

    )
}
Fila.propTypes = {
    dato:PropTypes.object
}

export default Fila