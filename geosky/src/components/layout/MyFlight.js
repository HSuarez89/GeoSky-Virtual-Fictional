import PilotCard from "./PilotCard"
import styles from "./MyFlight.module.css"
import Select from "./Select"
import {useState, useEffect} from "react"
import Button from "./Button"
import FlightCard from "./FlightCard"


function MyFlight(){

    const [pilot, setPilot] = useState([]);
  const [locationId, setLocationId] = useState('');
  const [pilotLocation, setPilotLocation] = useState([]);
  const [airportName, setAirportName] = useState('');
  const [options, setOptions] = useState([]);
  const [destinationId, setDestinationId] = useState('');
  const [destination, setDestination] = useState([]);
  const [bid, setBid] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/pilot', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        setPilot(data);
        setLocationId(data.length > 0 ? data[0].location : '');
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPilotLocation = async () => {
      try {
        const response = await fetch(`http://localhost:5000/airports/${locationId}`, {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        setPilotLocation(data);
        setAirportName(data.city);
      } catch (error) {
        console.log(error);
      }
    };

    if (locationId) {
      fetchPilotLocation();
    }
  }, [locationId]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:5000/airports', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        const filterData = data.filter(item => item.id !== locationId);
        setOptions(filterData);
      } catch (error) {
        console.log(error);
      }
    };

    if (locationId) {
      fetchOptions();
    }
  }, [locationId]);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:5000/airports/${destinationId}`, {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        setDestination(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (destinationId) {
      fetchDestination();
    }
  }, [destinationId]);

  const bidFlight = () => {
    fetch('http://localhost:5000/bids', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ destination, pilotLocation })
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBid(data)
      })
      .catch((err) => console.log(err));
  };

  const handleDestinationChange = (e) => {
    setDestinationId(e.target.value);
  };

  useEffect(() => {
    console.log(bid)
  },[bid])

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
                    <h1>Bid Flight</h1>
                    <div className={styles.div_bid_flight}>
                        <div>
                            <p><span>From: </span>{pilotLocation.city}</p>
                            <div className={styles.select_container}>
                                <p><span>To: </span></p>
                                <Select name='airport_id' options={options} handleOnChange={handleDestinationChange} value={destinationId}/>
                                <Button text='Bid Flight' buttonClass='bid' handle={() => bidFlight(destination, pilotLocation)}/>
                        </div>
                        </div>
                        {bid && (
                                <FlightCard className={styles.div_bid_flight} location={pilotLocation} destination={destination}/>
                            )}
                    </div>
            </div>
        </div>
    )
}

export default MyFlight