import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
    const [iscommentLike,setIsCommentLike]=useState();
    const handleLikeComment=()=>{
        setIsCommentLike(!iscommentLike)
    }
  return (
    <div>
      <div className="flex items-center justify-between py-5">
         <div className="flex items-center">
            <div>
            <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/12/18/camera-1869430_640.jpg" alt="" />
               
            </div>
            <div className="ml-3">
                <p>
                   <span className="font-semibold">username</span>
                   <span className="ml-2">Nice post</span>
                </p>
                <div className="flex items-center space-x-3 text-xs pt-2 opacity-60 ">
                    <span>1 min ago</span>
                    <span>22 likes</span>
                </div>
            </div>

         </div>
         {iscommentLike?  (<AiFillHeart onClick={handleLikeComment} className="text-xs hover:opacity-50 cursor-pointer text-red-600 "/>) :
          <AiOutlineHeart onClick={handleLikeComment} className="text-xs hover:opacity-50 cursor-pointer " />}

         
      </div>
    </div>
  )
};

export default CommentCard;
