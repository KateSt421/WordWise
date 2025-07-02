import { useState, useEffect, useCallback } from "react";
import Button from "../buttons/Button";
import Modal from "../modal/Modal";

const Word = ({ word, onEdit, onDelete, isEditing, onSave, onCancel }) => {
  const [tempWord, setTempWord] = useState(word.english);
  const [tempTranscription, setTempTranscription] = useState(
    word.transcription
  );
  const [tempTranslation, setTempTranslation] = useState(word.russian);
  const [tempTags, setTempTags] = useState(word.tags);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Используем useCallback для создания стабильной функции
  const validateFields = useCallback(() => {
    const newErrors = {};
    if (!tempWord.trim()) newErrors.word = true;
    if (!tempTranscription.trim()) newErrors.transcription = true;
    if (!tempTranslation.trim()) newErrors.translation = true;
    if (!tempTags.trim()) newErrors.tags = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [tempWord, tempTranscription, tempTranslation, tempTags]);

  useEffect(() => {
    if (isEditing === word.id) {
      validateFields();
    }
  }, [
    tempWord,
    tempTranscription,
    tempTranslation,
    tempTags,
    isEditing,
    validateFields,
    word.id,
  ]);

  const handleSave = () => {
    if (validateFields()) {
      onSave(word.id, tempWord, tempTranscription, tempTranslation, tempTags);
      console.log("Сохранено:", {
        english: tempWord,
        transcription: tempTranscription,
        russian: tempTranslation,
        tags: tempTags,
      });
    } else {
      const emptyFields = Object.keys(errors)
        .map((field) => {
          switch (field) {
            case "word":
              return "Слово";
            case "transcription":
              return "Транскрипция";
            case "translation":
              return "Перевод";
            case "tags":
              return "Теги";
            default:
              return field;
          }
        })
        .join(", ");

      setErrorMessage(`Пожалуйста, заполните следующие поля: ${emptyFields}`);
      setShowModal(true);
    }
  };

  const getInputClass = (field) => (errors[field] ? "error-input" : "");

  return (
    <tr>
      <td>{word.index + 1}</td>
      {isEditing === word.id ? (
        <>
          <td>
            <input
              className={getInputClass("word")}
              value={tempWord}
              onChange={(e) => setTempWord(e.target.value)}
            />
          </td>
          <td>
            <input
              className={getInputClass("transcription")}
              value={tempTranscription}
              onChange={(e) => setTempTranscription(e.target.value)}
            />
          </td>
          <td>
            <input
              className={getInputClass("translation")}
              value={tempTranslation}
              onChange={(e) => setTempTranslation(e.target.value)}
            />
          </td>
          <td>
            <input
              className={getInputClass("tags")}
              value={tempTags}
              onChange={(e) => setTempTags(e.target.value)}
            />
          </td>
          <td>
            <Button
              onClick={handleSave}
              nameButton={"Save"}
              typeButton={Object.keys(errors).length > 0 ? "disabled" : "save"}
              disabled={Object.keys(errors).length > 0}
            />
            <Button
              onClick={() => onCancel()}
              nameButton={"Cancel"}
              typeButton={"cancel"}
            />
          </td>
        </>
      ) : (
        <>
          <td>{word.english}</td>
          <td>{word.transcription}</td>
          <td>{word.russian}</td>
          <td>{word.tags}</td>
          <td>
            <Button
              onClick={() => onEdit(word.id)}
              nameButton={"Edit"}
              typeButton={"edit"}
            />
            <Button
              onClick={() => onDelete(word.id)}
              nameButton={"Delete"}
              typeButton={"delete"}
            />
          </td>
        </>
      )}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="error-modal">
          <h3>Ошибка редактирования</h3>
          <p>{errorMessage}</p>
          <Button
            onClick={() => setShowModal(false)}
            nameButton="Понятно"
            typeButton="primary"
          />
        </div>
      </Modal>
    </tr>
  );
};

export default Word;
