export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    publick_repos,
    private_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div>
      <div>
        <img src={avatar_url} alt="user" />
      </div>
      <div>
        User joined on{" "}
        {` ${createDate.getDate()} ${createDate.toLocaleString("en-us", {
          month: "short",
        })} ${createDate.getFullYear()} 
                `}
      </div>
      <div>
        <p>publickrepos</p>
        <p>h{publick_repos}</p>
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
  );
}
