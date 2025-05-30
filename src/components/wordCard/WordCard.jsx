import Button from '../buttons/Button';
import './wordCard.css';

const WordCard = ({ word, showTranslation, onShowTranslation }) => {
    return (
        <div className="word-card">
            <h2>{word.english} <span><br />{word.transcription}</span></h2>
            {showTranslation ? (
                <p>{word.russian}</p>
            ) : (
                <Button onClick={onShowTranslation} nameButton={"Show"} typeButton={"show"} />
            )}
        </div>
    );
};

export default WordCard;