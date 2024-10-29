import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


    const [userdata, setUserData] = useState(null)


    useEffect(() => {
        // setLocalStorage();
        const { employees } = getLocalStorage();
        setUserData(employees)
    }, []);

    useEffect(() => {
        if (userdata) {
            setLocalStorage({ employees: userdata });
        }
    }, [userdata]);

    return (
        <div>
            <AuthContext.Provider value={[userdata, setUserData]} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
