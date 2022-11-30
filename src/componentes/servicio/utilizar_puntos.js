import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';

const UtilizarPuntos = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [datosForm,setDatosForm] = useState({});
    const [datosCliente,setDatosCliente] = useState({"datos":[]});
    const [datosConcepto,setDatosConcepto] = useState({"datos":[]});
    const [obtenerPanel,guardarNuevoJson,] = Peticiones();
    const [monto,setDatosMonto] = useState({});


    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
        console.log(temp);

    }

    const enviarForm = ()=>{
        let form = {
            "id_cliente":datosForm.cliente,
            "id_concepto_punto":datosForm.concepto,
        }
        console.log(form);
        guardarNuevoJson('nuevo/usopunto',form);

    }

    useEffect(()=>{
        obtenerPanel("listar/cliente",setDatosCliente);
        obtenerPanel("listar/conceptopuntos",setDatosConcepto);
    },[]);


    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Servicio utilizar putnos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <Form.Label htmlFor="monto">Cliente </Form.Label>
                        <Form.Select aria-label="Default select example" id ="cliente" onChange={(e)=>{guardarDatos(e)}} >
                            <option> </option>
                            {
                                datosCliente.datos.map((dato,fila)=>{
                                    return <option key={dato.id} value={dato.id}>{ dato.nombre +" "+dato.apellido}</option>
                                })
                            }
                        </Form.Select>
                    </div>
                    <div className="row" >
                        <Form.Label htmlFor="concepto">Concepto </Form.Label>
                        <Form.Select aria-label="Default select example" id ="concepto" onChange={(e)=>{guardarDatos(e)}} >
                            <option> </option>
                            {
                                datosConcepto.datos.map((dato,fila)=>{
                                    return <option key={dato.id} value={dato.id}>{ dato.descripcion}</option>
                                })
                            }
                        </Form.Select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        <div className="alert alert-primary bi bi-info-circle-fill" role="alert">  La cantidad de puntos es: {monto.puntaje_asignado} </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                <Button variant="success" onClick={()=>enviarForm()}> Enviar</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
export default UtilizarPuntos
