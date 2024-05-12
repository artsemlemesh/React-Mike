

const User = ({data}) => {
    const {
        login,
        created_at,
        followers,
        id,
        avatar_url
    } =data

    const currTime = new Date(created_at)



    return (
        <div>
            <img src={avatar_url}/>

            <div>
                was created: 
                {`${currTime.getDate()} ${currTime.toLocaleDateString('en-us', {month: 'short'})} ${currTime.getFullYear()}`}
                
            </div>

            <div>
                <p>followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>id</p>
                <p>{id}</p>
            </div>

        </div>
    )
};

export default User;
