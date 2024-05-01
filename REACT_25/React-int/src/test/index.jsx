import UseLS from './localStorage'


export default function Appp() {

    const [theme, setTheme] = UseLS('theme', 'dark')

    function changeClolr(){
        setTheme(theme === 'light' ? 'dark': 'light')
    }


    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className='container'>
                <p>mike</p>
            <button onClick={changeClolr}>Change</button>
            </div>
            
        </div>
    )
}
