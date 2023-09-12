import {createContext,  useState } from "react"
import axios from "axios"
import newRequest from "../util/NewRequest"
import { useEffect } from "react"

export const AuthContext=createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser,setCurretUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const login=async(inputs)=>{
        const res= await newRequest.post("/auth/login",inputs)
        setCurretUser(res.data)
    }
    const logout= async (inputs)=>{
        await newRequest.post("/auth/logout")
        setCurretUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])
    return(
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

