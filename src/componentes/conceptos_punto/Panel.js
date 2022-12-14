import React,{useState,useEffect} from 'react';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Peticiones from '../../helpers/peticiones';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Panel = () => {
    const [datos,setDatos] = useState({"pagina_actual":0,"cantidad_paginas":0,"datos":[]});
    const [estadoForm,setEstadoForm] = useState(false);
    const [datosForm,setDatosForm] = useState({});
    const [obtenerPanel,guardarNuevoJson,obtenerUnicoRegistro,eliminarRegistro,endpointLibre] = Peticiones();
    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
        console.log(temp)
    }
    const enviarForm = ()=>{

        const form = {
            "descripcion": datosForm.descripcion,
            "puntos_requeridos": datosForm.puntos_requeridos
        }
        console.log(form);
        guardarNuevoJson('nuevo/punto',form)

    }

    const eliminarFila = async (id)=>{
        let temp = await eliminarRegistro('eliminar/punto',id)
        console.log(temp)
    }

    useEffect(()=>{
        console.log("Testing traida datos");
        obtenerPanel("listar/conceptopuntos",setDatos)
    },[]);

    return (
        <>
            <h1>Conceptos de uso de puntos</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="btn-grip">
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-row-reverse">
                        <Button variant="primary" onClick={()=>setEstadoForm(!estadoForm)}>Nuevo Concepto</Button>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <br/>
                    <Tabla datos={datos} eliminar = {eliminarFila}/>
                </div>

            </div>
            <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
                <Modal.Header closeButton>
                    <Modal.Title>Conceptos </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario almacenDatos = {guardarDatos}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                    <Button variant="success"onClick={()=>{enviarForm();setEstadoForm(!estadoForm)}}  >Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
