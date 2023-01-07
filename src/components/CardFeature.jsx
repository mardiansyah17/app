import React from "react";

export default function CardFeature({ title, description, icon }) {
  return (
    <div className="flex w-80 p-2 bg-white rounded-2xl items-center">
      <img className="w-20 mr-3 h-16" src={icon} alt="" />
      <div className="">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
