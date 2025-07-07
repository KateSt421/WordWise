import { observer } from "mobx-react-lite";
import { wordStore } from "../../wordStore/wordStore";
import "../errorNotification/errorNotification.css";

const ErrorNotification = observer(() => {
  if (!wordStore.error) return null;

  return (
    <div className="error-notification">
      <div className="error-content">
        <span className="error-message">{wordStore.error}</span>
      </div>
    </div>
  );
});

export default ErrorNotification;
