import { useState, useContext, useRef, useEffect } from "react";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Message from '../Message/Message';
import './style.css';
import logo from '../../assets/navbarlogo/navlogo.png'


const Login = (props) => {

    const [user, setUser] = useState({ email: "", username: "", password: "" });
    const [message, setMessage] = useState(null);
    const [disabled, setDisabled] = useState(false);

    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const authContext = useContext(AuthContext);

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
        //Send user information to log in.
        AuthService.login(user).then(data => {
            //Once returned, pull out the needed data from the response.
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                //Update global context with user information.
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                //Once authenticated, redirect to aspirations for current user.

                setMessage({
                    msgBody: "Success! Logging in...",
                    msgError: false
                });

                setDisabled(true);

                timerID = setTimeout(() => {
                    props.history.push("/aspirations");
                }, 2000);
            } else {
                //Otherise, set an error message.
                setMessage(message);
            }
        });
    };

    const handleRegisterRedirect = (event) => {
        event.preventDefault();
        props.history.push("/register");
    };

    return (
        <>
            <Container className='loginContainer'>
                <Form className="mt-5login" onSubmit={handleSubmit}>
                    <h1 className="login.h1" style={{ color: 'rgba(245, 181, 27)' }}>SIGN IN</h1>
                    <Form.Row>
                        <Form.Group as={Col} controlId='usernameLoginFormGroup'>
                            <Form.Label name='username'></Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Username"
                                aria-label="Enter Username"
                                disabled={disabled}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId='passwordLoginFormGroup'>
                            <Form.Label name='password'></Form.Label>
                            <Form.Control
                                type="password"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Password"
                                aria-label="Enter Password"
                                disabled={disabled}
                                required
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Button className="loginButton1" type="submit" disabled={disabled}>
                            LOG IN <i className="fad fa-sign-in-alt ml-1"></i>
                        </Button>
                    </Form.Row>
                </Form>
                <br>
                </br>
                <Form className="mt-2 mb-5" onSubmit={handleRegisterRedirect}>
                    <Button className="loginButton2" type="submit" disabled={disabled}>
                        Register Account
                    </Button>
                </Form>
                {message ? <Message message={message} /> : null}
                <br>
                </br>
                <img src={logo} alt='minilogo' height='40px' />
            </Container>
        </>
    );
};

export default Login;