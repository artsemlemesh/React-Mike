


export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    publick_repos,
    name,
    login,
    created_at,
  } = user; //destructuring, bcz user contains all these props

  const createdDate = new Date(created_at); //creates a new Date object

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a> {/* returns either name or login */}
        
        <p>
          User joined on{" "} {/* adds an empty space after on */}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div >
          <p>Publick Repos</p>
          <p>{publick_repos}</p>
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
  );
}
