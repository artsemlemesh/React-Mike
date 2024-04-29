import { useContext } from "react"
import LightDarkMode from "../light-dark-mode"
import { FeatureFlagsContext } from "./context"
import TicTacToe from "../tic-tac-toe"
import RandomColor from '../random-color'
import TreeView from "../tree-veiw"
import menus from "../tree-veiw/data"

export default function FeatureFlags(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)


    const componentsToRender = [
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

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading) return  <h1>Loading data. please wait</h1>
 
    return (
        <div>
            <h1>Feature Flags</h1>

            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}