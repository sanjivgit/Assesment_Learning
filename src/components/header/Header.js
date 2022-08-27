import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container className="m-2" fluid>
          <img className="Logo" src="/images/BreatheLogo.jpg" alt="" />
          <span className="Assesment_Tag">Assesment</span>
          <div className="Right_Bar">
            <Badge className="Badge" color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
            <Avatar
              className="Avatar_Icon"
              alt="XploreSense"
              src="images/7.jpeg"
            />
            <div className="Toggler_Wrap">
              <Navbar.Toggle
                className="p-1 Navbar_Toggler"
                aria-controls={`offcanvasNavbar-expand-md`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Menue
                  </Offcanvas.Title>
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
                  <div className="Offcanvas_Profile Offcanvas_Menue">
                    <Avatar alt="XploreSense" src="images/7.jpeg" />
                    <span>Profile</span>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
