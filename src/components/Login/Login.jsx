import { useState, useContext, useRef, useEffect } from "react";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { Container } from "react-bootstrap";
import Message from '../Message/Message';



const Login = (props) => {

  const [user, setUser] = useState({email: "", username: "", password: ""});
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
                [event.target.name] : event.target.value
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
            if(isAuthenticated) {
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
        <Container>
            <form className="mt-5" onSubmit={handleSubmit}>
                <h1 className="text-center my-4 pb-5 font-light larger-spacing squeezed yellow-underline">SIGN IN</h1>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="username" 
                        onChange={handleChange} 
                        className="form-control form-control-lg form-xl purple-border" 
                        placeholder="Username" 
                        aria-label="Enter Username" 
                        disabled={disabled} 
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange} 
                        className="form-control form-control-lg form-xl purple-border" 
                        placeholder="Password" 
                        aria-label="Enter Password" 
                        disabled={disabled} 
                        required
                    />
                </div>
                <button className="btn btn-lg btn-primary btn-block button-xl py-3" type="submit" disabled={disabled}>
                    LOG IN <i className="fad fa-sign-in-alt ml-1"></i>
                </button>
            </form>
            <form className="mt-2 mb-5" onSubmit={handleRegisterRedirect}>
                <button className="btn btn-lg btn-info btn-block button-xl py-3" type="submit" disabled={disabled}>
                    Register Account
                </button>
            </form>
            {message ? <Message message={message}/> : null}
        </Container>
        </>
    );
};

export default Login;