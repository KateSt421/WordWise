import Word from '../word/Word';
import './wordList.css';

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
    </section>
);

export default WordList;