import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';

const Formulario = ({almacenDatos}) => {
  return (
      <div className="container">
          <div className="row" >
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control type="text" id="nombre" onChange={(e)=>{almacenDatos(e)}}/>
          </div>
          <div className="row" >
            <Form.Label htmlFor="apellido">Apellido</Form.Label>
            <Form.Control type="text" id="apellido" onChange={(e)=>{almacenDatos(e)}} />
          </div>
          <div className="row" >
            <Form.Label htmlFor="t_doc">Tipo de Documento</Form.Label>
            <Form.Select aria-label="Default select example" id ="tipo_doc" onChange={(e)=>{almacenDatos(e)}} >
                <option value="1">Cedula</option>
                <option value="2">R.U.C.</option>
            </Form.Select>
          </div>
          <div className="row" >
            <Form.Label htmlFor="nro_doc">Numero de doc</Form.Label>
            <Form.Control type="text" id="nro_doc" onChange={(e)=>{almacenDatos(e)}} />
          </div>
          <div className="row" >
            <Form.Label htmlFor="mail">Correo electronico</Form.Label>
            <Form.Control type="text" id="mail" onChange={(e)=>{almacenDatos(e)}} />
          </div>
          <div className="row" >
            <Form.Label htmlFor="nacionalidad">Nacionalidad</Form.Label>
            <Form.Select aria-label="Default select example" id ="nacionalidad" onChange={(e)=>{almacenDatos(e)}} >
                <option value="0">Seleccione-dato</option>
                <option value="1">Paraguaya</option>
            </Form.Select>
          </div>
          <div className="row" >
            <Form.Label htmlFor="telefono">Telefono</Form.Label>
            <Form.Control type="text" id="telefono" onChange={(e)=>{almacenDatos(e)}} />
          </div>
          <div className="row" >
            <Form.Label htmlFor="f_nac">Fecha de Nacimiento</Form.Label>
            <Form.Control type="text" id="f_nac" onChange={(e)=>{almacenDatos(e)}} />
          </div>
      </div>
  )
}
Formulario.propTypes = {
    datos:PropTypes.func
}
export default Formulario
