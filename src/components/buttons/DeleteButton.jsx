import styles from './deleteButton.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Delete</button>
  );
}
export default Button;
