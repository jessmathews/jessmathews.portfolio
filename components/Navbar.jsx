"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <div className="nav bg-transparent fixed top-0 left-0 right-0 z-50 w-full h-16 bottom-auto backdrop-blur-lg">
      <div className="z-1 flex justify-center items-center relative h-full px-3 ">
        <Link href="/" className="absolute z-1002" onClick={() => onUpdateActiveLink('#')}>
          <div className="text-2xl font-semibold hover:text-accent transition-all">Jess<span className="text-accent jumping-char ">.</span></div>
          </Link>

        <nav className="w-full h-full float-right relative">
          <div className="flex items-center w-full h-full justify-between flex-row ">

            <nav className="h-full gap-3 flex-nowrap flex justify-center items-center">
              <Link href="/#skills" className={activeLink === 'skills' ? 'text-accent opacity-100 link-button' : 'link-button opacity-75 hover:text-accent transition-all'} onClick={() => onUpdateActiveLink('skills')}>skills</Link>
              <Link href="/#projects" className={activeLink === 'projects' ? 'text-accent opacity-100 link-button' : 'link-button opacity-75 hover:text-accent transition-all'} onClick={() => onUpdateActiveLink('projects')}>projects</Link>
              <Link href="/#contact" className={activeLink === 'contact' ? 'text-accent opacity-100 link-button' : 'link-button opacity-75 hover:text-accent transition-all'} onClick={() => onUpdateActiveLink('contact')}>contact</Link>
            </nav>
            <nav className="h-full gap-3 flex-nowrap flex justify-center items-center text-4xl">
              <Link href="https://github.com/jessmathews" target="_blank" className="hover:text-accent transition-all"><FaGithub /></Link>
              <Link href="https://www.linkedin.com/in/jessmathews24/" target="_blank" className="hover:text-accent transition-all"><FaLinkedin /></Link>
              <Link href="https://x.com/i_am_jezz" target="_blank" className="hover:text-accent transition-all"><FaSquareXTwitter /></Link>
            </nav>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar