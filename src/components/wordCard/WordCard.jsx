import { useState } from 'react';
import Button from '../buttons/Button';
import './wordCard.css';

const WordCard = ({ word }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslation = () => {
        setShowTranslation(true);
    };

    return (
        <div className="word-card">
            <h2>{word.english} <span><br />{word.transcription}</span></h2>
            {showTranslation ? (
                <p>{word.russian}</p>
            ) : (
                <Button onClick={handleShowTranslation} nameButton={"Show"} typeButton={"show"}/>
            )}
        </div>
    );
};

export default WordCard;