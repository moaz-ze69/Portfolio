import Image from "next/image";
import React from "react";
import { logoWhite } from "../utils/assets";
import { developerInfo } from "../utils/constant";


export default function Footer() {
  return (
    <div className="bg-gray-900 border-t flex flex-col md:flex-row p-5 gap-5 md:justify-evenly items-center">
      <div className="flex items-center gap-2">
        <Image src={logoWhite} alt="logo" />
        <h5 className="font-bold text-lg text-gray-50">{developerInfo.name}</h5>
      </div>
      <p className="text-gray-50">Developed By @{developerInfo.name}</p>
    </div>
  );
}
