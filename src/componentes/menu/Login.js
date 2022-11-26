import React from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Link } from "react-router-dom";



const Login = () =>{
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
                        <Form >
                            <Form.Group id="email">
                                <Form.Label className="d-flex justify-content-start">Correo Electronico</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label className="d-flex justify-content-start">Contraseña</Form.Label>
                                <Form.Control type="password"  />
                            </Form.Group>
                            <br/>
                            <Link to="/home"><Button  className="w-100" type="submit" style={{backgroundColor: "#01569a",borderColor: "#01569a"}}>Iniciar</Button></Link>
                        </Form>
                            <div className="w-100 text-center mt-3">
                            {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                            </div>
                    </Card.Body>
                </Card>

            </Container>
        </>
    );
  }

  export default Login
