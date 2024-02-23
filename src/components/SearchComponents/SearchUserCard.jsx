import React from "react"

const SearchUserCard = () => {
  return (
    <div className="py-2 cursor-pointer" >
     <div className="flex items-center "> 
      <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2023/03/29/19/32/man-7886201_640.jpg" alt="" />
        <div className="ml-3">
            <p>Full name</p>
            <p className="opacity-70">username</p>
        </div>
    
     </div>

     <div className="py-2 cursor-pointer" >
     <div className="flex items-center "> 
      <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_640.jpg" alt="" />
        <div className="ml-3">
            <p>Full name</p>
            <p className="opacity-70">username</p>
        </div>
    
     </div>
    </div> 
    </div>
  )
};

export default SearchUserCard;