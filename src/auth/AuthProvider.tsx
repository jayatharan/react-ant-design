import React,{useState, createContext, useEffect} from 'react'
import { UserDetails } from '../application/models/UserModels';
import useAuthState from './AuthHeaderHook';
import useLoadUserDetails from './LoadUserDetailsHook';

interface AuthProviderProps {
    children:any;
}

export interface Auth {
    loading:boolean;
    authenticated:boolean;
    userDetails?:UserDetails;
}

interface AuthContextInterface {
    auth:Auth;
    setAuth:React.Dispatch<React.SetStateAction<Auth>>
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider = ({children}:AuthProviderProps) => {

    const authState = useAuthState();
    const loadUserDetails = useLoadUserDetails();
    const [auth, setAuth] = useState<Auth>({
        loading:true,
        authenticated:false
    });

    useEffect(()=>{
        if(authState.authenticated){
            loadUserDetails();
        }
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