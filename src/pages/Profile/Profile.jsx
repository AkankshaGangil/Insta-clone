import React from "react";
import ProfileuserDetails from "../../components/ProfileComponents/ProfileuserDetails";
import ReqUserPostPart from "../../components/ProfileComponents/ReqUserPostPart";

const Profile = () => {
  return (
    <div>
      <div className="px-20">
        <ProfileuserDetails/>
      </div>
      <div>
       <ReqUserPostPart/>
      </div>
    </div>
  )
}

export default Profile
