import { onAuthStateChanged } from '@firebase/auth';
import React, {  createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase/firebase';

const Apots = createContext();


const ApotsContext = ( {children}) => {
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success"
    })
    useEffect(() => {
       
        onAuthStateChanged(auth, user =>{
            if (user)setUser(user);
            else setUser(null);
         
        })
    }, [])
    return (
        <Apots.Provider value={{alert , setAlert, user, }}  >
            {children}
        </Apots.Provider>
    )
}

export default ApotsContext;
export const ApotsState = () => {
   return useContext(Apots);
}
