import React from "react";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <div className="px-16 mt-12">
      <h1 className="text-3xl font-bold">Let’s meet our team</h1>
      <div className="flex justify-around mt-16">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}
