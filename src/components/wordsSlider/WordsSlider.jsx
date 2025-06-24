import { useState, useEffect, useRef } from "react";
import WordCard from "../wordCard/WordCard";
import Button from "../buttons/Button";
import "./wordsSlider.css";

const WordSlider = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);
  const [shownTranslations, setShownTranslations] = useState({});
  const wordCardRef = useRef(null);

  const changeIndex = (newIndex, dir) => {
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
      setDirection(null);
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

  const handleShowTranslation = (wordId) => {
    if (!shownTranslations[wordId]) {
      setShownTranslations((prev) => ({
        ...prev,
        [wordId]: true,
      }));
      setLearnedWordsCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!isAnimating && wordCardRef.current) {
      const showButton = wordCardRef.current.querySelector(".show-button");
      if (showButton && !shownTranslations[words[currentIndex]?.id]) {
        setTimeout(() => {
          showButton.focus();
        }, 10);
      }
    }
  }, [currentIndex, isAnimating, shownTranslations, words]);

  return (
    <>
      <h1>Карточка слова</h1>
      <div className="word-slider">
        <Button onClick={handlePrev} nameButton={"←"} typeButton={"arrow"} />
        <div
          ref={wordCardRef}
          className={`word-card-wrapper ${
            isAnimating ? "fade-out" : "fade-in"
          } ${direction || ""}`}
        >
          <WordCard
            word={words[currentIndex]}
            showTranslation={
              shownTranslations[words[currentIndex]?.id] || false
            }
            onShowTranslation={() =>
              handleShowTranslation(words[currentIndex]?.id)
            }
          />
        </div>
        <Button onClick={handleNext} nameButton={"→"} typeButton={"arrow"} />
      </div>
      <div className="learned-words-counter">
        Изучено слов за тренировку: {learnedWordsCount}
      </div>
    </>
  );
};

export default WordSlider;
