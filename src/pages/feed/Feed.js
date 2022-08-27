import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./feed.css";

function Feed() {
  return (
    <div className="Assesment">
      <Sidebar />
      <div className="Assesment_Wrap">
        <Header />
        <div className="Assesment_Feed">Feed</div>
      </div>
    </div>
  );
}

export default Feed;
