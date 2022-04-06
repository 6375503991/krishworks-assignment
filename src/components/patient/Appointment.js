import React, { useState, useEffect } from "react";

export default function Appointment() {
  const initial = Array(3).fill(false);
  initial[0] = true;
  const [select, setSelect] = useState(initial);
  const [appointments, setAppointments] = useState(null);

  const normal = `p-2 px-6 rounded font-semibold cursor-pointer`;
  const selected = `${normal} bg-white text-blue-600`;

  const handleClick = (e) => {
    const temp = Array(3).fill(false);
    temp[e.currentTarget.id] = true;
    setSelect(temp);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
      );
      const data = await res.json();
      setAppointments(data[0]);
    })();
  }, []);

  const keys = ["Upcoming Appointments", "Post Appointment", "Medical Records"];

  return (
    <div className="bg-white rounded h-80 mt-1 p-2">
      <div className="flex bg-gray-200 rounded p-1 gap-2">
        <div
          id="0"
          className={select[0] ? selected : normal}
          onClick={handleClick}
        >
          Upcoming Appoinments
        </div>
        <div
          id="1"
          className={select[1] ? selected : normal}
          onClick={handleClick}
        >
          Past Appoinments
        </div>
        <div
          id="2"
          className={select[2] ? selected : normal}
          onClick={handleClick}
        >
          Medical Records
        </div>
      </div>

      <div className="bg-gray-200 mt-4 h-60 rounded">
        {select[0] && appointments && (
          <>
            <AppointmentCard appointment={appointments[keys[0]]} />
            <AppointmentCard appointment={appointments[keys[0]]} />
          </>
        )}
        {select[1] && appointments && (
          <AppointmentCard appointment={appointments[keys[1]]} />
        )}
      </div>
    </div>
  );
}

function AppointmentCard({ appointment }) {
  return (
    <div className="p-2">
      <div className="bg-white p-3 grid grid-cols-8 items-center">
        <div className="col-span-2">
          <div className="font-bold text-xl">{appointment.Date}</div>
          <div>{appointment.Time}</div>
        </div>
        <div className="col-span-2">
          <div>Treatment</div>
          <div className="font-bold">{appointment.Treatment}</div>
        </div>
        <div className="col-span-2">
          <div>Dentist</div>
          <div className="font-bold">{appointment.Dentist}</div>
        </div>
        <div className="col-span-1">
          <div>Nurse</div>
          <div className="font-bold">{appointment.Nurse}</div>
        </div>
        <div className="col-span-1 font-bold text-blue-600">
          <i className="fa-solid fa-note-sticky"></i> Note
        </div>
      </div>
    </div>
  );
}
