import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-between items-center px-16 mt-8">
      <div className="basis-[530px]">
        <h1 className="text-5xl font-bold leading-[150%]">
          Welcome to The Best Social Network In The World
        </h1>
        <p className="text-xl font-normal">
          The right place to educate yourself and other, spread your knowledge to around the world
          and gain more information or discussion with us
        </p>
      </div>
      <img src="/public/icon/hero.png" alt="" className="w-[600px]" />
    </div>
  );
}
