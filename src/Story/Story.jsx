import React from "react"
import StoryViewr from "../components/StoryComponents/StoryViewr";

const Story = () => {

const story=[
    {
        image:"https://images.pexels.com/photos/19537201/pexels-photo-19537201/free-photo-of-ornamented-interior-of-klementinum-in-prague.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        image:"https://images.pexels.com/photos/18081015/pexels-photo-18081015/free-photo-of-girl-in-white-dress-walking-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        image:"https://images.pexels.com/photos/19710600/pexels-photo-19710600/free-photo-of-hands-holding-a-camera-against-a-white-curtain.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },{
        image:"https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        image:"https://images.pexels.com/photos/13280779/pexels-photo-13280779.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }
]

  return (
    <div>
      <StoryViewr stories={story}/>
    </div>
  )
};

export default Story;
