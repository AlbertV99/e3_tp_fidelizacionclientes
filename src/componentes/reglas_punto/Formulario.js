import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = ({almacenDatos}) => {
  return (
      <div className="container">

          <div className="row" >
            <Form.Label htmlFor="limite_inferior">Limite inferior</Form.Label>
            <Form.Control type="number" min="0" id="limite_inferior" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="t_doc">Limite superior</Form.Label>
            <Form.Control type="number" min="0" id="limite_superior" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="monto_equivalencia">Monto equivalencia</Form.Label>
            <Form.Control type="number" min="0" id="monto_equivalencia" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="dias_vencimiento">Monto equivalencia</Form.Label>
            <Form.Control type="number" min="0" id="dias_vencimiento" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
      </div>
  )
}

export default Formulario
