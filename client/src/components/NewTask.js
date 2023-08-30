import React, { useState } from 'react';

export default function NewTask({
  users,
  setSelectedUserId,
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) {
  let [SelectedUser, setSelectedUser] = useState(null);

  return (
    <div className="font-poppins fixed inset-0 bg-neutral-950 flex justify-center items-center z-10 ">
      <main className="flex justify-center bg-neutral-950 px-10 md:px-20 lg:px-40 ">
        <section className="flex pt-24 min-h-screen ">
          <div className="flex flex-col justify-center w-full items-center lg:-mt-20 mt-10 mb-10 ">
            <div className="flex flex-row justify-between">
              <h1 className="  text-slate-200 text-2xl font-bold lg:text-4xl md:text-4xl sm:text-4xl mb-5 text-center">
                New Task
              </h1>
            </div>
            {/* Pending: when xs p-4 - p-6 */}
            <div className="flex flex-col items-center w-full  border-2 rounded-2xl border-slate-200 p-14 gap-8">
              {/* Title */}
              <div className="flex flex-col md:justify-center w-5/6 gap-6">
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-2xl font-medium  text-slate-200 dark:text-black"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    placeholder="Title for your task"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full p-4 focus:text-slate-200 text-slate-200 border border-gray-500 rounded-lg bg-neutral-950 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/* <div className="flex flex-col lg:flex-row lg:gap-16">
                  <div className="flex justify-between">
                    <h1 className=" text-slate-200 font-medium text-xl lg:text-3xl md:text-2xl sm:text-3xl text-left ">
                      Title
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <input
                      placeholder="Title for your task"
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      className=" flex-grow justify-between focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left  py-2 pl-4"
                    />
                  </div>
                </div> */}
                {/* Description */}
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-2xl font-medium  text-slate-200 dark:text-black"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="taskDescription"
                    name="taskDesc"
                    value={formData.taskDesc}
                    placeholder="Write your task"
                    onChange={handleInputChange}
                    className="block w-full p-4 focus:text-slate-200 text-slate-200 border border-gray-500 rounded-lg bg-neutral-950 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/* <div className="flex flex-col lg:flex-row  lg:gap-16">
                  <div>
                    <h1 className="text-slate-200 font-medium text-xl lg:text-3xl md:text-2xl sm:text-3xl text-left">
                      Description
                    </h1>
                  </div>
                  <div>
                    <input
                      placeholder="Write your task "
                      type="text"
                      name="description"
                      onChange={handleInputChange}
                      className=" focus:text-slate-200 text-slate-200 bg-neutral-950 border-2 rounded-lg border-gray-500 text-left  py-8  pl-4"
                    />
                  </div>
                </div> */}
              </div>
              <div className="flex  lg:flex-row flex-wrap w-full justify-center overflow-auto h-[200px] max-[420px]:flex-row   max-[420px]:w-[200px] ">
                {users.map((user) => {
                  return (
                    <div
                      key={user._id}
                      className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4 md:pb-4 "
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        key={user._id}
                        className={`bg-slate-200 rounded-full w-20 h-20 overflow-hidden ${
                          SelectedUser === user.firstName ? 'selected' : ''
                        }`}
                        onClick={() => {
                          setSelectedUser(user.firstName);
                          setSelectedUserId(user._id);
                        }}
                      >
                        <img
                          src={user.userIcon}
                          alt="memberOne"
                          value={user._id}
                          layout="fill"
                          objectfit="cover"
                        />
                      </div>
                      <div className="flex justify-center pt-2">
                        <p className="text-slate-200 font-normal">
                          {user.firstName}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row xs:flex-col">
              <div className="flex p-6">
                <a
                  onClick={() => closeModal(false)}
                  className="flex bg-red-800 text-gray-100 py-2 px-10 font-medium font-poppins rounded-full lg:text-lg justify-center w-auto cursor-default"
                >
                  Cancel
                </a>
              </div>
              <div className="flex p-6">
                <a
                  onClick={(e) => handleSubmit(e, closeModal)}
                  className="flex bg-gray-100 text-neutral-950 py-2 px-10 font-medium font-poppins rounded-full lg:text-lg justify-center w-auto cursor-default "
                >
                  Assign
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style>
        {`
          .selected {
            outline: 4px solid green;
          }
          .selectedImage {
            border: 2px solid green;
          }
          `}
      </style>
    </div>
  );
}
