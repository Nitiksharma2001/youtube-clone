import React from "react";
import Avatar from "@mui/material/Avatar";
import "./MainRight.css";
const MainRight = () => {
  return (
    <div className="main-right">
      <div className="video">
        <img
          src="https://i.ytimg.com/vi/mbaCTDHEAho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsw5tdBQQzqB6deptfYIgo5h4wqQ"
          alt="not available"
        />
        <div className="video-all">
          <Avatar />
          <div className="video-details">
            <h4>Adin Ross Reacts To FUNNIEST Andrew Tate Clips</h4>
            <h5>Braso</h5>
            <h5>8.7K views</h5>
          </div>
        </div>
      </div>
      
      <div className="video">
        <img
          src="https://i.ytimg.com/vi/mbaCTDHEAho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsw5tdBQQzqB6deptfYIgo5h4wqQ"
          alt="not available"
        />
        <div className="video-all">
          <Avatar />
          <div className="video-details">
            <h4>Adin Ross Reacts To FUNNIEST Andrew Tate Clips</h4>
            <h5>Braso</h5>
            <h5>8.7K views</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
