"use client";
// @flow strict
import { useEffect, useState } from 'react';

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString();
  const formattedDate = dateTime.toLocaleDateString();

  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white overflow-hidden">
      {/* Animated Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        </div>
      </div>
    </div>
  );
}

export default Footer;
