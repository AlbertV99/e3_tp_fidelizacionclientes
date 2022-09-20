import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
      <div className="container">
          {/* <div className="row" >
            <Form.Label htmlFor="id">Id</Form.Label>
            <Form.Control type="text" id="id"/>
          </div> */}
          <div className="row" >
            <Form.Label htmlFor="limite_-inferior">Limite inferior</Form.Label>
            <Form.Control type="number" min="0" id="limite_inferior"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="t_doc">Limite superior</Form.Label>
            <Form.Control type="number" min="0" id="limite_superior"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="monto_equivalencia">Monto equivalencia</Form.Label>
            <Form.Control type="number" min="0" id="monto_equivalencia"/>
          </div>
      </div>
  )
}

export default Formulario
