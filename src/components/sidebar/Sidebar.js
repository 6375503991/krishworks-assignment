import React, { useState } from "react";
import SideItems from "./SideItems";

export default function Sidebar({ doctor }) {
  const [menu, setMenu] = useState(true);

  return (
    <div
      className={menu ? "w-64 transition-all h-full" : "w-12 transition-all"}
    >
      <header className="flex items-center h-16 px-3">
        {menu && (
          <>
            <div className="w-10">
              <i className="fa-solid fa-dna text-2xl text-blue-600"></i>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-xl">Zendenta</h2>
              <div className="text-xs text-gray-600">
                Cabut gigi tanpa sakit
              </div>
            </div>
          </>
        )}
        <div
          className="cursor-pointer w-7 text-center text-gray-600"
          onClick={() => setMenu(!menu)}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </header>
      <SideItems menu={menu} />
      <div className="h-80 mt-12 relative">
        <div className="absolute bottom-0 w-full flex gap-2 border-t-2 border-gray-200 p-3 items-center">
          <div>
            <img
              className="rounded-full"
              src="https://i.pravatar.cc/48?img=5"
              alt="profile-pic"
            />
          </div>

          {menu && (
            <>
              <div className="flex-1">
                <div className="font-bold">{doctor.name}</div>
                <div className="text-sm text-gray-400">
                  {doctor.specification}
                </div>
              </div>
              <div>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
