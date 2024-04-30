import { useEffect, useState, createContext } from "react";
import myFeatureFlagData from "./mydata";


//this func creates new context object.
//if a component tries to access the context without being wrapped in a provider it will default to 'null'
export const myFeatureFlagsContext = createContext(null);
//export makes this func available for other files to import and use


export default function MyFeatureFlagGlobalState({children}){
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({})

    async function fetchFF(){
        try{
            setLoading(true)
            const response = await myFeatureFlagData();
            console.log(response)
            setEnableFlags(response)
            setLoading(false)

        } catch(e) {
            
            console.log(e)
            throw new Error(e) //'throw' is used for error handling
            // and allows errors to propagate up the call stack,
            // while setError is used to update the component with an error message
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFF()
        //we put it here to avoid infinite loops,
        //placing it inside useEffect with an empty dependency [], ensures 
        //that it only executes once, when the component mounts
    }, [])

    return (
        <myFeatureFlagsContext.Provider value={{loading, enableFlags}}>
            {/* accepts a 'value' prop that will be accessible to all components that are descendants of this provider
            'loading' and 'enableFlags' will be passed down to any components that use useContent(FeatureFlagsContext) */}
            {children}
            {/* {children} is a special prop in React that represents the child components of the 'Provider', it allows you to wrap other components with this provider, so they can access its context */}
        </myFeatureFlagsContext.Provider>
    )
}


