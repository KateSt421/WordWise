import styles from './button.module.css';
const buttonTypes = ["add", "cansel", "delete", "edit", "save"]

function Button({onClick, nameButton, typeButton}) {
  const className = buttonTypes.includes(typeButton) ?
  `button-${typeButton}` :
  'button'
  return (
    <button className={styles[className] 
  // ?? styles.button

} onClick={onClick}>{nameButton}</button>
  );
}

export default Button;

