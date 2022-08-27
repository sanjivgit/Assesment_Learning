import React, { useState } from "react";
import "./sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [handleShow, setHandleShow] = useState("");

  return (
    <div className="Sidebar_Container">
      <div className="Sidebar_Wrap" onMouseOver={() => setHandleShow(true)}>
        <img className="Sidebar_Logo" src="/images/BreatheLogo.jpg" alt="" />
        <img className="Sidebar_Icons" src="/images/DCM.svg" alt="" />
        <img className="Sidebar_Icons" src="/images/assessment.svg" alt="" />
        <img
          className="Sidebar_Icons"
          src="/images/Content_Management.svg"
          alt=""
        />
        <img className="Sidebar_Icons" src="/images/Homework.svg" alt="" />
        <img className="Sidebar_Icons" src="/images/Student_Board.svg" alt="" />
        <img className="Sidebar_Icons" src="/images/Engagement.svg" alt="" />
        <img className="Sidebar_Icons" src="/images/Global_Chat.svg" alt="" />
        <img className="Sidebar_Icons" src="/images/Blogs.svg" alt="" />
      </div>
      <Offcanvas
        className="Offcanvas_Sidebar"
        show={handleShow}
        onMouseLeave={() => setHandleShow(false)}
      >
        <Offcanvas.Header>
          <img
            style={{ width: "72px", height: "72px" }}
            src="/images/BreatheLogo.jpg"
            alt=""
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="Offcanvas_Menue">
            <img src="/images/DCM.svg" alt="" />
            <span>Digital Class Management</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Assessment.svg" alt="" />
            <span>Assesment</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Content_Management.svg" alt="" />
            <span>Content Management</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Homework.svg" alt="" />
            <span>Homework Management</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Student_Board.svg" alt="" />
            <span>Student Board</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Engagement.svg" alt="" />
            <span>Engagement</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Global_Chat.svg" alt="" />
            <span>Chat</span>
          </div>
          <div className="Offcanvas_Menue">
            <img src="/images/Blogs.svg" alt="" />
            <span>Blogs</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
