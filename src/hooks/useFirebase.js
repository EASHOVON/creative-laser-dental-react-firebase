import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setUser(result.user)
            })
    }


    const signUpWithEmail = (email, password) =>
    {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) =>
            {
                // Signed in 
                const user = result.user;
                setUser(user)
                console.log(user);
                // ...
            })

    }

    const signInUserWithEmail = (email, password) =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) =>
            {
                // Signed in 
                const user = result.user;
                setUser(user)
                // ...
            })
    }

    const LogOut = () =>
    {
        signOut(auth).then(() =>
        {
            setUser({})
        })
            .finally(() => setIsLoding(false))
    }



    useEffect(() =>
    {
        onAuthStateChanged(auth, (user) =>
        {
            if (user)
            {
                setUser(user)
            } else
            {
                setUser({})
                setIsLoding(false)
            }
        });
    }, [])


    return {
        signInUsingGoogle,
        user,
        error,
        LogOut,
        signUpWithEmail,
        signInUserWithEmail
    }
}

export default useFirebase;