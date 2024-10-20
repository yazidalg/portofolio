import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hello I'm Al</h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              5th semester student at the Telkom University majoring in Software Engineer. I am a passionate learner and always eager to learn new things. I am interested in Devops, Backend 
              and AI Technology. I am also a fast learner and a good team player. I am looking for an internship to improve my skills and gain new experience in the field of technology.
            </p>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-blue-500 hover:bg-blue-200 hover:text-black text-white font-bold">
                Hire Me!
              </button>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-blue-500 hover:bg-blue-200 hover:text-black text-white font-bold mt-3">Download CV</button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <Image
              src="/images/yazid.JPG"
              alt="Hero Image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
    </section>
  )
}

export default HeroSection