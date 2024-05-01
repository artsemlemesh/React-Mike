import useLocalStorage from "./useLocalStorage"
import './theme.css'

export default function LightDarkMode(){

    //here we are using custom hook. 'theme'- key under which the theme val will be stored in local storage, 'dark'-default value
    const [theme, setTheme] = useLocalStorage('theme', 'dark')


    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)

    return (<div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p> Mike</p>
            <button onClick={handleToggleTheme}>Change theme </button>
        </div>
    </div>)
}