import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';
import Tabla_Cliente_Puntos from './Tabla_Cliente_Puntos';

const ConsultaPuntosVencer = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [datosForm,setDatosForm] = useState({});
    // const [cliente,setCliente] = useState({'datos': []});
    const [panel,setPanel] = useState({'datos': []});
    const [obtenerPanel,,] = Peticiones();


    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
        console.log(temp);

    }

    // useEffect(()=>{
    //     console.log("Testing traida datos");
    //     obtenerPanel('listar/cliente',setCliente);
    // },[]);

    const enviarForm = ()=>{
        obtenerPanel('/reporte/cliente',setPanel, datosForm.duracion);
    }

    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Reporte consulta de clientes con puntos a vencer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <Form.Label htmlFor="duracion" >Dias maximo</Form.Label>
                        <Form.Control type="number" id="duracion" onChange={(e)=>{guardarDatos(e)}}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                <Button variant="success" onClick={()=>{enviarForm();setEstadoForm(!estadoForm)}}> Mostrar</Button>
            </Modal.Footer>
        </Modal>
        <br/>
        <h1>Reporte completo</h1>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <br/>
                <Tabla_Cliente_Puntos datos={panel}/>
            </div>
        </div>
    </>
  )
}
export default ConsultaPuntosVencer
