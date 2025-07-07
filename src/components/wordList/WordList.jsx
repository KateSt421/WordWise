import { useState, useContext } from "react";
import Word from "../word/Word";
import { WordContext } from "../../context/WordContext";
import "../wordList/wordList.css";

const WordList = () => {
  const { words, updateWord, deleteWord } = useContext(WordContext);
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleSave = (id, english, transcription, russian, tags) => {
    updateWord(id, { english, transcription, russian, tags })
      .then(() => setIsEditing(null))
      .catch(() => {});
  };

  const handleDelete = (id) => {
    deleteWord(id).catch(() => {});
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  return (
    <div className="word-list-container">
      <table className="table" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Теги</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <Word
              key={word.id}
              word={word}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isEditing={isEditing}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
