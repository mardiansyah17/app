import React from "react";

export default function DownloadSection() {
  return (
    <div className="flex items-center   mt-12 mr-16">
      <img src="/public/icon/download.png" alt="" />
      <div className="ml-4">
        <h1 className="text-3xl font-bold mb-6">Download Us</h1>
        <p className="text-lg">
          Download Charum application to bring you more educated and full of knowledge, and share
          your memories or experience to people around the world, download charum right now
        </p>
        <div className="flex mt-12 space-x-7">
          <img src="/public/icon/appstore.png" alt="" />
          <img src="/public/icon/playstore.png" alt="" />
        </div>
      </div>
    </div>
  );
}
