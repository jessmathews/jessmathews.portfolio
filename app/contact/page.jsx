import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-3xl w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg">
            I'm currently available for freelance work and full-time opportunities.
            Feel free to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                <a href="mailto:hello@jessmathews.com" className="text-lg font-medium hover:text-accent transition-colors">
                  hello@jessmathews.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Phone</h3>
                <p className="text-lg font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Location</h3>
                <p className="text-lg font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/jessmathews" target="_blank" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-xl">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/jessmathews24/" target="_blank" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-xl">
                <FaLinkedin />
              </Link>
              <Link href="https://x.com/i_am_jezz" target="_blank" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all text-xl">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;