

export default function MyUser({user}){
    const {avatar_url, created_at, followers, following, public_repos, url, name, login} = user

    const createDate = new Date(created_at)

    return (
        <div className="user">
            <div >
                <img src={avatar_url} className="avatar" alt='User' />
            </div>
            <div className="name-container">
                <a src={`https://api.github.com/${login}`}> {name || login}</a>
                <p>User joined on {createDate.getDate()} {createDate.toLocaleString('en-us', {month: 'short'})} {createDate.getFullYear()}</p>
            </div>
            <div className="profile-info">
                <div>
                    <p>Pub repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}