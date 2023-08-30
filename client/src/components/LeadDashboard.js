import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../utils/mutations';

import { useQuery } from '@apollo/client';
import { QUERY_AREA, QUERY_AREAS } from '../utils/queries';
import NewTask from './NewTask';

export default function MyDashboard({ _id }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: ' ',
    taskDesc: ' ',
    isCompleted: false,
    user: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [addTask, { error }] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      try {
        const { area } = cache.readQuery({
          query: QUERY_AREA,
          variables: { id: _id },
        });

        cache.writeQuery({
          query: QUERY_AREA,
          data: {
            area: {
              ...area,
              users: area.users.map((user) =>
                user._id === addTask.user._id
                  ? { ...user, tasks: [...user.tasks, addTask] } // Update tasks array for the specific user
                  : user
              ),
            },
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const { loading, data } = useQuery(QUERY_AREA, { variables: { id: _id } });
  if (loading) {
    return <div>Loading...</div>;
  }
  let index = 1;
  const area = data.area;

  const { name, taskDesc, user } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = async (e, closeModal) => {
    e.preventDefault();
    try {
      await addTask({
        variables: {
          name: formData.name,
          taskDesc: formData.taskDesc,
          isCompleted: false,
          user: selectedUserId,
        },
      });
      if ((name === '') | (taskDesc === '')) {
        return console.error('Input field cannot be empty');
      }
      if (!selectedUserId) {
        console.error('Please select a user.');
        return;
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleSubmit = async (e, closeModal) => {
    e.preventDefault();

    if (!formData.name || !formData.taskDesc) {
      return;
    }
    try {
      const { data } = await addTask({
        variables: {
          name: formData.name,
          taskDesc: formData.taskDesc,
          isCompleted: false,
          user: selectedUserId,
        },
      });

      setFormData({
        name: ' ',
        taskDesc: ' ',
        isCompleted: false,
        user: ' ',
      });
      closeModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="flex flex-row justify-between border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl">
          <div className="flex flex-col items-">
            <h1 className="font-bold text-slate-200">Create New Task</h1>
            <p className="font-thin text-gray-500">
              Assign tasks to your team members.
            </p>
          </div>
          <div className="flex justify-end">
            <h2 className="font-bold text-6xl text-slate-200"> + </h2>
          </div>
        </div>
      </button>
      {/* Here i have to add props to make the state work  */}
      {openModal && (
        <NewTask
          users={area.users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          handleSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          createTask={createTask}
          closeModal={setOpenModal}
        />
      )}
      <div className="mt-4 p-5 border-2 rounded-2xl border-gray-500">
        <div className="grid grid-cols-4 gap-4 dashContainer py-2">
          <h2
            className=" flex font-bold text-slate-200"
            style={{ paddingBottom: '0.8rem' }}
          >
            Nº
          </h2>
          <h2
            className=" flex font-bold text-slate-200"
            style={{ paddingBottom: '0.8rem' }}
          >
            Owner
          </h2>
          <h2
            className=" flex font-bold text-slate-200"
            style={{ paddingBottom: '0.8rem' }}
          >
            Task
          </h2>
          <h2
            className=" flex font-bold text-slate-200"
            style={{ paddingBottom: '0.8rem' }}
          >
            Status
          </h2>
        </div>
        {area.users.map((user, i) => {
          return (
            <div>
              {user.tasks.map((task, j) => {
                return (
                  <div className="grid grid-cols-4 gap-4 dashContainer py-2">
                    <p
                      className=" font-thin text-gray-500"
                      style={{ paddingBottom: '0.8rem' }}
                    >
                      {index++}
                    </p>
                    <p
                      className=" font-thin text-gray-500"
                      style={{ paddingBottom: '0.8rem' }}
                    >
                      {user.firstName}
                    </p>
                    <div className="overflow-auto">
                      <p
                        className=" font-thin text-gray-500"
                        style={{ paddingBottom: '0.8rem' }}
                      >
                        {task.name}
                      </p>
                    </div>

                    <p
                      className=" font-thin text-gray-500"
                      style={{ paddingBottom: '0.8rem' }}
                    >
                      {task.isCompleted ? 'Completed' : 'Pending'}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
