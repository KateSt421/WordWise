import { createContext, useState, useEffect } from "react";

const API_URL = "http://itgirlschool.justmakeit.ru/api/words";

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [learnedWords, setLearnedWords] = useState({});
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const fetchWords = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      setWords(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addWord = async (newWord) => {
    try {
      const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          english: newWord.english,
          transcription: newWord.transcription,
          russian: newWord.russian,
          tags: newWord.tags || "",
          tags_json: newWord.tags || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add word");
      }

      await fetchWords(); // Обновляем список после добавления
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateWord = async (id, updatedWord) => {
    try {
      const response = await fetch(`${API_URL}/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          english: updatedWord.english,
          transcription: updatedWord.transcription,
          russian: updatedWord.russian,
          tags: updatedWord.tags || "",
          tags_json: updatedWord.tags || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update word");
      }

      await fetchWords(); // Обновляем список после изменения
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteWord = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete word");
      }

      await fetchWords();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);
  const markWordAsLearned = (wordId) => {
    if (!learnedWords[wordId]) {
      setLearnedWords((prev) => ({
        ...prev,
        [wordId]: true,
      }));
      setLearnedWordsCount((prev) => prev + 1);
    }
  };

  return (
    <WordContext.Provider
      value={{
        words,
        isLoading,
        error,
        addWord,
        updateWord,
        deleteWord,
        fetchWords,
        learnedWords,
        learnedWordsCount,
        markWordAsLearned,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
