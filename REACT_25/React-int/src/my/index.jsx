import { useEffect, useState } from "react"


export default function MandomColor(){
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function colorUtility(length){
        return Math.floor(Math.random()*length)
    }


    function randomHex(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'

        for (let i=0; i<6; i++){
            hexColor += hex[colorUtility(hex.length)]
        }
        setColor(hexColor)
    }


    function randomRgb(){
        const r = colorUtility(256)
        const g = colorUtility(256)
        const b = colorUtility(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') randomRgb();
        else randomHex()
    }, [typeOfColor])

    return <div style={{
        width: '100vw',
        height: '100vw',
        background: color,
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Generate HEX color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Generate RGB color</button>
        <button onClick={typeOfColor === 'hex' ? randomHex : randomRgb}>random color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '50px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'}</h3>
            <h1>{color}</h1>

        </div>
    </div>
}