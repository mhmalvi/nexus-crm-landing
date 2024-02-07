import React from 'react'

const SectionEleven = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center lg:min-h-[92vh] min-h-[90vh] w-full ">
        <div className="lg:w-2/3 w-[90vw] h-full flex flex-col bg-gradient-to-b from-[#8A7CFD7f] to-[#2596FB7f] rounded-md overflow-hidden">
            <h1 className="m-0 p-4 w-full h-full text-center text-3xl bg-[#ffffff11] shadow-md backdrop-blur-2xl text-blue-900 font-semibold">Let&apos;s Talk Numbers</h1>
            <div className="w-full py-8 flex items-center justify-center">
                <div className="w-full lg:h-[10vh] h-full lg:flex grid grid-cols-2 lg:flex-nowrap flex-wrap items-center justify-center lg:gap-4">
                    <div className="p-8 lg:h-full h-[12vh] flex flex-col items-center justify-center border-r-2 lg:border-b-0 border-b-2 border-blue-400">
                        <h1 className="m-0 p-0 text-center 2xl:text-3xl lg:text-2xl text-2xl text-blue-900 font-semibold">20+</h1>
                        <p className="m-0 p-0 text-center lg:text-base text-sm text-blue-900">Employees</p>
                    </div>
                    <div className="p-8 lg:h-full h-[12vh] flex flex-col items-center justify-center lg:border-r-2 lg:border-b-0 border-b-2 border-blue-400 ">
                        <h1 className="m-0 p-0 text-center 2xl:text-3xl lg:text-2xl text-2xl text-blue-900 font-semibold">100+</h1>
                        <p className="m-0 p-0 text-center lg:text-base text-sm text-blue-900">Customers using Queleads CRM</p>
                    </div>
                    <div className="p-8 lg:h-full h-[12vh] flex flex-col items-center justify-center border-r-2 border-blue-400">
                        <h1 className="m-0 p-0 text-center 2xl:text-3xl lg:text-2xl text-2xl text-blue-900 font-semibold">90%</h1>
                        <p className="m-0 p-0 text-center lg:text-base text-sm text-blue-900">People feel happier using Queleads CRM</p>
                    </div>
                    <div className="p-8 lg:h-full h-[12vh] flex flex-col items-center justify-center ">
                        <h1 className="m-0 p-0 text-center 2xl:text-3xl lg:text-2xl text-2xl text-blue-900 font-semibold">50+</h1>
                        <p className="m-0 p-0 text-center lg:text-base text-sm text-blue-900">Total features</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionEleven;