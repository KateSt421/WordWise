import { useState } from 'react';
import Button from '../buttons/Button';
import './wordForm.css';

const WordForm = ({ onAddNewWord }) => {
    const [newWord, setNewWord] = useState("");
    const [newTranscription, setNewTranscription] = useState("");
    const [newTranslation, setNewTranslation] = useState("");
    const [newTags, setNewTags] = useState("");

    const handleAddNewWord = () => {
        const newId = Date.now().toString();
        const newWordObject = {
            id: newId,
            english: newWord,
            transcription: newTranscription,
            russian: newTranslation,
            tags: newTags
        };
        onAddNewWord(newWordObject);
        setNewWord("");
        setNewTranscription("");
        setNewTranslation("");
        setNewTags("");
    };

    return (
        <div className='add-box'>
            <h2>Добавить новое слово</h2>
             <input 
                placeholder="Слово" 
                value={newWord} 
                onChange={(e) => setNewWord(e.target.value)} 
            />
            <input 
                placeholder="Транскрипция" 
                value={newTranscription} 
                onChange={(e) => setNewTranscription(e.target.value)} 
            />
            <input 
                placeholder="Перевод" 
                value={newTranslation} 
                onChange={(e) => setNewTranslation(e.target.value)} 
            />
            <input 
                placeholder="Теги" 
                value={newTags} 
                onChange={(e) => setNewTags(e.target.value)} 
            />
            <Button onClick={handleAddNewWord} nameButton={"Add"} typeButton={"add"}/>
        </div>
    );
};

export default WordForm;
