import React from 'react'
import Button from "../Components/Button";
import Image from 'next/image';

const page = () => {
  return (
    <div
      className="h-screen flex flex-col items-start justify-center lg:px-[12vw] px-8"
      // style={{
      //   background: `url(${HeroBG.src}) center / cover`,
      // }}
    >
      <div className="w-full my-4 flex lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-center lg:items-start items-center lg:mb-0 mb-4">
          <h1 className="text-4xl py-2">About Us</h1>
          <p className="text-base lg:text-start text-center">
          Engage with Queleads&apos; community to grow your business according to the statistics.
          </p>
        </div>
        <Button title={"Create Account"} variant={1} />
      </div>
      <div className="w-full my-4 rounded-md overflow-hidden shadow-md backdrop-blur-2xl bg-[#ffffff11] flex flex-col justify-center- items-center">
        <h1>Welcome to the future of CRM</h1>
        {/* <Image className="" alt="Openthread" src={qqCrmLogo || ""} /> */}
      </div>
      </div>
  )
}

export default page