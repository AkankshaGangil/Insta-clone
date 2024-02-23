import React from "react";
import { Modal,  ModalOverlay,  ModalContent,  ModalBody} from '@chakra-ui/react'
import "./CommentModel.css"
import CommentCard from "./CommentCard";
import {BsBookmark, BsBookmarkFill, BsThreeDots,BsEmojiSmile} from  'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa"; 


const CommentModal = ({isOpen,onClose,isSaved,isPostLiked,handlePostLike,handleSavePost}) => {
  return (
    <div>
       
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody >
               <div className="flex h-[80vh]  ">
                 <div className="w-[45%] flex flex-col justify-center">
                  <img className="max-h-full w-full" src="https://cdn.pixabay.com/photo/2021/03/26/15/40/friendship-6126262_640.jpg" alt="" />
                  </div>    
                  <div className=" w-[55%] pl-10 relative">
                    <div  className="flex justify-between items-center py-5">
                    <div className="flex items-center" >
                      <div>
                        <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/12/18/camera-1869430_640.jpg" alt="" />
                      </div>
                      <div className="ml-2"> 
                       <p>username</p>
                      </div>
                    </div>
                     <BsThreeDots/>
                    </div> 
                    <hr/>
                    <div className="comment">
                      {[1,1,1,1,1,1,1].map(()=><CommentCard/>)}
                    </div>

                   <div className="absolute w-[90%] bottom-0 ">
                   <div className="flex justify-between items-center w-full py-4">
                <div className="flex items-center space-x-2">

                    {isPostLiked ?
                     (<AiFillHeart  className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike}/>):                    
                    (<AiOutlineHeart className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>) } 

                    <FaRegComment className="text-xl hover:opacity-50 cursor-pointer"/>
                    <RiSendPlaneLine  className="text-xl hover:opacity-50 cursor-pointer" />
                </div>
                <div className="cursor-pointer  "> 
                    {isSaved ? 
                    (<BsBookmarkFill  className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost}/>): 
                     (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost}/>)}
                </div>
            </div>
            <div className="w-full py-2 ">
                <p>10 likes</p>
                <p className="opacity-50 text-sm ">1 day ago</p>
            </div>
            <div className="border border-t w-full flex items-center">
                
                    <BsEmojiSmile/>
                    <input className="commentInput " type="text" placeholder="Add a comment..." />
                
            </div>

                   </div>
                    </div>
                               
                </div>            
          </ModalBody>
         
          
        </ModalContent>
      </Modal> 
    </div>
  )
};

export default CommentModal;
