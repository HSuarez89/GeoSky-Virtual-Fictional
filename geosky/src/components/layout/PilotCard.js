import profilepic from "../../img/Perfil.jpg"
import styles from "./PilotCard.module.css"

function PilotCard({name, flights, location, handleReset}){


    return(
        <div className={styles.pilot_card}>
            <img src={profilepic} alt="Profile"></img>
            <p><span>Name:</span> {name}</p>
            <p><span>Flights:</span> {flights}</p>
            <p><span>Location:</span> {location}</p>
        </div>
    )
}

export default PilotCard