import { Link } from "react-router-dom";


export default function Home(){

    return (<div>Home

        <ul>
            <li>hello</li>
            <Link to={'/fav'}>mike</Link>
        </ul>
    </div>)
}