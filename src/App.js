import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import PatientDetails from "./components/patient/PatientDetails";
import Appointment from "./components/patient/Appointment";
import RightBar from "./components/sidebar/RightBar";

export default function App() {
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
      );
      const data = await res.json();
      setDoctor(data[0]);
    })();
  }, []);

  return (
    <div className="flex h-screen">
      {doctor && <Sidebar doctor={doctor} />}

      <div className="flex-1 bg-gray-200 h-full">
        <div className="h-14 flex items-center gap-3 p-2 px-6">
          <div>
            <i className="fa-regular fa-user text-blue-600"></i>
          </div>
          <div className="font-bold text-lg flex-1">Diane Cooper</div>
          <div>
            <input
              className="rounded-full border-2 border-gray-400 py-1 px-4 bg-gray-200"
              type="text"
              placeholder="search"
            />
          </div>
          <div>
            <i className="fa-solid fa-circle-plus text-blue-600 text-3xl"></i>
          </div>
          <div>
            <i className="fa-solid fa-bell text-xl text-gray-600"></i>
          </div>
        </div>
        <div className="h-14 flex items-center gap-3 p-2 px-6">
          <div className="flex-1">
            <span>Patient List</span>
            <i className="fa-solid fa-greater-than text-sm text-gray-400 mx-4"></i>
            <span>Diane Cooper</span>
          </div>
          <div className="bg-white p-2 px-3 rounded text-gray-600 text-center">
            <i className="fa-solid fa-print"></i>
          </div>
          <div className="bg-white p-2 rounded text-gray-600 text-center">
            <i className="fa-solid fa-pen-to-square"></i> Edit Patient
          </div>
        </div>

        <div className="p-2 grid grid-cols-12 gap-2 max-h-full">
          <div className="col-span-8">
            <Routes>
              <Route
                path="/overview"
                element={<h1 className="font-bold h-72">overview</h1>}
              />
              <Route
                path="/calendar"
                element={<h1 className="font-bold h-72">calendar</h1>}
              />
              <Route
                path="/patient-list"
                element={
                  <>
                    <PatientDetails />
                    <Appointment />
                  </>
                }
              />
              <Route
                path="/messages"
                element={<h1 className="font-bold h-72">messages</h1>}
              />
              <Route
                path="/payment-information"
                element={
                  <h1 className="font-bold h-72">payment-information</h1>
                }
              />
              <Route
                path="/settings"
                element={<h1 className="font-bold h-72">settings</h1>}
              />
            </Routes>
          </div>
          {doctor && <RightBar doctor={doctor} />}
        </div>
      </div>
    </div>
  );
}
