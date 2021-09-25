import React from "react";
import "./newuser.css";

export default function Newuser() {
  return (
    <div className="new-user">
      <h1>New User</h1>
      <form>
        <div className="new-user-item">
          <label>Username :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Full Name :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Email :</label>
          <input type="email" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Password :</label>
          <input type="password" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Address :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Phone :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Gender :</label>
          <div className='gender-item'>
            <input type="radio" value="male" id="male" name="gender" />
            <label for="male">Male</label>

            <input type="radio" value="female" id="female" name="gender" />
            <label for="female">Female</label>

            <input type="radio" value="other" id="other" name="gender" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Duration Of Activity :</label>
          <select name='Activity' id="Activity">
              <option value='-1'>less than 1year</option>
              <option value='1/2'>beeten 1 and 2 years</option>
              <option value='2/3'>beeten 2 and 3 years</option>
              <option value='+3'>more than 3 years</option>
          </select>
        </div>
        <button className='submit-user'>Create</button>
      </form>
    </div>
  );
}
