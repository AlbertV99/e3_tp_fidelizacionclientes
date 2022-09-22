import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ConsultaClientes = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Reporte consulta de clientes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <Form.Label htmlFor="nombre">Nombre </Form.Label>
                        <Form.Select><option>nombre 1</option></Form.Select>

                    </div> 
                    <div className="row" >
                        <Form.Label htmlFor="apellido">Apellido  </Form.Label>
                        <Form.Select><option>apellido 1</option></Form.Select>
                    </div>
                    <div className="row" >
                        <Form.Label htmlFor="cliente">Cumpleaños</Form.Label>
                        <Form.Select><option>cumpleaños 1</option></Form.Select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                <Button variant="success" > Descargar</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
export default ConsultaClientes
