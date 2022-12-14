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
    const [obtenerPanel,guardarNuevoJson,,eliminarRegistro,] = Peticiones();

    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);

    }

    const eliminarFila = async (id)=>{
        let temp = await eliminarRegistro('eliminar/reglasorteo',id)
        console.log(temp)
    }

    const enviarForm = ()=>{
        console.log(guardarNuevoJson)
        const form = {
            'limite_inferior':datosForm.limite_inferior,
            'limite_superior':datosForm.limite_superior,
            'descripcion':datosForm.descripcion,
            'fecha_sorteo':datosForm.fecha_sorteo,
        }
        console.log(form);
        guardarNuevoJson('nuevo/reglasorteo',form)

    }
    useEffect(()=>{
        console.log("Testing traida de datos");
        obtenerPanel("listar/reglasorteo",setDatos)
    },[]);

    return (
        <>
            <h1>Parametrizacion de sorteo de premios</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">
      
                    </div>
                    <div className="col-sm-8 d-flex flex-row-reverse">
                        <Button variant="primary" onClick={()=>setEstadoForm(!estadoForm)}>Nuevo Sorteo</Button>
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
                    <Modal.Title>Sorteo </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario almacenDatos = {guardarDatos}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                    <Button variant="success" onClick={()=>{enviarForm();setEstadoForm(!estadoForm)}}>Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
} 