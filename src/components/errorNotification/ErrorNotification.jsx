import { useContext } from "react";
import { WordContext } from "../../context/WordContext";
import "../errorNotification/errorNotification.css";

const ErrorNotification = () => {
  const { error } = useContext(WordContext);

  if (!error) return null;

  return (
    <div className="error-notification">
      <div className="error-content">
        <span className="error-message">{error}</span>
      </div>
    </div>
  );
};

export default ErrorNotification;
