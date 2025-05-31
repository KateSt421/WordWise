import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from "react";
import wordsAll from './data';
import WordForm from './components/wordForm/WordForm';
import WordList from './components/wordList/WordList';
import WordsSlider from './components/wordsSlider/WordsSlider';

const App = () => {
    const [words, setWords] = useState(wordsAll);
    const [isEditing, setIsEditing] = useState(null);

    const handleEdit = (id) => {
        setIsEditing(id);
    };

    const handleSave = (id, newWord, newTranscription, newTranslation, newTags) => {
        setWords(words.map(word => 
            word.id === id ? { ...word, english: newWord, transcription: newTranscription, russian: newTranslation, tags: newTags } : word
        ));
        setIsEditing(null);
    };

    const handleDelete = (id) => {
        setWords(words.filter(word => word.id !== id));
    };

    const handleAddNewWord = (newWord) => {
        setWords([...words, newWord]);
    };

    const handleCancel = () => {
        setIsEditing(null);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <h1>Список английских слов</h1>
                <WordList 
                    words={words} 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} 
                    isEditing={isEditing} 
                    onSave={handleSave} 
                    onCancel={handleCancel} 
                />
                <WordsSlider words={words} />
                <WordForm onAddNewWord={handleAddNewWord} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
