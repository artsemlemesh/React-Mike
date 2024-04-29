import { createContext, useEffect, useState } from "react";
import featureFlagData from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({})    


    async function fetchFeatureFlags(){
        try{
            setLoading(true)
            const response = await featureFlagData();
            console.log(response)
            setEnabledFlags(response)
            setLoading(false)

        } catch(e) {
            console.log(e);
            throw new Error(e)
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchFeatureFlags()
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureFlagsContext.Provider   >
    )
}