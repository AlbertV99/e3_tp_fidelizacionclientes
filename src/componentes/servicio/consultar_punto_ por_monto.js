import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ConsultarMonto = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Servicio consultar puntos por monto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <Form.Label htmlFor="monto">Monto </Form.Label>
                        <Form.Control type="number" min="0" id="monto" />
                    </div> 
                </div>
            </Modal.Body>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        {/* <Form.Label htmlFor="cantidad_puntos">Cantidad de puntos que equivale </Form.Label> */}
                        <div class="alert alert-primary bi bi-info-circle-fill" role="alert">  La cantidad de puntos es: </div>
                    </div> 
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                <Button variant="success" > Enviar</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
export default ConsultarMonto
