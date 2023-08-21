import React, { useState, useEffect } from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../utils/mutations';
import { Checkbox } from './checkbox';
import '../styles/dash.css';
export default function MyDashboard({ tasks }) {
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';
  let objectDate = new Date();
  let month = objectDate.getMonth();
  const [updateTask, { error, data }] = useMutation(UPDATE_TASK);
  const [checkboxStates, setCheckboxStates] = useState({});

  useEffect(() => {
    // Update checkboxStates when tasks change
    const newCheckboxStates = {};
    tasks.forEach((task) => {
      newCheckboxStates[task._id] = task.isCompleted;
    });
    setCheckboxStates(newCheckboxStates);
  }, [tasks]);

  const handleCheckboxToggle = async (taskId, isCompleted) => {
    console.log('TASK ID', taskId);
    console.log('TASK IS COMPLETED', !isCompleted);

    try {
      const { data } = await updateTask({
        variables: {
          taskId,
          isCompleted: !isCompleted, // Toggle the isCompleted value
        },
      });

      setCheckboxStates((prevStates) => ({
        ...prevStates,
        [taskId]: !isCompleted,
      }));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  console.log(month + 1);
  let date;

  console.log(tasks);

  return (
    <div className=" mydash_main flex flex-col w-full font-poppins mb-10">
      <form>
        <div
          className="dashContainer border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl overflow-auto"
          style={{ height: '32rem' }}
        >
          <div>
            <h1 className=" font-bold text-slate-200">My dashboard</h1>
          </div>
          <div className=" flex flex-row justify-between">
            <p className=" font-thin text-gray-500">
              Keep track of your achievements!
            </p>
            {/* <button
              type="submit"
              className="border border-green-200  rounded-lg font-thin text-green-300 hover:text-green-400 hover:border-green-400 px-2"
              style={{ fontSize: 'smaller' }}
            >
              Save
            </button> */}
          </div>

          {tasks.length !== 0 ? (
            <div>
              <div
                className="grid grid-cols-4 gap-4 dashContainer py-2"
                style={{ color: 'white' }}
              >
                <div>Check</div>
                <div>Task</div>
                <div className="taskElement_isCompleted">Status</div>
                <div>Date</div>
              </div>
              {tasks.map((task, index) => {
                return (
                  <div
                    key={task._id}
                    className="grid grid-cols-4 gap-4 overflow-auto"
                    style={{ color: 'white' }}
                  >
                    <div className=" py-2 px-1 taskElement">
                      <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() =>
                          handleCheckboxToggle(task._id, task.isCompleted)
                        }
                      />
                    </div>
                    <div className=" py-2 px-1 text-base overflow-auto">
                      <p className="taskElement ">{task.name}</p>
                    </div>
                    <div className=" py-2 px-1 text-sm font-thin text-gray-500 ">
                      <p className="taskElement_isCompleted">
                        {task.isCompleted ? 'Completed' : 'Pending'}
                      </p>
                    </div>
                    <div>
                      <p className="py-2 px-1  font-thin text-gray-500 text-base  taskElement">
                        {task.createdAt}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-4">
              <p className="font-thin text-gray-500 text-base">
                No tasks assigned.
              </p>
            </div>
          )}

          {/* <div>Check</div>
          <div>Task</div>
          <div>Status</div>
          <div>Assigned on</div> */}

          {/* {tasks.length !== 0 ? (
          <div>
            <div className="flex justify-between items-center">
              <h2
                className=" flex font-bold text-slate-200"
                style={{ paddingBottom: '0.8rem' }}
              >
                Check
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
              <h2
                className=" flex font-bold text-slate-200"
                style={{ paddingBottom: '0.8rem' }}
              >
                Assigned on
              </h2>
            </div>
            {tasks.map((task) => {
              return (
                <div className=" flex justify-between items-center">
                  {' '}
                  flex justify-between items-center  OR flex flex-row justify-between items-center mt-5
                  <div style={{ paddingBottom: '0.8rem' }}>
                    <Checkbox />
                  </div>
                  <h2
                    className=" flex font-bold text-slate-200"
                    style={{ paddingBottom: '0.8rem', fontSize: 'smaller' }}
                  >
                    {task.name}
                  </h2>
                  <p
                    className=" font-thin text-gray-500"
                    style={{ paddingBottom: '0.8rem' }}
                  >
                    {task.isCompleted ? 'Completed' : 'Pending'}
                  </p>

                  <p className=" font-thin text-gray-500">{task.createdAt}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p className="text-white">Free Of Tasks :{')'}</p>
          </div>
        )} */}
        </div>
      </form>
    </div>
  );
}
