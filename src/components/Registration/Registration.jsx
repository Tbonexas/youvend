import { useState, useRef, useEffect } from "react";
import AuthService from "../../Services/AuthService";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "./style.css";

//Import Components
import Message from "../Message/Message";

const Register = (props) => {
    //Initialize user state.
    const [user, setUser] = useState({ email: "", username: "", password: "", role: "" });
    //Initialize message state.
    const [message, setMessage] = useState(null);
    //Set input fields to enabled by default until logged in.
    const [disabled, setDisabled] = useState(false);

    //Create a reference for the timer.
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    //When the input changes, set the username/password to the current value.
    const handleChange = (event) => {
        event.preventDefault();
        setUser(
            {
                ...user,
                [event.target.name]: event.target.value
            }
        );
    }

    //Handle when the form is submitted.
    const handleSubmit = (event) => {
        event.preventDefault();
        //Send user information to sign up.
        AuthService.register(user).then(data => {
            //After registering, get the message returned back.
            const { message } = data;
            setMessage(message);
            //Reset the form.
            //As long as there is no error, set the timer for 2 seconds to redirect to login page after registering.
            if (!message.msgError) {
                setDisabled(true);
                timerID = setTimeout(() => {
                    props.history.push("/login");
                }, 2000);
            }
        });
    };

    const handleLogInredirect = (event) => {
        event.preventDefault();
        props.history.push("/login");
    };

    return (
        <>
            <Container className='registerContainer'>
                <Form className="mt-5register" onSubmit={handleSubmit}>
                    <h1 className="register.h1" style={{color:'rgba(245, 181, 27)'}}>REGISTER</h1>
                    <Form.Row>
                        <Form.Group as={Col} controlId='emailFormGroup'>
                            <Form.Label name='email'></Form.Label>
                            <Form.Control
                                type="email"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Email"
                                aria-label="Enter Email"
                                disabled={disabled}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId='userNameFormGroup'>
                            <Form.Label name='username'></Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Username"
                                aria-label="Enter Username"
                                disabled={disabled}
                                minLength="5"
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId='passwordFormGroup'>
                            <Form.Label name='password'></Form.Label>
                            <Form.Control
                                type="password"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Password"
                                aria-label="Enter Password"
                                disabled={disabled}
                                minLength="8"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="form-group d-none" as={Col} controlId='userFormGroup'>
                            <Form.Label name="role"></Form.Label>
                            <Form.Control
                                type="text" onChange={handleChange} className="form-control form-control-lg" placeholder="user" value="user" disabled={true}
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Button className="registerButton1" type="submit" disabled={disabled}>
                            Sign Up <i className="fad fa-user-plus ml-1"></i>
                        </Button>
                    </Form.Row>
                </Form>
                <br>
                </br>
                <Form className="mt-2 mb-5" onSubmit={handleLogInredirect}>
                    <Button className="registerButton2" type="submit" disabled={disabled}>
                        Log Into Existing Account
                    </Button>
                </Form>
                {message ? <Message message={message} /> : null}
            </Container>
        </>
    );
};

export default Register;