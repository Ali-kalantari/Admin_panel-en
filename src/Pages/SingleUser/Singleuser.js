import {
  CalendarToday,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,Publish
} from "@material-ui/icons";
import React from "react";
import "./singleuser.css";
import {Link} from 'react-router-dom'

export default function Singleuser() {
  return (
    <div className="single-user">
      <div className="user-title-container">
        <h1>Edit User</h1>
        <Link to='/newuser'>
        <button>Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show ">
          <div className="user-show-top">
            <img src="https://i.pravatar.cc/169" alt="notung" />
            <div className="user-show-top-title">
              <span>Ali Kalantari</span>
              <span className="usertitle">React Developer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <sapn className="user-show-bottom-title">Account Details</sapn>
            <div className="usershowinfo">
              <PermIdentity id="icon" />
              <sapn className="user-show-bottom-infotitle">Ali_k_15</sapn>
            </div>
            <div className="usershowinfo">
              <CalendarToday id="icon" />
              <sapn className="user-show-bottom-infotitle">6.5.2000</sapn>
            </div>
            {/*  */}
            <sapn className="user-show-bottom-title">Contact Details</sapn>

            {/*  */}
            <div className="usershowinfo">
              <PhoneAndroid id="icon" />
              <sapn className="user-show-bottom-infotitle">+98 9373834352</sapn>
            </div>
            {/*  */}
            <div className="usershowinfo">
              <MailOutline id="icon" />
              <sapn className="user-show-bottom-infotitle">
                Alikalantari7777@gmail.com
              </sapn>
            </div>
            {/*  */}
            <div className="usershowinfo">
              <LocationSearching id="icon" />
              <sapn className="user-show-bottom-infotitle">IRAN | Tehran</sapn>
            </div>
          </div>
        </div>
        <div className="user-update ">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>UserName :</label>
                <input
                  type="text"
                  placeholder="ali_k_15"
                  className="user-update-input"
                />
                <label>Full Name :</label>
                <input
                  type="text"
                  placeholder="Ali Kalantari"
                  className="user-update-input"
                />
                <label>Email :</label>
                <input
                  type="text"
                  placeholder="AliKalantari7777@gmail.com"
                  className="user-update-input"
                />
                <label>Phone :</label>
                <input
                  type="text"
                  placeholder="+98 9373834352"
                  className="user-update-input"
                />
                <label>address :</label>
                <input
                  type="text"
                  placeholder="IRAN | Tehran"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                 src="https://i.pravatar.cc/169"
                 alt="avatar pic" />
                 <label id="publish" htmlFor='file'><Publish /></label>
                 <input type='file' id='file'/>
              </div>
              <button className='user-update-button'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
