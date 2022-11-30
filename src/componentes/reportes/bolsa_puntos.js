import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Bolsa = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Reporte bolsas puntos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <Form.Label htmlFor="concepto_uso">Concepto de uso</Form.Label>
                        <Form.Select><option>concepto 1</option></Form.Select>

                    </div> 
                    <div className="row" >
                        <Form.Label htmlFor="fecha_uso">Fecha de uso  </Form.Label>
                        <Form.Control type="date" id="fecha_uso"/>
                    </div>
                    <div className="row" >
                        <Form.Label htmlFor="cliente">Cliente</Form.Label>
                        <Form.Select><option>cliente 1</option></Form.Select>
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
export default Bolsa
