import React from "react";
import sigma from "../../images/sigma.png";

const Overview = () => {
  return (
    <>
      <div className="flex flex-col justify-center sm:mx-5 md:space-y-10  md:p-10 lg:mx-10 lg:p-20">
        <p id="cyber" className="text-lg text-[#B6B6B6] md:text-5xl   ">
          STEPS TO GET STARTED WITH ..
        </p>
        <p id="cyber" className="text-lg text-white md:text-[102.985px]  ">
          SID 2023
        </p>
      </div>

      <div className="mx-10  sm:mx-5 md:mx-20 md:mb-10">
        <div className="border-[#CAC9C9]/87 w-auto  border-b-2"></div>
      </div>
      <section className="mb-20 md:mx-20 ">
        <p
          className="p-10 text-xs text-[#CAC9C9] sm:pb-20 md:p-0 md:pb-20 md:text-lg lg:p-0 lg:pb-10 "
          id="jmh"
        >
          The internship drive is divided into 5 stages -{" "}
        </p>
        <div className="flex flex-col space-y-9 space-x-5 lg:flex-row justify-between">
          <img
            src={sigma}
            alt="software geek "
            className="mx-auto h-56 w-44  md:h-auto md:w-auto"
          />
          <div>
            <div className="md:ml-5 grid grid-rows-4 place-items-center gap-y-5 md:mx-0 md:ml-44 lg:grid-cols-2 lg:grid-rows-2 md:gap-x-5 md:gap-y-5">
              <div className="flex h-full sm:max-w-[350px] flex-col bg-[#CAC9C9]/40 p-3 md:max-w-[500px]">
                <p id="cyber" className="text-sm text-white md:text-xl">
                  REGISTRATION PHASE
                </p>
                <p id="jmh" className="text-xs text-[#CAC9C9] md:text-sm">
                  Students need to register themselves at
                  https://spectrum-sid-2023.vercel.app/. It is mandatory for all
                  students to register to take part in the internship drive
                </p>
              </div>
              <div className="flex h-full max-w-[350px] flex-col bg-[#CAC9C9]/40 p-3 md:max-w-[500px]">
                <p id="cyber" className="text-sm text-white md:text-xl">
                  TASK 1 :-
                </p>
                <p id="jmh" className="text-xs text-[#CAC9C9] md:text-sm">
                  This is the initial and basic part of the drive, starting from
                  1st October 2023. The deadline for Task 1 is 9th October 2023!
                </p>
              </div>
              <div className="flex h-full max-w-[350px] flex-col bg-[#CAC9C9]/40 p-3 md:max-w-[500px]">
                <p id="cyber" className="text-sm text-white md:text-xl">
                  TASK 2 :-
                </p>
                <p id="jmh" className="text-xs text-[#CAC9C9] md:text-sm">
                  Next up, we have the secondary part of the drive, starting
                  from 10th October 2023. The deadline for Task 2 is 18th
                  October 2023!
                </p>
              </div>
              <div className="flex h-full max-w-[350px] flex-col bg-[#CAC9C9]/40 p-3 md:max-w-[500px]">
                <p id="cyber" className="text-sm text-white md:text-xl">
                  TASK 3 :-
                </p>
                <p id="jmh" className="text-xs text-[#CAC9C9] md:text-sm">
                  Finally, here comes the conclusive part of the drive, starting
                  from 20th October 2023. The deadline for Task 3 is 28th
                  October 2023!
                </p>
              </div>
            </div>
            <div
              className="mt-20 text-center text-lg text-white lg:ml-30 md:text-3xl"
              id="cyber"
            >
              COMPLETION OF INTERNSHIP
            </div>
          </div>
        </div>
      </section>

      <div className="md:mt- mx-5  md:mx-20 md:mb-20">
        <div className="border-[#CAC9C9]/87 w-auto  border-b-2"></div>
      </div>
    </>
  );
};

export default Overview;
