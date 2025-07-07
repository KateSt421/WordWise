import { useEffect, useRef } from "react";
import Button from "../buttons/Button";
import "./wordCard.css";

const WordCard = ({ word, showTranslation, onShowTranslation }) => {
  const showButtonRef = useRef(null);

  useEffect(() => {
    if (showButtonRef.current && !showTranslation) {
      const timer = setTimeout(() => {
        showButtonRef.current.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [word, showTranslation]);

  return (
    <div className="word-card">
      <h2>{word.english}</h2>
      <p>{word.transcription}</p>
      {showTranslation ? (
        <p className="translation">{word.russian}</p>
      ) : (
        <Button
          ref={showButtonRef}
          onClick={onShowTranslation}
          nameButton={"Показать перевод"}
          typeButton={"primary"}
          className="show-button"
        />
      )}
    </div>
  );
};

export default WordCard;
