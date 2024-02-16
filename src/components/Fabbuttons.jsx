import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
export default function FabButtons({ cv, setCv, handleMoreExample }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleReset = () => {
    const emptyCv = JSON.parse(JSON.stringify(cv));

    const resetObject = (obj) => {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          resetObject(obj[key]);
        } else {
          obj[key] = "";
        }
      }
    };

    resetObject(emptyCv);
    setCv(emptyCv);
  };
  const handlePrint = () => {
    const input = document.getElementById("divToPrint");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // A4 size page of PDF
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const widthRatio = width / imgWidth;
      const heightRatio = height / imgHeight;
      const ratio = widthRatio < heightRatio ? widthRatio : heightRatio;
      const centeredWidth = (width - imgWidth * ratio) / 2;
      const centeredHeight = (height - imgHeight * ratio) / 2;
      pdf.addImage(
        imgData,
        "JPEG",
        centeredWidth,
        centeredHeight,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Resume.pdf");
    });
  };

  return (
    <div>
      <button className="fab" onClick={toggleSubmenu}>
        +
      </button>
      {showSubmenu && (
        <div className="submenu">
          <button onClick={handleMoreExample}>More example</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handlePrint}>Print</button>
        </div>
      )}
    </div>
  );
}
