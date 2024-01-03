import styles from './Header.module.css'
import logo from '../../img/logowhite.png'

function Header(){
    return(
        <div className={styles.header_container}>
            <img src={logo} alt="logo"></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Our Fleet</li>
            </ul>
        </div>
    )
}

export default Header