import profilepic from "../../img/Perfil.jpg"
import styles from "./PilotCard.module.css"

function PilotCard(){
    return(
        <div className={styles.pilot_card}>
            <img src={profilepic} alt="Profile"></img>
            <p><span>Name:</span></p>
            <p><span>Flight Hours:</span></p>
            <p><span>Location:</span></p>
        </div>
    )
}

export default PilotCard