import { useState } from "react";
import "./chaList.css";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img className="searchImage" src="./search.png" alt="" />
          <input className="search__input" type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default ChatList;
