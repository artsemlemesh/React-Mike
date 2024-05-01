import { useEffect, useState } from "react";



export default function UseLS(key, defValue){

    const [value, setValue] = useState(()=> {
        let currValue;

        try{
            currValue = JSON.parse(localStorage.getItem(key) || String(defValue))
        } catch(e) {
            console.log(e)
            currValue = defValue
        }

        return currValue
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}