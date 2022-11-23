import React,{useState,useEffect} from 'react';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Peticiones from '../../helpers/peticiones';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Panel = () => {
    const [datos,setDatos] = useState({"pagina_actual":0,"cantidad_paginas":0,"datos":[]});
    const [estadoForm,setEstadoForm] = useState(false);
    const [obtenerPanel,,] = Peticiones();

    useEffect(()=>{
        console.log("Testing traida de datos");
        obtenerPanel("listar/reglaspunto",setDatos)
    },[]);

    return (
        <>
            <h1>Reglas de asignacion de puntos</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="btn-grip">

                        </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-row-reverse">
                        <Button variant="primary" onClick={()=>setEstadoForm(!estadoForm)}>Nueva Regla</Button>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <br/>
                    <Tabla datos={datos}/>
                </div>

            </div>
            <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
                <Modal.Header closeButton>
                    <Modal.Title>Conceptos </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                    <Button variant="success"  >Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
} 