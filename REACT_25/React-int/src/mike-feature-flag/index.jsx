import { useContext } from "react"
import { myFeatureFlagsContext } from "./context"

import LightDarkMode from "../light-dark-mode"
import TicTacToe from "../tic-tac-toe"
import RandomColor from '../random-color'
import TreeView from "../tree-veiw"
import menus from "../tree-veiw/data"

export default function MyFeatureFlags(){

    const {loading, enableFlags} = useContext(myFeatureFlagsContext)


    const componentsToR = [
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor/>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]

    // we used useContext to pass enableFlags and loading variables here
    // the func checks whether a specific key exists in enableFlags variable
    function checkEFlags(getKey){
        return enableFlags[getKey]
    }

    if(loading) return <h1> Loding data. Wait, Mike</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
            {/* maps our array of objects, takes key of each obj and using checkEFlags() checks whether it has a certain key, if yes-retuns its component, if no retuns null */}
            {componentsToR.map(item => checkEFlags(item.key) ? item.component : null)}
        </div>
    )




}