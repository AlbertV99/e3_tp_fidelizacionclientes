import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Peticiones from '../../helpers/peticiones';

const CargarPuntos = () => {
    const [estadoForm,setEstadoForm] = useState(true);
    const [datosForm,setDatosForm] = useState({});
    const [datosCliente,setDatosCliente] = useState({"datos":[]});
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
            "monto_saldo":datosForm.monto,
        }
        obtenerPanel('reporte/reglaspunto',setDatosMonto,datosForm.monto);
        guardarNuevoJson('servicio/cargapuntos',form);

    }

    useEffect(()=>{
        obtenerPanel("listar/cliente",setDatosCliente);

    },[]);


    return (
    <>
        <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
            <Modal.Header closeButton>
                <Modal.Title>Cargar Puntos</Modal.Title>
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
                        <Form.Label htmlFor="monto">Monto de Compra </Form.Label>
                        <Form.Control type="number" min="0" id="monto" onChange={(e)=>{guardarDatos(e)}} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Body>
                <div className="container">
                    <div className="row" >
                        {/* <Form.Label htmlFor="cantidad_puntos">Cantidad de puntos que equivale </Form.Label> */}
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
export default CargarPuntos
