import PilotCard from "./PilotCard"
import styles from "./MyFlight.module.css"
import {useState, useEffect} from "react"


function MyFlight(){

    const [pilot,setPilot] = useState([])
    const [locationId, setLocationId] = useState([])
    const [pilotLocation, setPilotLocation] = useState([])
    const [airportName, setAirportName] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/pilot', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        }).then((resp) => resp.json())
        .then((data) => {
            setPilot(data)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if(pilot.length > 0){
            setLocationId(pilot[0].location)
        }
    },[pilot])

    useEffect(() => {
        fetch(`http://localhost:5000/airports/${locationId}`,{
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        }).then((resp) => resp.json())
        .then((data) => {
            setPilotLocation(data)
            setAirportName(data.city)
        })
    },[locationId])

    return(
        <div className={styles.div_container} >
            <div className={styles.text}>
                <h1>My Flight</h1>
                <p>You can bid your flights here!</p>
                <div className={styles.card_container}>
                    {pilot.map((pilot, index) =>
                        <PilotCard
                            key={index}
                            name={pilot.name}
                            location={airportName}
                            flights={pilot.flights}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyFlight