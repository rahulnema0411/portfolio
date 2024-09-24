"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ContactMeSection() {
  return (
    <div id="contact" className="p-8 bg-materialblue">
      <nav className="flex flex-row items-center justify-between">
        <div className="">
          <ul className="flex space-x-4">
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
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-row space-x-4">
            <li className="bg-white rounded-xl p-2">
              <a
                href="https://www.linkedin.com/in/rahulnema0411"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="#3E8BC2" size={18} />
              </a>
            </li>
            <li className="bg-white rounded-xl p-2">
              <a
                href="https://github.com/rahulnema0411"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="#3E8BC2" size={18} />
              </a>
            </li>
            <li className="bg-white rounded-xl p-2">
              <a
              href="mailto:rahulnema0411@example.com"
              target="_blank"
              rel="noopener noreferrer"
              >
              <IoMail color="#3E8BC2" size={18} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-4 text-materialsubtitlegrey font-montserrat text-sm">
        <p>© 2023</p>
        <p>Designed and Developed by Rahul Nema</p>
      </div>
    </div>
  );
}
