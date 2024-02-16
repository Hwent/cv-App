import React from "react";
import {
  FaEnvelope,
  FaSchool,
  FaBriefcase,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Display({ cv, styleGeneral, styleProfile }) {
  return (
    <div className="right" id="divToPrint">
      <div className="general" style={styleGeneral}>
        <h2>{cv.general.name}</h2>
        <p>
          <FaEnvelope />
          {cv.general.email}
        </p>
        <p>
          <FaPhoneAlt />
          {cv.general.phone}
        </p>
        <p>
          <FaMapMarkerAlt />
          {cv.general.address}
        </p>
      </div>
      <div className="profile" style={styleProfile}>
        <h2>Profile</h2>
        <p>{cv.profile}</p>
        {cv.education.map((edu, index) => (
          <div key={index}>
            <h3>
              <FaSchool />
              {edu.school}
            </h3>
            <p>{edu.degree}</p>
            <p>
              {edu.start} - {edu.end}
            </p>
          </div>
        ))}

        {cv.experience.map((exp, index) => (
          <div key={index}>
            <h3>
              <FaBriefcase />
              {exp.company}
            </h3>
            <p>{exp.position}</p>
            <p>
              {exp.start} - {exp.end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
