import { useEffect, useState } from "react";



export default function useLS(key, defVal){

    const [val, setVal] = useState(()=> {
        let currVal

        try {
            currVal = JSON.parse(localStorage.getItem(key))
        }catch(e){
            console.log(e)
            currVal = defVal
        }

        return currVal
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(val))
    }, [key, val])

    return[val, setVal]
}