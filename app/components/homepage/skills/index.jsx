
// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full px-5 lg:px-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center mt-12">
        {skillsData.map((skill, id) => (
          <div
            key={id}
            className="group relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg border border-[#1f223c] bg-[#11152c] p-4 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 transform hover:scale-105 hover:border-violet-500 hover:shadow-violet-500/30"
          >
            <div className="h-10 sm:h-12">
              <Image
                src={skillsImage(skill)?.src}
                alt={skill}
                width={48}
                height={48}
                className="h-full w-auto"
              />
            </div>
            <p className="text-white text-xs sm:text-sm mt-3">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
