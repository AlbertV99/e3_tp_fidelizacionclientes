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

    useEffect(()=>{
        console.log("Testing traida datos");
        obtenerPanel("listar/vencimientopuntos",setDatos)
    },[]);

    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
    }

    const enviarForm = ()=>{
        console.log(guardarNuevoJson)

        const form = {
            "fecha_inicio": datosForm.f_inicio,
            "fecha_fin": datosForm.f_fin,
            "duracion": datosForm.duracion
        }

        console.log(form);
        guardarNuevoJson('nuevo/vencimientopunto',form)

    }

    const eliminarFila = async (id)=>{
        let temp = await eliminarRegistro('eliminar/vencimientopunto',id)
        console.log(temp);
        setDatos(datos);
    }

    return (
        <>
            <h1> Vencimiento de puntos</h1>
            <br/>
            <div className="container-fluid " id="acciones">
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="btn-grip">


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
                    <Tabla datos={datos} eliminar = {eliminarFila}/>
                </div>

            </div>
            <Modal show={estadoForm}  animation={false} onHide={()=>setEstadoForm(!estadoForm)}>
                <Modal.Header closeButton>
                    <Modal.Title>Vencimiento de puntos </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formulario almacenDatos = {guardarDatos} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEstadoForm(!estadoForm)} >Cerrar</Button>
                    <Button variant="success"  onClick={()=>enviarForm()} >Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
