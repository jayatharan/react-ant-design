import React,{useState, createContext, useEffect} from 'react'
import useAuthState from './AuthHeaderHook';

const AuthContext = createContext({})

interface AuthProviderProps {
    children:any;
}

const AuthProvider = ({children}:AuthProviderProps) => {

    const authState = useAuthState();

    const [auth, setAuth] = useState('');

    useEffect(()=>{
        setAuth('user')
    },[authState])

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {authState.loading?(
                <div>Loading...</div>
            ):(
                <>
                    {children}
                </>
            )}
        </AuthContext.Provider>
    )
}

export default AuthProvider