import { useState } from "react";
import { HiX } from "react-icons/hi"; // For Close Icon

const Toast = ({ title, message, variant, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle auto hide after a duration
  setTimeout(() => {
    if (isVisible) {
      setIsVisible(false);
      if (onClose) onClose();
    }
  }, 3000); // 3 seconds duration

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 max-w-xs w-full p-4 rounded-lg shadow-lg ${
        variant === "success"
          ? "bg-green-600 text-white"
          : "bg-red-600 text-white"
      }`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p>{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          className="text-white ml-2"
        >
          <HiX className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
