'use client';
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import Image from "next/image";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  const handleEmailClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personalData.phone}`);
  };

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
    <Image
      src="/blur-23.svg"
      alt="Hero"
      width={1572}
      height={795}
      className="absolute top-0 -z-10"
    />
      {/* Section header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Get In Touch
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div 
              onClick={handleEmailClick}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <MdAlternateEmail
                  className="bg-gradient-to-br from-red-400 via-red-500 to-orange-500 p-3 rounded-full text-white mb-4 shadow-lg shadow-red-500/30"
                  size={48}
                />
                <h3 className="text-lg font-semibold mb-2 text-emerald-400">Email</h3>
                <p className="text-gray-300 text-sm break-all">{personalData.email}</p>
              </div>
            </div>

            <div 
              onClick={handlePhoneClick}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <IoMdCall
                  className="bg-gradient-to-br from-green-400 via-green-500 to-emerald-500 p-3 rounded-full text-white mb-4 shadow-lg shadow-green-500/30"
                  size={48}
                />
                <h3 className="text-lg font-semibold mb-2 text-emerald-400">Phone</h3>
                <p className="text-gray-300 text-sm">{personalData.phone}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <CiLocationOn
                  className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500 p-3 rounded-full text-white mb-4 shadow-lg shadow-blue-500/30"
                  size={48}
                />
                <h3 className="text-lg font-semibold mb-2 text-emerald-400">Location</h3>
                <p className="text-gray-300 text-sm">{personalData.address}</p>
              </div>
            </div>
          </div>

          {/* Social links section */}
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-emerald-400">
              Let's Connect
            </h3>
            <div className="flex justify-center items-center gap-6 lg:gap-8">
              <Link target="_blank" href={personalData.github} className="group">
                <div className="relative">
                  <IoLogoGithub
                    className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-full text-white group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-emerald-500/25"
                    size={56}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </Link>
              <Link target="_blank" href={personalData.linkedIn} className="group">
                <div className="relative">
                  <BiLogoLinkedin
                    className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-full text-white group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-emerald-500/25"
                    size={56}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;