"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMail = () => {
    window.location.href = "mailto:rahul.nema6362@gmail.com";
  };

  return (
    <nav className="p-8 flex justify-between items-center">
      <div className="flex flex-row justify-between items-center w-full sm:w-auto">
        <div className="text-black text-2xl font-calistoga">Rahul Nema</div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:block h-6 border-l-2 border-gray-300 mx-4"></div>
        <ul
          className={`sm:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <li>
            <a
              href="#"
              className="text-black font-montserrat font-bold text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black font-montserrat font-bold text-sm"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black font-montserrat font-bold text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex flex-row justify-between md:justify-normal items-center">
        <ul className={`sm:flex space-x-4`}>
          <li>
            <a
              href="https://www.linkedin.com/in/rahulnema0411"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="black" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rahulnema0411"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare color="black" size={24} />
            </a>
          </li>
        </ul>
        <div className="h-6 border-l-2 border-gray-300 mx-4"></div>
        <button
          onClick={openMail}
          className="flex flex-row items-center bg-black text-white rounded-full px-4 py-2 space-x-2"
        >
          <div className="font-montserrat font-bold">Get in touch</div>
          <GoArrowRight color="white" size={18} />
        </button>
      </div>
    </nav>
  );
}
