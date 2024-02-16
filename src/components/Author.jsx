import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Author() {
  return (
    <div className="author">
      <a
        href="https://github.com/Hwent/ReactApp/tree/main/cvApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={40} />
      </a>
      <p>Wentao</p>
    </div>
  );
}
