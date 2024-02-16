import React, { useState } from "react";
import DatePicker from "react-date-picker";

export default function Education({ cv, setCv }) {
  const [startDate, setStartDate] = useState(
    new Date(cv.education[0].start, 0)
  );
  const [endDate, setEndDate] = useState(
    cv.education[0].end === "Present"
      ? new Date()
      : new Date(cv.education[0].end, 0)
  );
  const [isPresent, setIsPresent] = useState(cv.education[0].end === "Present");

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setCv((draft) => {
      draft.education[0][field] = value;
    });
  };

  const handleStartDateChange = (date) => {
    if (date) {
      setStartDate(date);
      setCv((draft) => {
        draft.education[0].start = date.getFullYear();
      });
    }
  };

  const handleEndDateChange = (date) => {
    if (date && date.getFullYear() <= new Date().getFullYear()) {
      setEndDate(date);
      setCv((draft) => {
        draft.education[0].end = date.getFullYear();
      });
    }
  };

  const handlePresentChange = (e) => {
    setIsPresent(e.target.checked);
    setCv((draft) => {
      draft.education[0].end = e.target.checked
        ? "Present"
        : new Date().getFullYear();
    });
  };

  return (
    <div>
      <h2>Education</h2>
      <form action="" method="post">
        <label htmlFor="school">Institution:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={cv.education[0].school}
          onChange={(e) => handleInputChange(e, "school")}
        />
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={cv.education[0].degree}
          onChange={(e) => handleInputChange(e, "degree")}
        />
        <DatePicker
          className="myDatePicker"
          onChange={handleStartDateChange}
          value={startDate}
          format="y"
          maxDetail="decade"
        />
        <DatePicker
          className="myDatePicker"
          onChange={handleEndDateChange}
          value={isPresent ? null : endDate}
          format="y"
          maxDetail="decade"
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
