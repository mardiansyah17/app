import React from "react";

export default function TeamCard() {
  return (
    <div className="bg-[#04353D] h-44 w-60 relative rounded-t-xl">
      <img src="/public/icon/team.png" alt="" className="absolute w-36 -top-10" />
      <img
        src="/public/icon/Rectangle 31.png"
        className="absolute z-10 bottom-0  -right-6 w-[800px]"
        alt=""
      />
      <span className="text-lg text-black font-semibold absolute bottom-0 right-0 z-20">
        FrontEnd Developer
      </span>
    </div>
  );
}
