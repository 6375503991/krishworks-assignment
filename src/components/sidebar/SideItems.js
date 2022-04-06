import React, { useState } from "react";
import { Link } from "react-router-dom";

const Items = [
  {
    iconClass: "fa-solid fa-gauge-simple-high",
    title: "Overview",
    path: "/overview",
  },
  {
    iconClass: "fa-solid fa-calendar",
    title: "Calendar",
    path: "/calendar",
  },
  {
    iconClass: "fa-regular fa-user",
    title: "Patient List",
    path: "/patient-list",
  },
  {
    iconClass: "fa-solid fa-comment-dots",
    title: "Messages",
    path: "/messages",
  },
  {
    iconClass: "fa-solid fa-sack-dollar",
    title: "Payment information",
    path: "/payment-information",
  },
  {
    iconClass: "fa-solid fa-sliders",
    title: "Settings",
    path: "/settings",
  },
];

export default function SideItems({ menu }) {
  const initial = Array(Items.length).fill(false);
  const [select, setSelect] = useState(initial);

  const base = "h-12 flex items-center px-3 font-semibold cursor-pointer mb-1";
  const normal = `${base} text-black hover:bg-gray-100`;
  const selected = `${base} bg-blue-600 text-white border-b-4 border-blue-700 hover:bg-blue-700 hover:border-blue-600`;

  const handleClick = (e) => {
    const temp = Array(Items.length).fill(false);
    temp[e.currentTarget.id] = true;
    setSelect(temp);
  };

  return Items.map((item, i) => {
    return (
      <Link
        key={i}
        id={i}
        className={select[i] ? selected : normal}
        onClick={handleClick}
        to={item.path}
      >
        <div className="w-10">
          <i className={item.iconClass}></i>
        </div>
        {menu && <h4 className="flex-1 transition-all">{item.title}</h4>}
      </Link>
    );
  });
}
