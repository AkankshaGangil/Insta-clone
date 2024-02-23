import React from "react"
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div className="">
       <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/09/05/23/00/butterfly-8235958_640.jpg" alt="" />
            </div>
            <div className="ml-3">
              <p>Full</p>
              <p className="opacity-70">user</p>
            </div>
          </div>  
          <div><p className="text-blue-700 semibold">Switch</p></div>        
        </div>
        <div className="space-y-5 mt-10">
          <SuggestionCard/>
            {/* {[1,1,1,1].map((item)=><SuggestionCard/>)} */}
          </div>
       </div>
    </div>
  )
};

export default HomeRight;
