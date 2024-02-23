import React from "react"

const SuggestionCard = () => {
  return (

    <div>
    <div className="flex justify-between items-center">
      <div className="flex item-center">
        <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/24/13/41/woman-8467095_640.png" alt="" />
        <div>
            <p className="text-sm font-semibold">ak123</p>
            <p className="text-sm font-semibold opacity-70">Follows You</p>
        </div>
      </div>
     <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex item-center">
        <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_640.jpg" alt="" />
        <div>
            <p className="text-sm font-semibold">jack445</p>
            <p className="text-sm font-semibold opacity-70">Follows You</p>
        </div>
      </div>
     <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex item-center">
        <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_640.jpg" alt="" />
        <div>
            <p className="text-sm font-semibold">Nia_21</p>
            <p className="text-sm font-semibold opacity-70">Follows You</p>
        </div>
      </div>
     <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex item-center">
        <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2020/02/01/03/00/girl-4809433_640.jpg" alt="" />
        <div>
            <p className="text-sm font-semibold">Sofia345</p>
            <p className="text-sm font-semibold opacity-70">Follows You</p>
        </div>
      </div>
     <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>

    </div>
  )
};

export default SuggestionCard;
