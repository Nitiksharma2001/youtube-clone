import React from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <MenuSharpIcon />
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="header-input">
        <input type="text" placeholder="Search..."/>
        <SearchIcon className="header-input-search"/>
      </div>
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar alt="Nitik Sharma" src="/image.jpg" />
      </div>
    </div>
  );
};

export default Header;
