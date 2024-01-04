import styles from './Fleet.module.css'
import plane from '../../img/b742.png'

function Fleet(){
    return(
        <div className={styles.text}>
            <h1>Our Fleet</h1>
            <p>
                Currently, our fleet consists of two meticulously maintained Boeing 747-200 aircraft. These legendary planes symbolize our dedication to offering a blend of tradition and innovation in air travel. Whether you're a seasoned globetrotter or a first-time flyer, Geo Sky ensures that every mile of your journey is filled with comfort and a sense of adventure.
            </p>
            <img src={plane} alt='Boeing 747-200'></img>
        </div>
    )
}

export default Fleet