

export default function User({user}){
    const {avatar_url,
        created_at,
        login, 
        name,
        updated_at
    } = user;

const date = new Date(updated_at)
    return(
        <div>
            <img src={avatar_url}/>
            <p>{name || login}</p>
            <p>{`${date.getDate()} ${date.toLocaleDateString('en-us', {month:'short'})} ${date.getFullYear()}`}</p>
        </div>
    )
}