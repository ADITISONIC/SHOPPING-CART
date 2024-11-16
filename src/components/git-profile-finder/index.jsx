import { useEffect, useState } from "react";
function User({ user }) {
  return (
    <div className="user-data">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} width={100} />
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
}

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("ADITISONIC");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true); // Set loading to true when fetch starts
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data); // Update userData state
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
      setUserData(null); // Clear user data if fetch fails
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  }

  function handleSubmit() {
    fetchGithubUserData(); // Fetch user data on search
  }

  useEffect(() => {
    fetchGithubUserData(); // Fetch data on initial render
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait...</h1>;
  }

  return (
    <div className="github-profile">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search GitHub Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : <p>User not found!</p>}
    </div>
  );
}
