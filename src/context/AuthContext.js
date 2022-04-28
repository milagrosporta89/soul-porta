import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext) // para poder llamar directamente a useAuth

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({})


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword( email, password) //funcionalidad de firebase
    }
    const logIn = (email, password) =>  signInWithEmailAndPassword(auth, email, password) //funcionalidad de firebase
    
    const logout= ()=> auth.logout() //funcionalidad de firebase

    
    useEffect (()=> {
        auth.onAuthStateChanged((user)=> {
            setCurrentUser(user)
        })
        
    },[])
    
    const value={signUp, logIn, logout, currentUser}
    return (
        <AuthContext.Provider value={value}>
            {props.children}

        </AuthContext.Provider>
     
    )
}