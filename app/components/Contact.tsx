"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { developerInfo, links } from "../utils/constant";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // You can send the form data to your backend or handle it as needed
      console.log("Form submitted:", formData);
      // Clear form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Clear errors
      setErrors({});
    }
  };

  return (
    <div id="Contact" className="my-5 lg:my-10">
      <p className="text-3xl text-center">
        {" "}
        Contact <span className="font-extrabold">Me</span>
      </p>
      <div className="lg:flex gap-10 items-center">
        <form onSubmit={handleSubmit} className="space-y-4 lg:w-[50%]">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
              rows={5}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          
          <div className="flex gap-5">
          <button type="submit" className="flex items-center gap-2 bg-gray-900 text-gray-100  px-3 rounded-sm hover:bg-gray-50 hover:text-gray-900 border-2 border-gray-900  ">
         
            Submit
          </button>
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
        </form>
        <div className="my-5 lg:my-0">
          <h2 className="text-2xl font-bold lg:text-5xl leading-tight mb-4">
            Let’s{" "}
            <span className="font-extrabold text-transparent border-text">
              talk
            </span>{" "}
            for Something special
          </h2>
          <p className="text-gray-500 mb-4">
            {developerInfo.contact}
          </p>
          <p className="text-lg lg:text-xl mb-4">{developerInfo.mail}</p>
          <p className="text-lg lg:text-xl mb-4">{developerInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
