import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function Experience({ cv, setCv }) {
  const [isPresent, setIsPresent] = useState(cv.education[0].end === "Present");

  const [startDate, setStartDate] = useState(
    new Date(
      cv.experience[0].start.split("/")[1],
      cv.experience[0].start.split("/")[0] - 1
    )
  );
  const [endDate, setEndDate] = useState(
    cv.experience[0].end === "Present"
      ? new Date()
      : new Date(
          cv.experience[0].end.split("/")[1],
          cv.experience[0].end.split("/")[0] - 1
        )
  );

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setCv((draft) => {
      draft.experience[0][field] = value;
    });
  };

  const handleStartDateChange = (date) => {
    if (date) {
      setStartDate(date);
      setCv((draft) => {
        draft.experience[0].start = `${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
      });
    }
  };

  const handleEndDateChange = (date) => {
    if (date && date.getFullYear() <= new Date().getFullYear()) {
      setEndDate(date);
      setCv((draft) => {
        draft.experience[0].end = `${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
      });
    }
  };

  const handlePresentChange = (e) => {
    setIsPresent(e.target.checked);
    setCv((draft) => {
      draft.experience[0].end = e.target.checked
        ? "Present"
        : `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    });
  };

  return (
    <div>
      <h2>Experience</h2>
      <form action="" method="post">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={cv.experience[0].company}
          onChange={(e) => handleInputChange(e, "company")}
        />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={cv.experience[0].position}
          onChange={(e) => handleInputChange(e, "position")}
        />
        <DatePicker
          className="myDatePicker"
          onChange={handleStartDateChange}
          value={startDate}
          format="MM/y"
          maxDetail="year"
        />
        <DatePicker
          className="myDatePicker"
          onChange={handleEndDateChange}
          value={isPresent ? null : endDate}
          format="MM/y"
          maxDetail="year"
          minDate={startDate}
          disabled={isPresent}
        />
        <label htmlFor="present">Present</label>
        <input
          type="checkbox"
          id="present"
          checked={isPresent}
          onChange={handlePresentChange}
        />
      </form>
      <div className="divider"></div>
    </div>
  );
}
