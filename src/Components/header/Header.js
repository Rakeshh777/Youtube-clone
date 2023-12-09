import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };
  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="assets/youtube-logo-png.png"
        alt="YoutubeLogo"
        className="header_logo"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28}></MdApps>
        <img
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
