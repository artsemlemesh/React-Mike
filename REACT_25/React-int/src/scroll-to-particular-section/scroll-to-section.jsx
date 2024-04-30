import { useRef } from "react"


export default function ScrollToSection(){

    const ref = useRef();

    const data = [
        {
            label: 'first card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            }
        },
        {
            label: 'second card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue',
            }
        },
        {
            label: 'third card',
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow',
            }
        },
        {
            label: 'fourth card',
            style: {
                width: '100%',
                height: '600px',
                background: 'grey',
            }
        },
        {
            label: 'fifth card',
            style: {
                width: '100%',
                height: '600px',
                background: 'pink',
            }
        },
    ]

    function scrollToSection(){
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }



    

    return <div>
        <h1>scroll to a partic sections</h1>

        <button onClick={scrollToSection}>click to scroll</button>
        {
            data.map((item, index) => <div ref={index === 2 ? ref : null} style={item.style}>
                <h3>{item.label}</h3>
            </div>)
        }

    </div>
}