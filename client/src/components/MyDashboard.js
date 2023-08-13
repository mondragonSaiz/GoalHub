import React from 'react';
import memberOne from '../img/avatar/avatar1.png';
// import ProgressBar from '../components/progressBar';
// import { Checkbox } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';

export default function MyDashboard() {
  const memberImg = memberOne;
  const memberName = 'Lalo P' + '.';
  const memberTeam = 'art team';

  return (
    <div className="flex flex-col w-full font-poppins mb-10">
      <div
        className="border-2 rounded-2xl border-gray-500 py-5 px-7 text-xl overflow-auto"
        style={{ height: '32rem' }}
      >
        <h1 className=" font-bold text-slate-200">My dashboard</h1>
        <p className=" font-thin text-gray-500">
          Keep track of your achievements!
        </p>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-col justify-between items-center mt-5">
            <div style={{ visibility: 'hidden', paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
            <div style={{ paddingBottom: '0.8rem' }}>
              <Checkbox />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Status
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              In progress
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              done
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              In progress
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Incomplete
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              done
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              In progress
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              done
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              Incomplete
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              done
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              In progress
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              done
            </p>
          </div>
          <div className="flex flex-col justify-between items-center mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Achievement
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              achievement
            </p>
          </div>
          <div className="flex flex-col justify-between items-center mt-5">
            <h2
              className=" flex font-bold text-slate-200"
              style={{ paddingBottom: '0.8rem' }}
            >
              Hours Spent
            </h2>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
            <p
              className=" font-thin text-gray-500"
              style={{ paddingBottom: '0.8rem' }}
            >
              0hrs
            </p>
          </div>
        </div>

        {/* <div class="grid grid-cols-4 gap-1" style={{ fontSize: 'smaller' }}>
          <div>
            <div style={{ visibility: 'hidden' }}>check</div>
            <div>
              <Checkbox />
            </div>
            <div>
              <Checkbox />
            </div>
          </div>
          <div>Status</div>
          <div>achievement</div>
          <div> Hours</div>
        </div> */}
      </div>
    </div>
  );
}
