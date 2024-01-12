import styles from './Button.module.css'

function Button({text, buttonClass, handle}){
    return(
        <button className={styles[buttonClass]} onClick={handle}>{text}</button>
    )
}

export default Button