import React, { useState } from "react"
import {Modal, ModalContent,ModalBody,ModalOverlay} from "@chakra-ui/react"
import { FaPhotoVideo } from "react-icons/fa";
import "./CreateModal.css";
import { GrEmoji } from "react-icons/gr"
import { GoLocation } from "react-icons/go"

const CreatePostModel = (
  {onClose,isOpen}
) => { 
  const[isDragOver,setISDragOver]=useState(false);
  const [file,setFile]=useState();
  const [caption,setCaption]=useState();

const handleDrop=(event)=>{
  event.preventDefault()
  const droppedFile=event.dataTransfer.file[0];
  if(droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")){
    setFile(droppedFile)
  }
}

  

  const handleDragOver=(event)=>{
    event.preventDefault();
    event.dataTransfer.dropEffect="copy";
    setISDragOver(true);
  }
const handleDragLeave =()=>{
  setISDragOver(false)
}
const handleOnChange=(e)=>{
  const file=e.target.files[0];
  if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
    setFile(file);
  }
  else{
    setFile(null);
    alert("Please Select an image or video")
  }
}

const handleCaptionChange=(e)=>{
  setCaption(e.target.value)
}

  return (
    <div>
      <Modal size={"3xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent >
         <div className="flex justify-between py-1 px-10 items-center">
          <p>Create New Post</p>
          <button className="color-blue" variant={"ghost"} size="sm" >
            Share
          </button>
         </div>
          <hr/>
          <ModalBody>
            <div className="h-[90vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                { !file && <div onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className="drag-drop h-full">
                  <div>
                    <FaPhotoVideo className="text-3xl"/>
                    <p>Drag Photos and Videos here</p>
                  </div>
                  <label htmlFor="file-upload" className="custom-file-upload">select From Computer</label>
                  <input className="fileInput" type="file" id="file-upload" accept="image/*,video*" onChange={handleOnChange} />
                </div>}
                { file && <img className="max-h-full" src={URL.createObjectURL(file)} alt="" />}
               
               
              </div>

              <div className="w-[1px] border h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                <img className="w-7 h-7 rounded-full" src="https://cdn.pixabay.com/photo/2023/06/10/18/14/stairs-8054618_640.jpg" alt="" />
                <p className="font-semibold ml-4 ">username</p>
                </div>
                <div className="px-2">
                  <textarea placeholder="Write a Caption" className="captionInput" name='caption' rows="8" onChange={handleCaptionChange}></textarea>
                </div>
                <div className="flex justify-between px-2">
                  <GrEmoji/>
                  <p>{caption?.length}/2,200</p>
                </div>
                <hr/>
                <div className="p-2  flex justify-between items-center">
                  <input className="locationInput" type="text " placeholder="location" name="location" />
                   <GoLocation/>

                </div>
                <hr/>
                 
              </div>

            </div>
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
};

export default CreatePostModel;