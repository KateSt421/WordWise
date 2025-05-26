import { useState } from 'react';
import Button from '../buttons/Button';

const Word = ({ word, onEdit, onDelete, isEditing, onSave, onCancel }) => {
    const [tempWord, setTempWord] = useState(word.english);
    const [tempTranscription, setTempTranscription] = useState(word.transcription);
    const [tempTranslation, setTempTranslation] = useState(word.russian);
    const [tempTags, setTempTags] = useState(word.tags);

    const handleSave = () => {
        onSave(word.id, tempWord, tempTranscription, tempTranslation, tempTags);
    };

    return (
        <tr>
            <td>{word.index + 1}</td>
            {isEditing === word.id ? (
                <>
                    <td><input value={tempWord} onChange={(e) => setTempWord(e.target.value)} /></td>
                    <td><input value={tempTranscription} onChange={(e) => setTempTranscription(e.target.value)} /></td>
                    <td><input value={tempTranslation} onChange={(e) => setTempTranslation(e.target.value)} /></td>
                    <td><input value={tempTags} onChange={(e) => setTempTags(e.target.value)} /></td>
                    <td>
                        <Button onClick={() => handleSave()} nameButton={"Save"} typeButton={"save"}/>
                        <Button onClick={() => onCancel()}nameButton={"Cancel"} typeButton={"cancel"}/>
                    </td>
                </>
            ) : (
                <>
                    <td>{word.english}</td>
                    <td>{word.transcription}</td>
                    <td>{word.russian}</td>
                    <td>{word.tags}</td>
                    <td>
                        <Button onClick={() => onEdit(word.id)} nameButton={"Edit"} typeButton={"edit"}/>                                         
                        <Button onClick={() => onDelete(word.id)}nameButton={"Delete"} typeButton={"delete"}/>
                    </td>
                </>
            )}
        </tr>
    );
};

export default Word;
