import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';
import Tabla_Uso from './Tabla_Uso';

const UsoPunto = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [cliente,setCliente] = useState({'datos': []});
    const [concepto,setConcepto] = useState({'datos': []});
    const [panel,setPanel] = useState({'datos': []});
    const [datosForm,setDatosForm] = useState({});
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
        obtenerPanel('listar/conceptopuntos',setConcepto);
    },[]);

    const enviarForm = ()=>{
        if(datosForm.filtro == "Cliente"){
            obtenerPanel('reporte/usopuntocab/cli',setPanel, datosForm.cliente);
        }else if (datosForm.filtro == "Concepto de uso"){
            obtenerPanel('reporte/usopuntocab/concep',setPanel, datosForm.concepto);
        }else if (datosForm.filtro == "Fecha de uso"){
            obtenerPanel('reporte/usopuntocab/fech',setPanel, datosForm.fecha_uso);
        }

    }

    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Reporte uso puntos </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <Form.Label htmlFor="filtro" >Filtar por</Form.Label>
                        <Form.Select id="filtro" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        <option>Cliente</option>
                        <option>Concepto de uso</option>
                        <option>Fecha de uso</option></Form.Select>

                    </div> 
                    <br/>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Cliente' ? "block" : 'none')}}>
                        <Form.Label htmlFor="cliente">Cliente</Form.Label>
                        <Form.Select  id="cliente" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        {
                            cliente.datos.map((dato)=>{
                             return <option key={dato.id} value={dato.id}>{ dato.nombre +" "+dato.apellido}</option>
                                })
                        }
                        </Form.Select>
                    </div>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Concepto de uso' ? "block" : 'none')}}>
                        <Form.Label htmlFor="concepto">Concepto Uso </Form.Label>
                        <Form.Select id="concepto" onChange={(e)=>{guardarDatos(e)}}><option></option>
                        {
                            concepto.datos.map((dato)=>{
                             return <option key={dato.id} value={dato.descripcion}>{ dato.descripcion}</option>
                            })
                        }
                        </Form.Select>
                    </div>
                    <div className="row" style={{display:( datosForm.filtro  ==  'Fecha de uso' ? "block" : 'none')}}>
                        <Form.Label htmlFor="fecha_uso">Fecha de uso</Form.Label>
                        <Form.Control type="date" id="fecha_uso" onChange={(e)=>{guardarDatos(e)}}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                <Button variant="success" onClick={()=>{enviarForm();setEstadoForm(!estadoForm)}}> Mostrar</Button>
            </Modal.Footer>
        </Modal>
        <h1>Reporte completo</h1>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <br/>
                <Tabla_Uso datos={panel}/>
            </div>
        </div>
    </>
  )
}
export default UsoPunto
