import styles from './addButton.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Add</button>
  );
}
export default Button;
