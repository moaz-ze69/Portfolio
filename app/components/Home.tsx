import React from "react";
import Image from "next/image";
import { heroFemale, heroMale } from "../utils/assets";
import Link from "next/link";
import { developerInfo, links } from "../utils/constant";

export default function Home() {
  return (
    <div className="lg:h-[85vh] py-10 ">
      <div className="flex lg:flex-row flex-col-reverse gap-5 justify-center items-center">
        <div className="flex flex-col gap-0 lg:gap-10 lg:w-6/12">
          <p className="text-2xl  lg:text-5xl leading-tight">
            Hello I’am{" "}
            <span className="font-bold">
              {developerInfo.fullName}, {developerInfo.type}{" "}
            </span>{" "}
            <span className=" font-extrabold text-transparent border-text">
              Developer
            </span>{" "}
            {/* Based In <span className="font-bold">{developerInfo.country}.</span>{" "} */}
          </p>
          <p className="my-5 text-gray-500">{developerInfo.description}</p>
          <div className="flex gap-5">
            {links.map((item: any, index) => (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="rounded border-2 border-gray-900 p-2 cursor-pointer hover:text-gray-50 hover:bg-gray-900"
                href={item.link}
                key={index}
              >
                {<item.icon />}
              </Link>
            ))}
          </div>
        </div>

        <Image
          className="md:w-6/12 w-full"
          src={developerInfo.gender === "female" ? heroFemale : heroMale}
          alt="hero image"
        />
      </div>
    </div>
  );
}
