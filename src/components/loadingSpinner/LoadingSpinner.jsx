import { useContext } from "react";
import { WordContext } from "../../context/WordContext";
import "../loadingSpinner/loadingSpinner.css";

const LoadingSpinner = () => {
  const { isLoading } = useContext(WordContext);

  if (!isLoading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
