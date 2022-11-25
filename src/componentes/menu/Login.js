import React from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Link } from "react-router-dom";


const Login = () =>{
    return (
        <>
            <Container  className="d-flex align-items-center justify-content-center"  style={{height: "100vh",maxWidth: "100vw",padding: '0', backgroundColor: "#212529",  margin: "0"}}>
                <Card>
                    <Card.Body >
                    <h2 className="text-center mb-4">Inicio Sesion</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <br/>
                        <Form.Group id="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password"  />
                        </Form.Group>
                        <br/>
                        <Link to="/home"><Button  className="w-100" type="submit">Iniciar</Button></Link>
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
