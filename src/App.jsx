import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WordForm from "./components/wordForm/WordForm";
import WordList from "./components/wordList/WordList";
import WordsSlider from "./components/wordsSlider/WordsSlider";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import ErrorNotification from "./components/errorNotification/ErrorNotification";
import { wordStore } from "./wordStore/wordStore";

const App = observer(() => {
  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleSave = (id, english, transcription, russian, tags) => {
    wordStore
      .updateWord(id, { english, transcription, russian, tags })
      .then(() => setIsEditing(null))
      .catch(() => {});
  };

  const handleDelete = (id) => {
    wordStore.deleteWord(id).catch(() => {});
  };

  const handleAddNewWord = (newWord) => {
    wordStore.addWord(newWord).catch(() => {});
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  return (
    <Router>
      <div>
        <Header />
        <ErrorNotification />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <WordForm onAddNewWord={handleAddNewWord} />
                <h2>Список английских слов</h2>
                <LoadingSpinner />
                <WordList
                  words={wordStore.words}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  isEditing={isEditing}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              </div>
            }
          />
          <Route
            path="/game"
            element={
              <div className="container">
                <WordsSlider words={wordStore.words} />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="container">
                <ErrorPage />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
});

export default App;
