function Button({text, buttonClass, handle}){
    return(
        <button className={buttonClass} onClick={handle}>{text}</button>
    )
}

export default Button