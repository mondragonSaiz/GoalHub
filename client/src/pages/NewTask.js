import React from 'react';
import memberOne from '../img/avatar/avatar1.png';

export default function NewTask() {
  const memberImg = memberOne;
  return (
    <div className="font-poppins">
      <main className="flex justify-center bg-neutral-950 px-10 md:px-20 lg:px-40">
        <section className="flex pt-24 min-h-screen">
          <div className="flex flex-col justify-center items-center lg:-mt-20 mt-10 mb-10">
            <h1 className="text-slate-200 text-2xl font-bold lg:text-4xl mb-5 text-center">
              New Task +
            </h1>
            <div className="flex flex-col items-center w-auto border-2 rounded-2xl border-slate-200 px-14 py-14 gap-8">
              {/* Title */}
              <div className="flex flex-row lg:flex-col gap-16">
                <div className="flex lg:flex-row gap-16">
                  <div className="flex">
                    <h1 className="text-slate-200 font-medium text-xl text-left ">
                      Title
                    </h1>
                  </div>
                  <div className="flex gap-x-16 justify-end">
                    <input
                      placeholder="Title for your task"
                      type="text"
                      className=" flex-grow  focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left pr-72 py-2 pl-4"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col lg:flex-row gap-16">
                  <div>
                    <h1 className="text-slate-200 font-medium text-xl text-left">
                      Description
                    </h1>
                  </div>
                  <div>
                    <input
                      placeholder="Write your task "
                      type="text"
                      className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left  py-8 pr-56 pl-4"
                    />
                  </div>
                </div>

                {/* <div className="w-80 h-auto border-2 rounded-2xl border-slate-600 hover:border-4 cursor-pointer lg:cursor-default">
                            <button  className="visible btn-employee border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64 cursor-pointer mb-10"></button>
                            <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I'm an employee, looking to keep track of my achievements</h1>
                        </div>
                        <div className="w-80 h-auto border-2 rounded-2xl border-slate-600 hover:border-4 cursor-pointer lg:cursor-default">
                            <button  className="visible btn-employer border-slate-200 border-2 rounded-full w-10 h-10 mt-4 ml-64 cursor-pointer mb-10 text-white"></button>
                            <h1 className="text-slate-200 font-medium text-sm text-left px-10 mb-10 mt-4">I’m an employer, looking to increase motivation and productivity</h1>
                        </div> */}
              </div>

              <div className="flex flex-row gap-10 justify-center">
                <div>
                  <div className="flex flex-col bg-slate-200 rounded-full w-24 h-24 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      bjectFit="cover"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <p className="text-slate-200 font-normal">Eduardo</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-200 rounded-full w-24 h-24 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      bjectFit="cover"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <p className="text-slate-200 font-normal">Alejandro</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-200 rounded-full w-24 h-24 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      bjectFit="cover"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <p className="text-slate-200 font-normal">Daniel</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-200 rounded-full w-24 h-24 overflow-hidden">
                    <img
                      src={memberImg}
                      alt="memberOne"
                      layout="fill"
                      bjectFit="cover"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <p className="text-slate-200 font-normal">Hector</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-6">
              <a
                href="/sign-up-form"
                className="flex bg-gray-100 text-neutral-950 py-2 px-20 font-mediumfont-poppins rounded-full lg:text-lg justify-center w-auto cursor-default"
              >
                Assign{' '}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
