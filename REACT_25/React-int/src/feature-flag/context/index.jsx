import { createContext, useEffect, useState } from "react";
import featureFlagData from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({})    


    async function fetchFeatureFlags(){
        try{
            setLoading(true)
            const response = await featureFlagData();//simply returns an object dummyApiResponse which is async processed first by the JS and then by the React
            console.log(response)
            setEnabledFlags(response)
            setLoading(false)

        } catch(e) {
            console.log(e);
            throw new Error(e)
            setLoading(false)
        }
    }

    //after the object has been fetched it loads it with the first load of the page and when [] changes
    useEffect(()=> {
        fetchFeatureFlags()
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>            {/* takes 2 variables that need  to be passed down the tree and sends (in our case) to another index.jsx*/}

            {children}
        </FeatureFlagsContext.Provider   >
    )
}