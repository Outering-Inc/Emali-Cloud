import React from 'react'
import { people01,shield } from '../../assets';

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[300px] block">
        The Value that holds us true and  to account.
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={people01} alt="people01" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            We keep growing, but we strive to keep things simple and work in small groups when possible.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={people01} alt="people01" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Inclusion
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            We value and empower our humans for who they are. We never, ever discriminate based on gender, color, race or football team.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={shield} alt="shield" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Flexible working hours
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            For most roles, you have the flexibility to decide on your schedule with your manager. Time to pick up the kids!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={shield} alt="shield" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Flexible working hours
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            For most roles, you have the flexibility to decide on your schedule with your manager. Time to pick up the kids!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={shield} alt="shield" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Flexible working hours
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            For most roles, you have the flexibility to decide on your schedule with your manager. Time to pick up the kids!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gp-3">
            <div className="imgDiv p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]">
              <img src={shield} alt="shield" className="w-[70%]"/>
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Flexible working hours
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            For most roles, you have the flexibility to decide on your schedule with your manager. Time to pick up the kids!
          </p>
        </div>
      </div>
    </div>
  )
};

export default Value;