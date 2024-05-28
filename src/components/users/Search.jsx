import React, { useEffect, useState } from "react";
import Users from "./Users";
import { getUsers } from "../../api";
import { useHistory, useLocation } from "react-router-dom";
const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const query = useLocation();

  useEffect(() => {
    setText(query.search.split("=")[1]);
    const fetchUser = async () => {
      const userData = await getUsers(query.search.split("=")[1]);
      setUsers(userData);
    };
    fetchUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      history.push(`/?search=${text}`);
      setUsers(await getUsers(text));
    }
  };
  const clearUsers = () => {
    setUsers([]);
    setText("");
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
