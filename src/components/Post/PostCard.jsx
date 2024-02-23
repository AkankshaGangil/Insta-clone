import React, { useState } from "react"
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css"
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
    const [ShowDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose} = useDisclosure();
    const handleClick = () => {
        setShowDropDown(!ShowDropDown);
    };
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    };
    const handleSavePost = () => {
        setIsSaved(!isSaved);
    };

    const handleOpenCommentModel = () => {
        onOpen()
    }
    return (
        <div>
        <div >
            <div className="border rounded-md w-full">
                <div className="flex justify-between itgems-center w-full py-4 px-5">
                    <div className="flex item-center">
                        <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/12/19/08/moutains-8445767_640.jpg" alt="" />
                        <div className="pl-2">
                            <p className="font-semibold text-sm">John</p>
                            <p className="font-thin text-sm">America</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <BsThreeDots className="dots" onClick={handleClick} />
                        <div className="dropdown-content">
                            {ShowDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img className="w-full" src="https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_640.jpg" alt="" />
                </div>

               

                <div className="flex justify-between items-center w-full px-5 py-4">
                    <div className="flex items-center space-x-2">
                        {isPostLiked ? (<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} />) :
                            (<AiOutlineHeart  className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />)}

                        <FaRegComment onClick={handleOpenCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
                        <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer  ">
                        {isSaved ? (<BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />) :
                            (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />)}
                    </div>
                </div>


                <div className="w-full py-2 px-5">
                    <p>10 likes</p>
                    <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
                </div>
                <div className="border border-t w-full">
                    <div className="flex w-full items-center px-5" >
                        <BsEmojiSmile />
                        <input className="commentInput" type="text" placeholder="Add a comment..." />
                    </div>
                </div>
            </div>

            <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />

            

        </div>



 <div >
<div className="border rounded-md w-full">
    <div className="flex justify-between itgems-center w-full py-4 px-5">
        <div className="flex item-center">
            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg" alt="" />
            <div className="pl-2">
                <p className="font-semibold text-sm">Tasku</p>
                <p className="font-thin text-sm">France</p>
            </div>
        </div>
        <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
                {ShowDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
            </div>
        </div>
    </div>
    <div className="w-full">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2024/01/18/12/54/flowers-8516916_640.jpg" alt="" />
    </div>

   

    <div className="flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center space-x-2">
            {isPostLiked ? (<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} />) :
                (<AiOutlineHeart  className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />)}

            <FaRegComment onClick={handleOpenCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
        <div className="cursor-pointer  ">
            {isSaved ? (<BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />) :
                (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />)}
        </div>
    </div>


    <div className="w-full py-2 px-5">
        <p>10 likes</p>
        <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
    </div>
    <div className="border border-t w-full">
        <div className="flex w-full items-center px-5" >
            <BsEmojiSmile />
            <input className="commentInput" type="text" placeholder="Add a comment..." />
        </div>
    </div>
</div>

<CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />



</div>


<div >
<div className="border rounded-md w-full">
    <div className="flex justify-between itgems-center w-full py-4 px-5">
        <div className="flex item-center">
            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/07/31/13/42/anime-art-8161031_640.png" alt="" />
            <div className="pl-2">
                <p className="font-semibold text-sm">Mayra</p>
                <p className="font-thin text-sm">India</p>
            </div>
        </div>
        <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
                {ShowDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
            </div>
        </div>
    </div>
    <div className="w-full">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2023/12/14/20/17/trail-8449604_640.jpg" alt="" />
    </div>

   

    <div className="flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center space-x-2">
            {isPostLiked ? (<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} />) :
                (<AiOutlineHeart  className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />)}

            <FaRegComment onClick={handleOpenCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
        <div className="cursor-pointer  ">
            {isSaved ? (<BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />) :
                (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />)}
        </div>
    </div>


    <div className="w-full py-2 px-5">
        <p>10 likes</p>
        <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
    </div>
    <div className="border border-t w-full">
        <div className="flex w-full items-center px-5" >
            <BsEmojiSmile />
            <input className="commentInput" type="text" placeholder="Add a comment..." />
        </div>
    </div>
</div>

<CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />



</div>


<div >
<div className="border rounded-md w-full">
    <div className="flex justify-between itgems-center w-full py-4 px-5">
        <div className="flex item-center">
            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg" alt="" />
            <div className="pl-2">
                <p className="font-semibold text-sm">Maria</p>
                <p className="font-thin text-sm">Canada</p>
            </div>
        </div>
        <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
                {ShowDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
            </div>
        </div>
    </div>
    <div className="w-full">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2023/04/24/16/53/young-woman-7948563_640.jpg" alt="" />
    </div>

   

    <div className="flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center space-x-2">
            {isPostLiked ? (<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} />) :
                (<AiOutlineHeart  className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />)}

            <FaRegComment onClick={handleOpenCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
        <div className="cursor-pointer  ">
            {isSaved ? (<BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />) :
                (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />)}
        </div>
    </div>


    <div className="w-full py-2 px-5">
        <p>10 likes</p>
        <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
    </div>
    <div className="border border-t w-full">
        <div className="flex w-full items-center px-5" >
            <BsEmojiSmile />
            <input className="commentInput" type="text" placeholder="Add a comment..." />
        </div>
    </div>
</div>

<CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />



</div>


<div >
<div className="border rounded-md w-full">
    <div className="flex justify-between itgems-center w-full py-4 px-5">
        <div className="flex item-center">
            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/05/10/05/56/groom-7983097_640.jpg" alt="" />
            <div className="pl-2">
                <p className="font-semibold text-sm">Jack</p>
                <p className="font-thin text-sm">USA</p>
            </div>
        </div>
        <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
                {ShowDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
            </div>
        </div>
    </div>
    <div className="w-full">
        <img className="w-full" src="https://cdn.pixabay.com/photo/2023/09/29/07/50/rocks-8283171_1280.jpg" alt="" />
    </div>

   

    <div className="flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center space-x-2">
            {isPostLiked ? (<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} />) :
                (<AiOutlineHeart  className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />)}

            <FaRegComment onClick={handleOpenCommentModel} className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
        <div className="cursor-pointer  ">
            {isSaved ? (<BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />) :
                (<BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handleSavePost} />)}
        </div>
    </div>


    <div className="w-full py-2 px-5">
        <p>10 likes</p>
        <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
    </div>
    <div className="border border-t w-full">
        <div className="flex w-full items-center px-5" >
            <BsEmojiSmile />
            <input className="commentInput" type="text" placeholder="Add a comment..." />
        </div>
    </div>
</div>

<CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />



</div>
</div>
    );
};

export default PostCard;
