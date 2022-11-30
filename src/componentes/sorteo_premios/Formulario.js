import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';

const Formulario = ({almacenDatos}) => {
  return (
      <div className="container">
          {/* <div className="row" >
            <Form.Label htmlFor="id">Id</Form.Label>
            <Form.Control type="text" id="id"/>
          </div> */}
          <div className="row" >
            <Form.Label htmlFor="limite_inferior">Limite inferior</Form.Label>
            <Form.Control type="number" min="0" id="limite_inferior" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="limite_superior">Limite superior</Form.Label>
            <Form.Control type="number" min="0" id="limite_superior" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
            <Form.Control type="text" id="descripcion" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="fecha_sorteo">Fecha del sorteo</Form.Label>
            <Form.Control type="date" id="fecha_sorteo" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
      </div>
  )
}
Formulario.propTypes = {
  datos:PropTypes.func
}
export default Formulario
