import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


    const [userdata, setUserData] = useState(null)


    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin })
    }, []);


    return (
        <div>
            <AuthContext.Provider value={userdata} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
