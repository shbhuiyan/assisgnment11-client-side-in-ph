import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext()


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [darkTheme , setDarkTheme] = useState(false)

    const googleProvider = new GoogleAuthProvider();

    // create user....
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

        // update profile
        const update = (name , photo) => {
            return updateProfile(auth.currentUser , {
                displayName:name,
                photoURL:photo,
            })
        }

    // oldUser .....
    const oldUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // login/signup with google provider
    const google = () => {
        return signInWithPopup(auth , googleProvider)
    }

    // Sign Out...
    const logOut = () => {
        return signOut(auth)
    }



    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe()
    },[])


    const authInfo = {
        user,
        setUser,
        createUser,
        update,
        oldUser,
        google,
        logOut,
        loading,
        setLoading,
        darkTheme,
        setDarkTheme,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;