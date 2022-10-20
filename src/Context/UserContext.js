import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateName = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: '',
        });
    };

    const emailVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    const AuthInto = {
        user,
        signWithGoogle,
        loading,
        logout,
        signIn,
        resetPassword,
        createUser,
        updateName,
        emailVerify,
    };
    return (
        <AuthContext.Provider value={AuthInto}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
