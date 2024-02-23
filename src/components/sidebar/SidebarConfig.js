import { AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import {RiVideoFill, RiVideoLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import { FaRegCompass } from "react-icons/fa"

export const mainu=[
    {title:"Home",icon:<AiOutlineHome className="text-2xl mr-5">  </AiOutlineHome>, activeIcone:<AiFillHome className="text-2xl mr-5"></AiFillHome>},
    {
        title:"Search",icon:<AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,activeIcone:<AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>
    },
    {
        title:"Explore",icon:<FaRegCompass className="text-2xl mr-5"> </FaRegCompass>, activeIcone:<AiFillCompass className="text-2xl mr-5"></AiFillCompass> 
    },
    {
        title:"Reels",icon:<RiVideoLine className="text-2xl mr-5"></RiVideoLine>,activeIcone:<RiVideoFill className="text-2xl mr-5"></RiVideoFill>
    },
    {
        title:"Message", icon:<AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>, activeIcone:<AiFillMessage className="text-2xl mr-5"></AiFillMessage>
    },
    {
        title:"Notification", icon:<AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>, activeIcone:<AiFillHeart className="text-2xl mr-5"></AiFillHeart>
    },
    {
        title:"Create",icon:<AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>, activeIcone:<AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>
    },
    {
        title:"Profile", icon:<CgProfile className="text-2xl mr-5"></CgProfile>,activeIcone:<CgProfile className="text-2xl mr-5"></CgProfile>
    }


]