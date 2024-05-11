import { useContext } from "react";
import { myFFContext } from "./context";
import Scroll from "../scroll-to-section/scroll";
import GitProfile from "../github-profile";





export default function MyFeatureFlag(){

    const {load, enableF} = useContext(myFFContext)


    const components = [
        {
            key: 'scroll',
            component: <Scroll/>
        },
        {
            key: 'gitprof',
            component: <GitProfile/>
        }
    ]

function checkFlags(getkey){
    return enableF[getkey]
}

    return (
        <div>
            <h1>Feature Flag</h1>
            {components.map(item => checkFlags(item.key) ? item.component : null )}
        </div>
    )
}