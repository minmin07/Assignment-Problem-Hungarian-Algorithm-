import React, { useState } from "react";

function Timetable() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];
  const [schedule, setSchedule] = useState(
    Array(days.length).fill(Array(times.length).fill(""))
  );

  const handleInputChange = (dayIndex, timeIndex, value) => {
    const newSchedule = schedule.map((day, d) =>
      d === dayIndex
        ? day.map((task, t) => (t === timeIndex ? value : task))
        : day
    );
    setSchedule(newSchedule);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Timetable Scheduler</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-200">Time</th>
            {days.map((day, index) => (
              <th key={index} className="p-2 border bg-gray-200">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, timeIndex) => (
            <tr key={timeIndex}>
              <td className="p-2 border bg-gray-100">{time}</td>
              {days.map((day, dayIndex) => (
                <td key={dayIndex} className="p-2 border">
                  <input
                    type="text"
                    value={schedule[dayIndex][timeIndex]}
                    onChange={(e) => handleInputChange(dayIndex, timeIndex, e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
