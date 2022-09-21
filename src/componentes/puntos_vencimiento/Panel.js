import React,{useState,useEffect} from 'react';
import Tabla from './Tabla';
import Formulario from './Formulario';
import FetchUsuario from '../../helpers/peticiones';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Panel = () => {
    const [datos,setDatos] = useState({"pagina_actual":0,"cantidad_paginas":0,"datos":[]});
    const [estadoForm,setEstadoForm] = useState(false);
    const [obtenerPanel,,] = FetchUsuario();

    useEffect(()=>{
        obtenerPanel("usuario",setDatos)
        console.log(datos);
    },[]);

    return (
        <>
            <h1> Vencimiento de puntos</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="btn-grip">
                            <button className = "btn btn-outline-info"  data-bs-toggle="modal" data-bs-target="#modalFiltro" >Filtros</button>

                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button variant="primary"  ><i className="bi bi-caret-left-fill"></i></Button>
                                <button type="button" className="btn btn-outline-primary"> {datos.pagina_actual} </button>
                                <Button variant="primary" ><i className="bi bi-caret-right-fill"></i></Button>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-row-reverse">
                        <Button variant="primary" onClick={()=>setEstadoForm(!estadoForm)}>Nuevo Vencimiento de Puntos</Button>
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
                    <Modal.Title>Vencimiento de puntos </Modal.Title>
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
