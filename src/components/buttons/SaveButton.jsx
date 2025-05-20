import styles from './saveButton.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Save</button>
  );
}
export default Button;
