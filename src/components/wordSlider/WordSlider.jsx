import { useState } from 'react';
import WordCard from '../wordCard/WordCard';
import Button from '../buttons/Button';
import './wordSlider.css';

const WordSlider = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="word-slider">
      <Button onClick={handlePrev} nameButton={"←"} typeButton={"arrow"} />
      {words.length > 1 ? (
        <WordCard
          word={words[currentIndex]}
          className={currentIndex !== 0 ? 'animate' : ''}
        />
      ) : (
        <WordCard word={words[0]} className="animate" />
      )}
      <Button onClick={handleNext} nameButton={"→"} typeButton={"arrow"} />
    </div>
  );
};
export default WordSlider;
