import { createContext, useEffect, useState } from "react"
import myData from "./mydata"

export const myFFContext = createContext(null)

export default function MyFlagGlobal({children}){
    const [load, setLoad] = useState(false)
    const [enableF, setEnableF] = useState({})

    async function fetchF(){
        try{
            setLoad(true)
            const res = await myData()
            setEnableF(res)
            setLoad(false)

        }catch(e){
            console.log(e)
            throw new Error(e)
        }
    }

    useEffect(() => {
        fetchF()
    }, [])

    return(
        <myFFContext.Provider value={{load, enableF}}>
            {children}
        </myFFContext.Provider>
    )
}