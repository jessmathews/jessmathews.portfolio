import Link from "next/link";
import { FaEnvelope,FaMap, FaPhone, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-24 bg-primary/95 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-8 md:p-16 backdrop-blur-sm overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            I&apos;m currently available for freelance work and full-time opportunities.
            Feel free to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaEnvelope className="text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                <Link href="mailto:hello@jessmathews.online" className="text-base sm:text-lg font-medium hover:text-accent transition-colors wrap-break-word">
                  hello@jessmathews.online
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaPhone className="text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-400 text-sm mb-1">Phone</h3>
                <Link href="tel:+918547773974" className="text-base sm:text-lg font-medium hover:text-accent transition-colors wrap-break-word">
                  +91 85477 73974
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <FaMap className="text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-400 text-sm mb-1">Location</h3>
                <p className="text-base sm:text-lg font-medium wrap-break-word">Kottayam, Kerala</p>
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
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
