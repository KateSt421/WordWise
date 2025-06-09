import { useState } from "react";
import WordCard from "../wordCard/WordCard";
import Button from "../buttons/Button";
import "./wordsSlider.css";

const WordSlider = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);

  const changeIndex = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
      setDirection(null);
      setShowTranslation(false);
    }, 500);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + words.length) % words.length;
    changeIndex(newIndex, "prev");
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % words.length;
    changeIndex(newIndex, "next");
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <>
      <h1>Карточка слова</h1>
      <div className="word-slider">
        <Button onClick={handlePrev} nameButton={"←"} typeButton={"arrow"} />
        <div
          className={`word-card-wrapper ${
            isAnimating ? "fade-out" : "fade-in"
          } ${direction || ""}`}
        >
          <WordCard
            word={words[currentIndex]}
            showTranslation={showTranslation}
            onShowTranslation={handleShowTranslation}
          />
        </div>
        <Button onClick={handleNext} nameButton={"→"} typeButton={"arrow"} />
      </div>
    </>
  );
};

export default WordSlider;
