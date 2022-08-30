import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { menu } from "../../menu";

function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg" className="Navbar_Container">
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
                  {menu.map((item) => (
                    <div className="Sidebar_Menu">
                      <img src={`images/${item.icon}`} alt="" />
                      <span>{item.title}</span>
                    </div>
                  ))}
                  <div className="Offcanvas_Profile">
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
