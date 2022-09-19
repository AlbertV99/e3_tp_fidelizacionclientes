import React from 'react'
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
      <div className="container">
          <div className="row" >
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control type="text" id="nombre"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="apellido">Apellido</Form.Label>
            <Form.Control type="text" id="apellido"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="t_doc">Tipo de Documento</Form.Label>
            <Form.Select aria-label="Default select example">
                <option value="ci">Cedula</option>
                <option value="ruc">R.U.C.</option>
            </Form.Select>
          </div>
          <div className="row" >
            <Form.Label htmlFor="mail">Correo electronico</Form.Label>
            <Form.Control type="text" id="mail"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="nacionalidad">Nacionalidad</Form.Label>
            <Form.Control type="text" id="nacionalidad"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="telefono">Telefono</Form.Label>
            <Form.Control type="text" id="telefono"/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="f_nac">Fecha de Nacimiento</Form.Label>
            <Form.Control type="text" id="f_nac"/>
          </div>
      </div>
  )
}

export default Formulario
