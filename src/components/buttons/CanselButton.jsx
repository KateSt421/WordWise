import styles from './canselButton.module.css';

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>Cansel</button>
  );
}
export default Button;
