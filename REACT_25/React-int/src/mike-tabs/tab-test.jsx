import Tabss from "./tabs"


function RandomComponent(){
    return <h1>this is random component</h1>
}

export default function TabsMike(){

    const tabs = [
        {
            label: 'Mike 1',
            content: <h4> content tab 1</h4>
        },
        {
            label: 'Mike 2',
            content: <h2> content tab 2</h2>
        },
        {
            label: 'Mike 3',
            content: <RandomComponent/>
        }
    ]

    function handleChang(currentTabIndex){ // only prints the clicked tab index to console
        console.log(currentTabIndex)
    }


    return <Tabss tabsContent={tabs}  onChange={handleChang}/>
}