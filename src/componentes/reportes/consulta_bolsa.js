import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';
import Tabla_Bolsa_Rango from './Tabla_Bolsa_Rango';

const ConsultaBolsaRango = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [datosForm,setDatosForm] = useState({});
    const [cliente,setCliente] = useState({'datos': []});
    const [panel,setPanel] = useState({'datos': []});
    const [obtenerPanel,,] = Peticiones();


    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
        console.log(temp);

    }

    useEffect(()=>{
        console.log("Testing traida datos");
        obtenerPanel('listar/cliente',setCliente);
    },[]);

    const enviarForm = ()=>{
        if(datosForm.filtro == "Cliente"){
            obtenerPanel('reporte/bolsapuntos',setPanel, datosForm.cliente);
        }else if (datosForm.filtro == "Rango de puntos"){
            obtenerPanel(`reporte/bolsaspunto/inf/${datosForm.rango_inferior}/sup`,setPanel, datosForm.rango_superior);
        }

    }

    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Reporte consulta de clientes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                    <Form.Label htmlFor="filtro" >Filtar por</Form.Label>
                        <Form.Select id="filtro" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        <option>Cliente</option>
                        <option>Rango de puntos</option></Form.Select>
                    </div> 
                    <br/>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Cliente' ? "block" : 'none')}}>
                        <Form.Label htmlFor="cliente">Cliente</Form.Label>
                        <Form.Select  id="cliente" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        {
                            cliente.datos.map((dato)=>{
                                return <option key={dato.id} value={dato.id}>{ dato.nombre + " " + dato.apellido }</option>
                            })
                        }
                        </Form.Select>
                    </div>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Rango de puntos' ? "block" : 'none')}}>
                        <Form.Label htmlFor="rango" >Rango Inferior</Form.Label>
                        <Form.Control type="number" id="rango_inferior" onChange={(e)=>{guardarDatos(e)}}/>
                        <Form.Label htmlFor="rango" >Rango Superior</Form.Label>
                        <Form.Control type="number" id="rango_superior" onChange={(e)=>{guardarDatos(e)}}/>
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
                <Tabla_Bolsa_Rango datos={panel}/>
            </div>
        </div>
    </>
  )
}
export default ConsultaBolsaRango
