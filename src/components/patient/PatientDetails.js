import React, { useState, useEffect } from "react";

export default function PatientDetails() {
  const [patient, setPatient] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
      );
      const data = await res.json();
      setPatient(data[0]);
    })();
  }, []);
  return !patient ? null : (
    <div className="flex gap-1">
      <div className="h-72 w-1/3 rounded-md bg-white flex flex-col gap-2 items-center justify-center">
        <div>
          <img
            className="rounded-full"
            src="https://i.pravatar.cc/90?img=36"
            alt="profile-pic"
          />
        </div>
        <h4 className="font-bold text-2xl">{patient.name}</h4>
        {/* <p>{patient["e-email"]}</p> */}
        <p className="text-sm text-gray-400">diane.cooper@example.com</p>
        <div className="flex gap-8">
          <div className="w-14 text-center">
            <p className="font-bold text-2xl">{patient.Past}</p>
            <p className="text-sm text-gray-400">Past</p>
          </div>
          <span className="w-0.5 bg-gray-300"></span>
          <div className="w-14 text-center">
            <p className="font-bold text-2xl">{patient.Upcoming}</p>
            <p className="text-sm text-gray-400">Upcoming</p>
          </div>
        </div>

        <button className="bg-white border-2 border-gray-200 w-4/5 py-1 font-bold">
          Send Message
        </button>
      </div>
      <div className="h-72 w-2/3 rounded-md bg-white grid grid-cols-3 gap-2 p-4">
        <SmallCard title="Gender" value={patient.Gender} />
        <SmallCard title="Birthday" value={patient.Birthday} />
        <SmallCard title="Phone Number" value={patient["Phone Number"]} />
        <SmallCard title="Street Address" value={patient["Street Address"]} />
        <SmallCard title="City" value={"city name"} />
        <SmallCard title="ZIP Code" value={patient["ZIP Code"]} />
        <SmallCard title="Member Status" value={patient["Member Status"]} />
        <SmallCard title="Register Date" value={patient["Register Date"]} />
      </div>
    </div>
  );
}

function SmallCard({ title, value }) {
  return (
    <div className="w-full h-20 p-3 border-b-2 border-gray-200">
      <p className="text-gray-500 font-semibold">{title}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}
