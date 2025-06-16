import React from "react";
import { experience } from "../utils/constant";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="Experience" className="bg-gray-900 text-gray-50 -mx-5 md:-mx-10 md:p-10 p-5">
      <p className="text-3xl text-center">
        {" "}
        My <span className="font-extrabold">Experience</span>
      </p>
      <div>
        {experience.map((item, index) => (
          <div className="mt-5 mx-5 lg:mt-10 lg:mx-10 border-2 p-5 lg:p-10 rounded-lg hover:bg-gray-950 cursor-pointer" key={index}>
            <div className="lg:flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div>
                  <Image alt="company" src={item.image} width={25} height={30} />
                </div>
                <p className="font-semibold">{item.companyName}</p>
              </div>
              <p className="text-sm">{item.tenure}</p>
            </div>
            <p className="text-xs lg:ml-11">{item.position}</p>
            <p className="mt-5">{item.learning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
