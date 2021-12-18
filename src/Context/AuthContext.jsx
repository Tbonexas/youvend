import { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";

//Export Provider and Consumer for global state.
export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            //Once the user is authenticatd, set the global state authentication.
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);

    //Return the children wrapped with the provider of the global context (once loaded).
    return (
        <div>
            {!isLoaded ? <h1>Loading...</h1> : 
            <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                { children }
            </AuthContext.Provider>}
        </div>
    );
} 