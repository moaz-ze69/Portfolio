"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "../utils/assets";
import { MdOutlineFileDownload, MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { developerInfo, navButtons } from "../utils/constant";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleDownload = () => {
    // Create an anchor element
    const anchor = document.createElement("a");
    // Set the href attribute to the path of your PDF file
    anchor.href = "../../moaz-ahmed.pdf";
    // Set the download attribute to force download
    anchor.download = "moaz-ahmed.pdf";
    // Programmatically trigger a click event to download the file
    anchor.click();
  };
  const scrollToTop = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-around lg:justify-evenly text-gray-900 py-2 md:py-5 border-b ">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <h5 className="font-bold text-lg">{developerInfo.name}</h5>
      </div>
      <div className="hidden lg:block">
        {navButtons.map((item, index) => (
          <button
            onClick={()=>{scrollToTop(item.name)}}
            className="mx-3 font-semibold hover:text-gray-500"
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="hidden lg:block">
        <button onClick={handleDownload} className="flex items-center gap-2 bg-gray-900 text-gray-100 py-2 px-3 rounded-sm hover:bg-gray-50 hover:text-gray-900 border-2 border-gray-900  ">
          Resume <MdOutlineFileDownload size={20} />
        </button>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu size={20} />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 mt-14 flex items-start  justify-center bg-gray-50 bg-opacity-900 z-50">
          <div className="bg-white border shadow-xl p-4 m-2 rounded-lg w-screen max-w-lg ">
            <div className="flex justify-end">
              <button
                className="p-2 rounded-full bg-gray-900 text-gray-50 "
                onClick={toggleMenu}
              >
                <MdClose />
              </button>
            </div>
            {navButtons.map((item, index) => (
              <button
                className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-sm"
                key={index}
                onClick={toggleMenu}
              >
                {item.name}
              </button>
            ))}
            <button
              className="w-full flex gap-2 justify-center py-2 px-4 mt-2 bg-gray-900 text-gray-100 rounded-lg hover:bg-gray-800"
              onClick={()=>{
                toggleMenu()
                handleDownload()
              }}
            >
              Resume <MdOutlineFileDownload size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
