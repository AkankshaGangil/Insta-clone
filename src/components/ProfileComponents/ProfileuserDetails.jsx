import React from "react"
import { IoSettingsOutline } from "react-icons/io5";
const ProfileuserDetails = () => {
  return (
    <div className="py-10">
      <div className="flex items-center">
            <div className="w-[15%]">
                <img className="w-32 h-32 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/25/04/45/mountains-8411045_640.jpg" alt="" />
            </div>
            <div className="space-y-5 ">
                <div className="flex space-x-10 items-center">
                    <p>username</p>
                    <button>Edit Profile</button>
                    <IoSettingsOutline />
                   
                </div>
                <div className="flex space-x-10">
                    <div>
                        <span className="font-semibold mr-4">10</span>
                        <span>Posts</span>
                    </div>
                    <div>
                        <span className="font-semibold mr-4">12</span>
                        <span>Followers</span>
                    </div>
                    <div>
                        <span className="font-semibold mr-4">55</span>
                        <span>Following</span>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Full Name</p>
                     <p className="font-thin text-sm">Chasing dreams and rainbows 🌈
Unicorns and adventures enthusiast 🦄
Creating my own sunshine 🌟
Queen of my own story 👑</p>
                 </div>
            </div>
      </div>
    </div>
  )
};

export default ProfileuserDetails
