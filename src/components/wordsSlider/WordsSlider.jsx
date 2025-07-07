import { useState, useEffect, useRef } from "react";
import WordCard from "../wordCard/WordCard";
import Button from "../buttons/Button";
import "./wordsSlider.css";
import { observer } from "mobx-react-lite";
import { wordStore } from "../../wordStore/wordStore";

const WordSlider = observer(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
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
    const newIndex =
      (currentIndex - 1 + wordStore.words.length) % wordStore.words.length;
    changeIndex(newIndex, "prev");
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % wordStore.words.length;
    changeIndex(newIndex, "next");
  };

  const handleShowTranslation = (wordId) => {
    wordStore.markWordAsLearned(wordId);
  };

  useEffect(() => {
    if (!isAnimating && wordCardRef.current) {
      const showButton = wordCardRef.current.querySelector(".show-button");
      if (
        showButton &&
        !wordStore.learnedWords[wordStore.words[currentIndex]?.id]
      ) {
        setTimeout(() => {
          showButton.focus();
        }, 10);
      }
    }
  }, [currentIndex, isAnimating, wordStore.learnedWords, wordStore.words]);

  if (!wordStore.words.length) {
    return <div className="no-words">Нет слов для изучения</div>;
  }

  return (
    <>
      <h1>Карточка слов</h1>
      <div className="word-slider">
        <Button onClick={handlePrev} nameButton={"←"} typeButton={"arrow"} />
        <div
          ref={wordCardRef}
          className={`word-card-wrapper ${
            isAnimating ? "fade-out" : "fade-in"
          } ${direction || ""}`}
        >
          <WordCard
            word={wordStore.words[currentIndex]}
            showTranslation={
              wordStore.learnedWords[wordStore.words[currentIndex]?.id] || false
            }
            onShowTranslation={() =>
              handleShowTranslation(wordStore.words[currentIndex]?.id)
            }
          />
        </div>
        <Button onClick={handleNext} nameButton={"→"} typeButton={"arrow"} />
      </div>
      <div className="learned-words-counter">
        Изучено слов за тренировку: {wordStore.learnedWordsCount}
      </div>
    </>
  );
});

export default WordSlider;
