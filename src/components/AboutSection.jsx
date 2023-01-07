import React from "react";

export default function AboutSection() {
  return (
    <div className="flex items-center px-16">
      <div className="mr-10">
        <h1 className="text-3xl font-bold mb-6">What is Charum?</h1>
        <p>
          Charum is a forum group discussion application that supports its users to ask questions
          and answer about certain topics. Charum will improve your knowledge and educate yourself
          with threads that are shared by users. We prioritize our users comfortability because we
          have a princip which we should be kind and polite.
        </p>
      </div>
      <img src="/public/icon/abotimge.png" className="w-[500px]" alt="" />
    </div>
  );
}
