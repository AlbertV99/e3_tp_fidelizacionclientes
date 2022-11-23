import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';
import Tabla_Cliente from './Tabla_Cliente';

const ConsultaClientes = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [datosForm,setDatosForm] = useState({});
    const [cliente,setCliente] = useState({'datos': []});
    const [cumple,setCumple] = useState({'datos': []});
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
        if(datosForm.filtro == "Nombre"){
            obtenerPanel('reporte/cliente/nombre',setPanel, datosForm.nombre);
        }else if (datosForm.filtro == "Apellido"){
            obtenerPanel('reporte/cliente/apellido',setPanel, datosForm.apellido);
        }else if (datosForm.filtro == "Cumpleaños"){
            obtenerPanel('reporte/cliente/cumple',setPanel, datosForm.cumpleaños);
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
                        <option>Nombre</option>
                        <option>Apellido</option>
                        <option>Cumpleaños</option></Form.Select>
                    </div> 
                    <br/>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Nombre' ? "block" : 'none')}}>
                        <Form.Label htmlFor="nombre">Nombre</Form.Label>
                        <Form.Select  id="nombre" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        {
                            cliente.datos.map((dato)=>{
                                return <option key={dato.id} value={dato.nombre}>{ dato.nombre}</option>
                            })
                        }
                        </Form.Select>
                    </div>

                    <div className="row" style={{display:( datosForm.filtro  ==  'Apellido' ? "block" : 'none')}}>
                        <Form.Label htmlFor="apellido">Apellido</Form.Label>
                        <Form.Select  id="apellido" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        {
                            cliente.datos.map((dato)=>{
                                return <option key={dato.id} value={dato.apellido}>{dato.apellido}</option>
                            })
                        }
                        </Form.Select>
                    </div>

                    <div className="row" style={{display:( datosForm.filtro  ==  'Cumpleaños' ? "block" : 'none')}}>
                        <Form.Label htmlFor="cumpleaños" >Cumpleaños</Form.Label>
                        <Form.Control type="date" id="cumpleaños" onChange={(e)=>{guardarDatos(e)}}/>
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
                <Tabla_Cliente datos={panel}/>
            </div>
        </div>
    </>
  )
}
export default ConsultaClientes
