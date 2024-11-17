import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users.filter(
        (item) => item.toLowerCase().indexOf(query) > -1
      );
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  }

  function handleClick(selectedItem) {
    // Set the selected item in the input field
    setSearchParam(selectedItem);

    // Hide the dropdown
    setShowDropdown(false);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && Array.isArray(data.users) && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete">
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here..."
        value={searchParam}
        onChange={handleChange}
      />
      {loading && <p>Loading...</p>}
      {error && (
        <p>Error fetching users: {error.message || "Something went wrong"}</p>
      )}
      {showDropdown && filteredUsers.length > 0 && (
        <Suggestions data={filteredUsers} onClick={handleClick} />
      )}
    </div>
  );
}
