import styles from './editButton.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Edit</button>
  );
}
export default Button;
