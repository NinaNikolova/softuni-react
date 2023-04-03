import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

// rapper component
export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate()

    const onLogout = async () => {
        setAuth({})
    }
    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        if (rePass !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData)
            setAuth(result);
            navigate('/catalog')
        } catch (error) {
            console.log('There is problem')
        }
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data)
            setAuth(result);

            navigate('/catalog')
        } catch (error) {
            console.log('There is problem')
        }
    }
    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
        isAuthenticated: !!auth.accessToken

    }



    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    return context;
}