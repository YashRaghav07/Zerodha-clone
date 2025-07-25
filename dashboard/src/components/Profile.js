import React from "react";


function Profile({email,user,click}) {
  return (
    <>
      <div id="myDialog" draggable="true">
        <i class="fa-solid fa-x" style={{marginLeft:"140px"}} onClick={click}></i>
        <div style={{textAlign:"center"}}>
            <img src="profile.jpg" alt="profile" style={{width:"40px",height:"40px",borderRadius:"50%"}}/><br/>
            <p className="username">{email}</p>
            <p>Purse:₹XXXXXX</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
