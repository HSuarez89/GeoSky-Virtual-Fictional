import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../img/logowhite.png'
import Container from './Container'

function Header(){
    return(
        <nav className={styles.header_container}>
            <Container>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"></img></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/about'>About</Link></li>
                    <li className={styles.item}><Link to='fleet'>Our Fleet</Link></li>
                    <li className={styles.my_flight}><Link to='/myflight'>My Flight</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Header