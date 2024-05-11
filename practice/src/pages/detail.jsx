import { useContext } from "react"
import { SmthContext } from "../App"


export default function Detail(){

    const [hey, setHey] = useContext(SmthContext)

console.log(hey)
    return (
        <div>
            detail 
        </div>
    )
}