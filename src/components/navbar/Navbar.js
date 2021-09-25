import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NotificationsNone, Settings, Language } from "@material-ui/icons";

const Navbar = () => {
  const [settingtoggle, setsettingtoggle] = useState(false);
  const [notiftoggle, setnotiftoggle] = useState(false);
  const [langtoggle, setlangtoggle] = useState(false);
  const [scroll, setScroll] = useState(0)
  const [logo, setlogo] = useState('logo')
  const togglesetting = () => {
    setsettingtoggle(!settingtoggle);
    setnotiftoggle(false);
    setlangtoggle(false);
  };
  const togglenotif = () => {
    setnotiftoggle(!notiftoggle);
    setlangtoggle(false);
    setsettingtoggle(false);
  };
  const togglelang = () => {
    setlangtoggle(!langtoggle);
    setnotiftoggle(false);
    setsettingtoggle(false);
  };

  const Settingtip = () => {
    return (
      <div className="setting">
        <div className="setting-wrapper">
          <div className="setting-item">change password</div>
          <div className="setting-item">change username</div>
          <div className="setting-item">change email</div>
        </div>
      </div>
    );
  };
  const Notiftip = () => {
    return (
      <div className="notif">
        <span> you have 2 messages</span>
        <div className="nofit-wrapper">
          <div>Message 1</div>
          <div>Message 2</div>
        </div>
      </div>
    );
  };
  const Langtip = () => {
    return (
      <div className="lang">
        <span>change language</span>
        <div className="lang-wrapper">
          <div>Espanish</div>
          <div>Italy</div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 50
      if (scrollCheck) {
        setlogo('logo active')
      }
      else{
        setlogo('logo')
      }
    })
  })
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="topleft">
          <span className={logo}>Admin</span>
        </div>

        <div className="topright">
          <div className="navbar-icons-container" onClick={togglenotif}>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="navbar-icons-container" onClick={togglelang}>
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbar-icons-container" onClick={togglesetting}>
            <Settings />
          </div>
          <img
            src="https://i.pravatar.cc/295"
            alt="Avatar"
            className="Avatar"
          />
        </div>
      </div>
      {settingtoggle ? <Settingtip /> : null}
      {notiftoggle ? <Notiftip /> : null}
      {langtoggle ? <Langtip /> : null}
    </div>
  );
};

export default Navbar;
