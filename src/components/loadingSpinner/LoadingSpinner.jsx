import { observer } from "mobx-react-lite";
import { wordStore } from "../../wordStore/wordStore";
import "../loadingSpinner/loadingSpinner.css";

const LoadingSpinner = observer(() => {
  if (!wordStore.isLoading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
});

export default LoadingSpinner;
