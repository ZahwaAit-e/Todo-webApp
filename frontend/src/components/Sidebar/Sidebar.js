import "./sidebar.css";
import React from "react";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      
      
      </div>
    </div>
  );
}