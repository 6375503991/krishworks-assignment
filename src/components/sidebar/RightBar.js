import React, { useState } from "react";

export default function RightBar({ doctor }) {
  return (
    <div className="col-span-4 row-span-2 h-full">
      <Notes doctor={doctor} />
      <Files />
    </div>
  );
}

function Notes({ doctor }) {
  return (
    <div className="h-1/2 p-4 rounded bg-white">
      <div className="flex ">
        <div className="flex-1 font-bold">Notes</div>
        <div className="text-blue-600">
          <strong>See all</strong>
        </div>
      </div>
      <div className="bg-gray-200 rounded my-2 h-52 p-5 relative">
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>
        <p>- Lorem ipsum dolor sit amet.</p>

        <button className="bg-blue-600 text-white py-1 px-4 rounded absolute right-5 bottom-5">
          save note
        </button>
      </div>
      <div className="flex ">
        <div className="flex-1">
          <i className="fa-regular fa-user text-blue-600"></i>
          <span className="text-sm text-gray-500 ml-2">{doctor.name}</span>
        </div>
        <div className="text-sm text-gray-500">06 April 22</div>
      </div>
    </div>
  );
}

function Files() {
  // files api hava only text 'url'
  const files = [
    "Lorem ipsum dolor sit.pdf",
    "Lorem ipsum dolor.pdf",
    "Lorem ipsum d sit.pdf",
    "Lorem ipsum sfdsd sit.pdf",
  ];

  return (
    <div className="h-1/2 rounded mt-2 p-4 bg-white">
      <div className="flex ">
        <div className="flex-1 font-bold">Files/Documents</div>
        <div className="text-blue-600">
          <i className="fa-solid fa-file-circle-plus"></i>{" "}
          <strong>Add Files</strong>
        </div>
      </div>
      {files.map((file, i) => {
        return (
          <div
            key={i}
            className="flex gap-4 h-14 items-center border-b-2 border-gray-200"
          >
            <div>
              <i className="fa-solid fa-file"></i>
            </div>
            <div className="flex-1">
              <p>{file}</p>
            </div>
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
            <div>
              <i className="fa-solid fa-circle-arrow-down"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
