import PilotCard from "./PilotCard"
import styles from "./MyFlight.module.css"

function MyFlight(){
    return(
        <div className={styles.div_container}>
            <div className={styles.text}>
                <h1>My Flight</h1>
                <p>Here, you can see your current information.</p>
            </div>
            <div className={styles.card_container}>
                <PilotCard />
            </div>
        </div>
    )
}

export default MyFlight