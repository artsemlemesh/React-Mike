import { useContext } from "react"
import { SmthContext } from "../App"


export default function Fav(){

    const hey = useContext(SmthContext)

    console.log(hey, 'favhey')

    return (
        <div>
            favorite
        </div>
    )
}