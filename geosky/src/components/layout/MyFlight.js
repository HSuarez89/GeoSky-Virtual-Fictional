import PilotCard from "./PilotCard"
import styles from "./MyFlight.module.css"
import {useState, useEffect} from "react"

function MyFlight(){
    const [pilot, setPilot] = useState([])
    const [airport, setAirport] = useState([])
    const [airportId, setAirportId] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/pilot`, {
            method: "GET",
            headers: {"Content-Type": 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPilot(data)
        })
        .catch((err) => console.log(err))
        },[])

    useEffect(() => {
        if(pilot.length > 0){
            setAirportId(pilot[0].location)
        }
    },[airportId, pilot])

    useEffect(() => {
        fetch(`http://localhost:5000/airports/${airportId}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAirport(data.city)
        })
        .catch((err) => console.log(err))
    },[airportId])
    return(
        <div className={styles.div_container}>
            <div className={styles.text}>
                <h1>My Flight</h1>
                <p>Here, you can see your current information.</p>
            </div>
            <div className={styles.card_container}>
                {pilot.map((pilot, index) =>
                    <PilotCard
                    key={index}
                    name={pilot.name}
                    location={airport}
                    hours={pilot.hours}
                    />
                )}
            </div>
        </div>
    )
}

export default MyFlight