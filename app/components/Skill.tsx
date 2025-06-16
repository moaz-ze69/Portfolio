import React from "react";
import { skills } from "../utils/constant";

export default function Skill() {
  return (
    <div id="Skills" className="">
      <p className="text-3xl text-center"> My <span className="font-extrabold">Skill</span></p>
       <div className="flex flex-wrap gap-5 my-10 lg:justify-start  justify-center">
       {skills.map((item,index)=><div className="border-2 border-gray-900 w-36 h-36 flex flex-col justify-center items-center rounded-md gap-5 text-xl cursor-pointer hover:bg-gray-900 hover:text-gray-50" key={index}><item.icon /> <p>{item.name}</p> </div>)}
       </div>
    </div>
  );
}
