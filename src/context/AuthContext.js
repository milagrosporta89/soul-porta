import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext) // para poder llamar directamente a useAuth

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [userLoad, setUserLoad] = useState(true)


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password) //funcionalidad de firebase
    }
    const logIn = async (email, password) => {
        
        const userCredentials= await signInWithEmailAndPassword(auth, email, password) //funcionalidad de firebase
        setUserLoad(false)
    } 
    
    const logout = () => signOut(auth); //funcionalidad de firebase

    
    useEffect (()=> {
        
        const unsubuscribe = onAuthStateChanged(auth, (user) => {
           
            setCurrentUser(user);
            setUserLoad(false)
           
          });
          return () => unsubuscribe();
    },[])
    
    const value={signUp, logIn, logout, currentUser, userLoad}
    return (
        <AuthContext.Provider value={value}>
            {props.children}

        </AuthContext.Provider>
     
    )
}