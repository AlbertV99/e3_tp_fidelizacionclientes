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

    const eliminarFila = async (id)=>{
        let temp = await eliminarRegistro('eliminar/cliente',id)
        console.log(temp)
    }

    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);

    }
    const enviarForm = ()=>{
        console.log(guardarNuevoJson)
        const form = {
            'nombre':datosForm.nombre,
            'apellido':datosForm.apellido,
            'mail':datosForm.mail,
            'nro_doc':datosForm.nro_doc,
            'telefono':datosForm.telefono,
            'fecha_nacimiento':datosForm.nombre,
            'id_tipo_doc':datosForm.tipo_doc,
            'id_nacionalidad':datosForm.nacionalidad,
            'fecha_nacimiento':datosForm.f_nac,
        }
        console.log(form);
        guardarNuevoJson('nuevo/cliente',form)
        setEstadoForm(false)

    }
    useEffect(()=>{
        obtenerPanel("listar/cliente",setDatos)
    },[]);

    return (
        <>
            <h1>Clientes</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">

                    </div>
                    <div className="col-sm-8 d-flex flex-row-reverse">
                        <Button variant="primary" onClick={()=>setEstadoForm(!estadoForm)}>Nuevo Cliente</Button>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <br/>
                    <Tabla datos={datos}  eliminar = {eliminarFila}/>
                </div>

            </div>
            <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cliente </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario almacenDatos = {guardarDatos}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                    <Button variant="success" onClick={()=>{enviarForm();setEstadoForm(!estadoForm)}} >Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
