import React from "react";
import { useState, useEffect } from "react";

export const Notification = ({ id, type, message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      if (!isVisible) {
        const timer = setTimeout(() => {
        //   onClose(id);
        }, 1000); // Delay before removing the notification (1 second)
  
        return () => clearTimeout(timer);
      }
    }, [isVisible, id, onClose]);
  
    let bgColorClass = "";
    let textColorClass = "";
  
    switch (type) {
      case "success":
        bgColorClass = "bg-green-500";
        textColorClass = "text-white";
        break;
      case "error":
        bgColorClass = "bg-red-500";
        textColorClass = "text-white";
        break;
      case "warning":
        bgColorClass = "bg-yellow-500";
        textColorClass = "text-black";
        break;
      default:
        bgColorClass = "bg-blue-500";
        textColorClass = "text-white";
    }
  
    const handleClose = () => {
      setIsVisible(false);
    };
  
    return (
      <>
        {isVisible && (
          <div className={`fixed bottom-0 right-0 m-4 p-4 ${bgColorClass} ${textColorClass} rounded shadow-md`} style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out", transform: "translateX(0)", opacity: "1" }}>
            <div>{message}</div>
            <button className="text-sm mt-2" onClick={handleClose}>Close</button>
          </div>
        )}
  
        {!isVisible && (
          <div className={`fixed bottom-0 right-0 m-4 p-4 ${bgColorClass} ${textColorClass} rounded shadow-md`} style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out", transform: "translateX(100%)", opacity: "0" }}>
            <div>{message}</div>
            <button className="text-sm mt-2" onClick={handleClose}>Close</button>
          </div>
        )}
      </>
    );
  };
  