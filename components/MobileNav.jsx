"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Title required for accessibility by Radix UI */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="text-4xl font-semibold">
              Jess<span className="text-accent">.</span>
            </div>
          </Link>
        </div>
        
        <nav className="flex flex-col justify-center items-center gap-8">
          <Link 
            href="/#skills" 
            className="text-xl capitalize hover:text-accent transition-all"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link 
            href="/#projects" 
            className="text-xl capitalize hover:text-accent transition-all"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/#contact" 
            className="text-xl capitalize hover:text-accent transition-all"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto mb-8 flex justify-center gap-6 text-3xl">
          <Link href="https://github.com/jessmathews" target="_blank" className="hover:text-accent transition-all">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/jessmathews24/" target="_blank" className="hover:text-accent transition-all">
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/i_am_jezz" target="_blank" className="hover:text-accent transition-all">
            <FaSquareXTwitter />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;