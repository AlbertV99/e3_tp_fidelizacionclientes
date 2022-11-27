import {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Navigate  } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Peticiones from '../../helpers/peticiones';

const Login = () =>{
    const captcha = useRef(null);
    const [datosForm,setDatosForm] = useState({});
    const [captchaValido, cambiarCaptchaValido] = useState(false);
    const [usuarioValido, cambiarUsuarioValido] = useState(false);

    const [,,,,endpointLibre] = Peticiones();

    const onChange =() => {
        console.log(captcha.current.getValue());
        if(captcha.current.getValue()){
            console.log("El usuario no es un robot")
            cambiarCaptchaValido(true);
        }
    }

    const guardarDatos=(objeto)=>{
        let temp = {...datosForm};
        temp[objeto.target.id]=objeto.target.value;
        setDatosForm(temp);
        console.log(temp);

    }

    const enviarForm = async ()=>{
        let endpoint = await endpointLibre('listar/usuario/nombre/'+datosForm.usuario+'/pass/'+datosForm.password, "GET");
        console.log(endpoint)
        if(endpoint.usuarios== 1){
            cambiarUsuarioValido(true);
        }

    }

    return (
        <>
            <Container  className="d-flex align-items-center justify-content-center"  style={{height: "100vh",maxWidth: "100vw",padding: '0', backgroundColor: "#212529",  margin: "0"}}>
                <Card>
                    <Card.Body >
                        <img
                            src="/logo.png"
                            width="120"
                            height="80"
                            className="d-inline-block align-top"
                        />
                        <div className="text-center " style={{ fontFamily: "monospace"}}>
                            <h2 >Inicio Sesion</h2>
                        </div>
                        {/* {error && <Alert variant="danger">{error}</Alert>} */}
                            <Form>
                                <Form.Group >
                                    <Form.Label className="d-flex justify-content-start">Usuario</Form.Label>
                                    <Form.Control id="usuario" onChange={(e)=>{guardarDatos(e)}}/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className="d-flex justify-content-start">Contraseña</Form.Label>
                                    <Form.Control type="password" id="password" onChange={(e)=>{guardarDatos(e)}} />
                                </Form.Group>
                                <div className="w-100 text-center mt-3">
                                {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                                <ReCAPTCHA
                                    ref={captcha}
                                    sitekey="6LcIdDUjAAAAAC8-bKqaoNltVOMS2VvHioXZdIti"
                                    onChange={onChange}
                                  />, 
                                </div>
                                {captchaValido &&
                                   <Button onClick={()=>enviarForm()}   className="w-100" type="button" style={{backgroundColor: "#01569a",borderColor: "#01569a"}}>Iniciar</Button>
                                }
                                {usuarioValido && (
                                    <Navigate to="/home" replace={true} />
                                )}
                            </Form>
                    </Card.Body>
                </Card>

            </Container>
        </>
    );
  }

  export default Login
