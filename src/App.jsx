import './App.css';
import Header from './components/header/Header';
import Content  from './components/Content';
import Footer from './components/footer/Footer';
import { useState } from "react";
import EditButton from './components/buttons/EditButton';
import DeleteButton from './components/buttons/DeleteButton';
import SaveButton from './components/buttons/SaveButton';
import CanselButton from './components/buttons/CanselButton';
import AddButton from './components/buttons/AddButton';

const App = () => {
    const [words, setWords] = useState([
        {"id":"33198","english":"mother","transcription":"[mʌðə]","russian":"мама","tags":"Family","tags_json":"[\"Family\"]"},{"id":"33200","english":"aunt","transcription":"[ænt]","russian":"тётя","tags":"Family","tags_json":"[\"Family\"]"},{"id":"33208","english":"peace","transcription":"[piːs]","russian":"мир","tags":"World","tags_json":"[\"World\"]"},{"id":"33209","english":"overwhelming","transcription":"[əʊvərˈwelmɪŋ]","russian":"ошеломляющий","tags":"Adjective","tags_json":"[\"Adjective\"]"},{"id":"33211","english":"forecast","transcription":"[ˈfɔːrkæst]","russian":"прогноз","tags":"Weather","tags_json":"[\"Weather\"]"},{"id":"33229","english":"mosquito","transcription":"[məˈskiː.təʊ]","russian":"комар","tags":"Animals","tags_json":"[\"Animals\"]"},{"id":"33250","english":"tornado","transcription":"[tɔːˈneɪ.dəʊ]","russian":"торнадо","tags":"Weather","tags_json":"[\"Weather\"]"},{"id":"33317","english":"scrooge","transcription":"[skruːdʒ]","russian":"скряга","tags":"Noun","tags_json":"[\"Noun\"]"},{"id":"33367","english":"cat","transcription":"[cæt]","russian":"кот","tags":"Animals","tags_json":"[\"Animals\"]"},{"id":"33390","english":"hang out","transcription":"|ˈhæŋ ˈaʊt|","russian":"тусоваться","tags":"Verb","tags_json":"[\"Verb\"]"},{"id":"33393","english":"girl","transcription":"[ɡɜːrl]","russian":"девочка","tags":"Noun","tags_json":"[\"Noun\"]"},{"id":"33404","english":"curious","transcription":"[ ˈkjʊrɪəs ]","russian":"любопытный ","tags":"Adjective","tags_json":"[\"Adjective\"]"},{"id":"33406","english":"brother","transcription":"[brʌðə]","russian":"брат","tags":"Family","tags_json":"[\"Family\"]"},{"id":"33407","english":"wind","transcription":"[wɪnd]","russian":"ветер","tags":"Weather","tags_json":"[\"Weather\"]"},{"id":"33408","english":"rain","transcription":"[reɪn]","russian":"дождь","tags":"Weather","tags_json":"[\"Weather\"]"},{"id":"33409","english":"murky","transcription":"[mɜːki]","russian":"мрачный","tags":"Weather","tags_json":"[\"Weather\"]"},{"id":"33410","english":"red","transcription":"[rɛd]","russian":"красный","tags":"Colors","tags_json":"[\"Colors\"]"},{"id":"33411","english":"sister","transcription":"[sɪstə]","russian":"сестра","tags":"Family","tags_json":"[\"Family\"]"},
    ]);

    const [isEditing, setIsEditing] = useState(null);
    const [newWord, setNewWord] = useState("");
    const [newTranscription, setNewTranscription] = useState("");
    const [newTranslation, setNewTranslation] = useState("");
    const [newTags, setNewTags] = useState("");

    const handleEdit = (id) => {
        const wordToEdit = words.find(word => word.id === id);
        setNewWord(wordToEdit.english);
        setNewTranscription(wordToEdit.transcription);
        setNewTranslation(wordToEdit.russian);
        setNewTags(wordToEdit.tags);
        setIsEditing(id);
    };

    const handleSave = (id) => {
        setWords(words.map(word => 
            word.id === id ? { ...word, english: newWord, transcription: newTranscription, russian: newTranslation, tags: newTags } : word
        ));
        setIsEditing(null);
        setNewWord("");
        setNewTranscription("");
        setNewTranslation("");
        setNewTags("");
    };

    const handleDelete = (id) => {
        setWords(words.filter(word => word.id !== id));
    };

    const handleAddNewWord = () => {
        const newId = Date.now().toString();
        const newWordObject = {
            id: newId,
            english: newWord,
            transcription: newTranscription,
            russian: newTranslation,
            tags: newTags
        };
        setWords([...words, newWordObject]);
        setNewWord("");
        setNewTranscription("");
        setNewTranslation("");
        setNewTags("");
    };

    return (
        <div>
            <Header />
            <div className="container">
            <h1>Список английских слов</h1>
            <table className='table' border="1">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Теги</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map(({ id, english, transcription, russian, tags }, index) => (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            {isEditing === id ? (
                                <>
                                    <td>
                                        <input 
                                            value={newWord} 
                                            onChange={(e) => setNewWord(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            value={newTranscription} 
                                            onChange={(e) => setNewTranscription(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            value={newTranslation} 
                                            onChange={(e) => setNewTranslation(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            value={newTags} 
                                            onChange={(e) => setNewTags(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <SaveButton onClick={() => handleSave(id)}/>
                                        <CanselButton onClick={() => setIsEditing(null)}/>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{english}</td>
                                    <td>{transcription}</td>
                                    <td>{russian}</td>
                                    <td>{tags}</td>
                                    <td>
                                        <EditButton onClick={() => handleEdit(id)}/>
                                        <DeleteButton onClick={() => handleDelete(id)}/>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
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
            <AddButton onClick={handleAddNewWord}/>
            <Content />
        </div> 
        <Footer />
        </div>
    );
};

export default App;