import React from "react";
import { developerInfo } from "../utils/constant";
import Image from "next/image";
import { skillFemale, skillMale } from "../utils/assets";

export default function About() {
  return (
    <div id="AboutMe" className="my-5 lg:my-10">
      <p className="text-3xl text-center mb-5">
        {" "}
        About <span className="font-extrabold">Me</span>
      </p>
      <div className="lg:flex gap-5 items-center ">
        <Image src={developerInfo.gender == 'male' ? skillMale : skillFemale} alt="skill male" />
        <p className="lg:w-[50%]  text-lg text-gray-500 leading-relaxed">
          {developerInfo.skills}
        </p>
      </div>
    </div>
  );
}
