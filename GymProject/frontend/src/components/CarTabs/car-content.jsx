import Cars from "./Cars"



const CarContent = () => {

    const tabs = [
        {
            image: 'image one',
            content: <h1>content of car 1</h1>
        },
        {
            image: 'image two',
            content: <h1>content of car 2</h1>
        },
        {
            image: 'image three',
            content: <h1>content of car 3</h1>
        },
        {
            image: 'image four',
            content: <h1>content of car 4</h1>
        },
        {
            image: 'image five',
            content: <h1>content of car 5</h1>
        },
    ]

    return (
        <Cars tabs={tabs}/>
    )
}

export default CarContent