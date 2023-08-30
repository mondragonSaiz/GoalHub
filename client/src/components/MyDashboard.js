import React, { useState, useEffect } from 'react';
import memberOne from '../img/avatar/avatar1.png';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../utils/mutations';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';
import { FaCalendar } from 'react-icons/fa';
import CustomModal from './CustomModal';
import '../styles/dash.css';
import { Fragment } from 'react';

export default function MyDashboard({ tasks }) {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskModalVisibility, setTaskModalVisibility] = useState({});
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';
  let objectDate = new Date();
  let month = objectDate.getMonth();
  const [updateTask] = useMutation(UPDATE_TASK, {
    // Configure update function to update Apollo Client cache
    update: (cache, { data: { updateTask } }) => {
      // Update cache to reflect the updated task
      cache.modify({
        fields: {
          // Assuming you have a query named 'tasks' that fetches tasks
          tasks: (existingTasks, { readField }) => {
            return existingTasks.map((task) => {
              if (task._id === updateTask._id) {
                // Update the 'isCompleted' field of the updated task
                return { ...task, isCompleted: updateTask.isCompleted };
              }
              return task;
            });
          },
        },
      });
    },
  });
  const [checkboxStatus, setCheckboxStatus] = useState({});

  useEffect(() => {
    // Initialize the checkbox status based on tasks' isCompleted values
    const initialStatus = {};
    const initialVisibility = {};
    tasks.forEach((task) => {
      initialStatus[task._id] = task.isCompleted || false;
      initialVisibility[task._id] = false;
    });
    setCheckboxStatus(initialStatus);
    setTaskModalVisibility(initialVisibility);
  }, [tasks]);

  const handleCheckboxToggle = async (taskId) => {
    const isCompleted = checkboxStatus[taskId]; // Use checkboxStatus for current value

    try {
      const { data } = await updateTask({
        variables: {
          taskId,
          isCompleted: !isCompleted,
        },
      });
      setCheckboxStatus((prevStatus) => ({
        ...prevStatus,
        [taskId]: !prevStatus[taskId],
      }));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (tasks.length !== 0) {
    const currentMonthTasks = tasks.filter((task) => {
      const createdAt = new Date(task.createdAt);
      const currentMonth = new Date().getMonth();
      return createdAt.getMonth() === currentMonth;
    });
  }

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
            <button
              type="submit"
              className={`border border-green-200 rounded-lg font-medium text-base text-green-300 hover:text-gray-500 hover:border-green-400 hover:bg-green-400 px-2 ${
                tasks.length === 0
                  ? 'border border-gray-200 text-gray-300 disabled:opacity-50 hover:border-gray-400  hover:bg-gray-400 cursor-not-allowed'
                  : ''
              }`}
              style={{ fontSize: 'smaller' }}
              disabled={tasks.length === 0}
            >
              Update
            </button>
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
                <div className="createdAtElement">Date</div>
              </div>
              {tasks
                .filter((task) => {
                  const createdAt = new Date(task.createdAt);
                  const currentMonth = new Date().getMonth();
                  return createdAt.getMonth() === currentMonth;
                })
                .map((task, index) => {
                  return (
                    <Fragment key={task._id}>
                      <HoverCard>
                        <div
                          className="grid grid-cols-4 gap-4 overflow-auto"
                          style={{ color: 'white' }}
                          id="wrapper"
                        >
                          <div className=" py-2 px-1 taskElement">
                            <input
                              type="checkbox"
                              checked={checkboxStatus[task._id]}
                              onChange={() => handleCheckboxToggle(task._id)}
                            />
                          </div>
                          <HoverCardTrigger asChild>
                            <div
                              onClick={() =>
                                setTaskModalVisibility((prevVisibility) => ({
                                  ...prevVisibility,
                                  [task._id]: true,
                                }))
                              }
                              className="py-2 px-1 text-base overflow-auto"
                            >
                              <p className="taskElement ">{task.name}</p>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <p className="text-base">{task.taskDesc}</p>
                            <div className="flex py-2">
                              <p className=" text-sm taskElement createdAtElement px-1">
                                assigned on: {task.createdAt}
                              </p>
                              <FaCalendar className="icon" />
                            </div>
                          </HoverCardContent>
                          <div className="py-2 px-1 text-sm font-thin text-gray-500 ">
                            <p className="taskElement_isCompleted">
                              {task.isCompleted ? 'Completed' : 'Pending'}
                            </p>
                          </div>
                          <div className="py-2 px-1 text-sm font-thin text-gray-500 ">
                            <p className="taskElement createdAtElement">
                              {task.createdAt}
                            </p>
                          </div>
                        </div>
                      </HoverCard>
                      <CustomModal
                        isVisible={taskModalVisibility[task._id]} // Use task-specific visibility
                        onClose={() =>
                          setTaskModalVisibility((prevVisibility) => ({
                            ...prevVisibility,
                            [task._id]: false,
                          }))
                        }
                      >
                        <p className="text-xl font-medium">{task.name}</p>
                        <p className="text-base font-medium pt-1">
                          <span className="underline decoration-pink-500 ">
                            {' '}
                            To do
                          </span>{' '}
                          : {task.taskDesc}
                        </p>
                        <p className="text-sm font-medium pt-2">
                          Assigned on :{' '}
                          <span className="text-gray-900 underline decoration-indigo-500">
                            {task.createdAt}
                          </span>
                        </p>
                      </CustomModal>
                    </Fragment>
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
        </div>
      </form>
    </div>
  );
}
