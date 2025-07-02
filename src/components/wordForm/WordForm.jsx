import { useState } from "react";
import Button from "../buttons/Button";
import "./wordForm.css";
import Modal from "../modal/Modal";

const WordForm = ({ onAddNewWord }) => {
  const [newWord, setNewWord] = useState("");
  const [newTranscription, setNewTranscription] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [newTags, setNewTags] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateFields = () => {
    const newErrors = {};
    if (!newWord.trim()) newErrors.word = true;
    if (!newTranscription.trim()) newErrors.transcription = true;
    if (!newTranslation.trim()) newErrors.translation = true;
    if (!newTags.trim()) newErrors.tags = true;
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const emptyFields = Object.keys(newErrors)
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
      return false;
    }
    return true;
  };

  const handleAddNewWord = () => {
    if (validateFields()) {
      const newId = Date.now().toString();
      const newWordObject = {
        id: newId,
        english: newWord,
        transcription: newTranscription,
        russian: newTranslation,
        tags: newTags,
      };
      onAddNewWord(newWordObject);
      resetFields();
    }
  };

  const resetFields = () => {
    setNewWord("");
    setNewTranscription("");
    setNewTranslation("");
    setNewTags("");
    setErrors({});
  };

  const getInputClass = (field) => (errors[field] ? "error-input" : "");

  const handleInputFocus = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
  };

  const isFormValid = newWord && newTranscription && newTranslation && newTags;

  return (
    <div className="add-box">
      <h2>Добавить новое слово</h2>
      <div className="form-box">
        <form>
          <input
            className={getInputClass("word")}
            placeholder="Слово"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            onFocus={() => handleInputFocus("word")}
          />
          <input
            className={getInputClass("transcription")}
            placeholder="Транскрипция"
            value={newTranscription}
            onChange={(e) => setNewTranscription(e.target.value)}
            onFocus={() => handleInputFocus("transcription")}
          />
          <input
            className={getInputClass("translation")}
            placeholder="Перевод"
            value={newTranslation}
            onChange={(e) => setNewTranslation(e.target.value)}
            onFocus={() => handleInputFocus("translation")}
          />
          <input
            className={getInputClass("tags")}
            placeholder="Теги"
            value={newTags}
            onChange={(e) => setNewTags(e.target.value)}
            onFocus={() => handleInputFocus("tags")}
          />
        </form>
        <Button
          onClick={handleAddNewWord}
          nameButton={"Add"}
          typeButton={isFormValid ? "add" : "disabled"}
          disabled={!isFormValid}
        />
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="error-modal">
          <h3>Ошибка</h3>
          <p className="error-message">{errorMessage}</p>
          <Button
            onClick={() => setShowModal(false)}
            nameButton="OK"
            typeButton="primary"
          />
        </div>
      </Modal>
    </div>
  );
};

export default WordForm;
