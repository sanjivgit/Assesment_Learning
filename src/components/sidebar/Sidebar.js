import React, { useState } from "react";
import "./sidebar.css";
import { menu } from "../../menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [openOnHover, setOpenOnHover] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`Sidebar_Container ${
        open ? "Sidebar_Effect" : openOnHover && "Sidebar_Hover"
      } `}
      onMouseOver={() => setOpenOnHover(true)}
      onMouseLeave={() => setOpenOnHover(false)}
    >
      {openOnHover && (
        <ChevronRightIcon
          onClick={toggle}
          className={`Toggle_Icon ${open && "Toggle_Transition"}`}
        />
      )}
      <div className={`p-2 ${openOnHover && "Sidebar_Wrap"}`}>
        <div className="Sidebar_Header">
          <img src="images/BreatheLogo.jpg" alt="" />
          {open || openOnHover ? <span>Breathe4</span> : ""}
        </div>
        {menu.map((item) => (
          <div className="Sidebar_Menu">
            <img className="pl-1" src={`images/${item.icon}`} alt="" />
            {open || openOnHover ? <span>{item.title}</span> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
