import Word from '../word/Word';
import WordCard from '../wordCard/WordCard';
import './wordList.css'

const WordList = ({ words, onEdit, onDelete, isEditing, onSave, onCancel }) => (
<section className=''>
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
            {words.map((word, index) => (
                <Word
                    key={word.id} 
                    word={{ ...word, index }} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                    isEditing={isEditing} 
                    onSave={onSave} 
                    onCancel={onCancel} 
                />
            ))}
        </tbody>
    </table>
    {/* <div className="word-list">
        {words.map(word => (
            <WordCard key={word.id} word={word} />
        ))}
    </div> */}
    </section>
);

export default WordList;