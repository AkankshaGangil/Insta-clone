import styled from "@emotion/styled";
import React, { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar";

const StoryViewrContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background-color:black;

`
const StoryImage=styled.img`
max-height-90vh;
object-fit:contain;
`

const StoryViewr = ({stories}) => {
    const [ currentStoryIndex,setCurrentStoryIndex]=useState(0);
    const[activeIndex,setActiveIndex]=useState(0);

    const handleNextStory=()=>{
        if(currentStoryIndex<stories.length-1){
            setCurrentStoryIndex(currentStoryIndex+1);
            setActiveIndex(activeIndex+1);
        }
        else if(currentStoryIndex===stories.length-1){
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        } 
        }
    useEffect(()=>{
        const interval=setInterval(()=>{handleNextStory()},2000)
        return()=>clearInterval(interval);
    } ,[currentStoryIndex])

    
  return (
   
        <div className="relative w-full">
           <StoryViewrContainer>
            <StoryImage  src={stories?.[currentStoryIndex].image} />
            
<div className="absolute w-full flex top-0">
    {stories.map((item,index)=><ProgressBar duration={2000} index={index} activeIndex={activeIndex} key={index}/>)}
</div>

           </StoryViewrContainer>
        </div>
   
  )
};

export default StoryViewr;
  