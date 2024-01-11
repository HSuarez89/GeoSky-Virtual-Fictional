import styles from './Select.module.css'

function Select({name, options, handleOnChange, value}){
    return(
        <div className={styles.select}>
            <label htmlFor={name}></label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Select a destination</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select