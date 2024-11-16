import './styles.css'
export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    created_at,
    login,
    name,
  } = user;

  // Ensure created_at is parsed properly
  const createDate = created_at ? new Date(created_at) : null;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name || login}
        </a>
        {createDate && (
          <p>
            User joined on{" "}
            {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
              month: "short",
            })} ${createDate.getFullYear()}`}
          </p>
        )}
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repositories: {public_repos}</p>
      </div>
    </div>
  );
}
