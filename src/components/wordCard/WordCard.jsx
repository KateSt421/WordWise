import { useEffect, useRef } from "react";
import Button from "../buttons/Button";
import "./wordCard.css";

const WordCard = ({
  word,
  showTranslation,
  onShowTranslation,
  onWordLearned,
}) => {
  const showButtonRef = useRef(null);

  useEffect(() => {
    if (showButtonRef.current && !showTranslation) {
      showButtonRef.current.focus();
    }
  }, [word, showTranslation]);

  const handleShowTranslation = () => {
    if (!showTranslation) {
      onShowTranslation();
      onWordLearned();
    }
  };

  return (
    <div className="word-card">
      <h2>{word.english}</h2>
      <p>{word.transcription}</p>
      {showTranslation ? (
        <p>{word.russian}</p>
      ) : (
        <Button
          ref={showButtonRef}
          onClick={handleShowTranslation}
          nameButton={"Show Translation"}
          typeButton={"show"}
        />
      )}
    </div>
  );
};

export default WordCard;
