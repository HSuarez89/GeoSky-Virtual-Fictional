import PilotCard from "./PilotCard"
import styles from "./MyFlight.module.css"
import Select from "./Select"
import {useState, useEffect} from "react"
import Button from "./Button"


function MyFlight(){

    const [pilot,setPilot] = useState([])
    const [locationId, setLocationId] = useState([])
    const [pilotLocation, setPilotLocation] = useState([])
    const [airportName, setAirportName] = useState([])
    const [options, setOptions] = useState([])
    const [destinationId, setDestinationId] = useState('')
    const [destination, setDestination] = useState([])

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

    useEffect(() => {
        console.log(pilotLocation)
    },[pilotLocation])

    useEffect(() => {
        fetch('http://localhost:5000/airports', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        }).then((resp) => resp.json())
        .then((data) => {
            const filterData = data.filter(item => item.id !== locationId)
            setOptions(filterData)
        })
    },[locationId])


    function changeDestination(e){
        setDestinationId(e.target.value)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/airports/${destinationId}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        }).then((resp) => resp.json())
        .then((data) => {
            setDestination(data)
        })
        .catch((err) => console.log(err))
    }, [destinationId])

    function bidFlight(pilotLocation, destination){
        fetch('http://localhost:5000/bids', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({pilotLocation, destination})
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

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
                <div>
                    <h1>Bid Flight</h1>
                    <p><span>From: </span>{pilotLocation.city}</p>
                    <div className={styles.select_container}>
                        <p><span>To: </span></p>
                        <Select name='airport_id' options={options} handleOnChange={changeDestination} value={destinationId}/>
                        <Button text='Bid Flight' buttonClass='bid' handle={() => bidFlight(destination, pilotLocation)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFlight