import React from "react";
import { useState, useEffect } from "react";
import './Notification.css'
import '../index.css'


const TrashIcon = () => {
  return<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
</svg>

}

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
          <div className={`notification-badge w-56 gap-4  flex  m-2 p-2 ${bgColorClass} ${textColorClass} rounded shadow-md`} style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out", transform: "translateX(0)", opacity: "1" }}>
            <div>{message}</div>
            <button onClick={handleClose} ><TrashIcon /></button>
          </div>
        )}
  
        {!isVisible && (
          <div className={`notification-badge w-56 gap4  flex  m-2 p-2 ${bgColorClass} ${textColorClass} rounded shadow-md`} style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out", transform: "translateX(100%)", opacity: "0" }}>
            <div>{message}</div>
            <button onClick={handleClose} ><TrashIcon /></button>
          </div>
        )}
      </>
    );
  };
  