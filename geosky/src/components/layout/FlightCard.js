function FlightCard({location, destination}){
    return(
        <div>
            <div>
                <h3>{location.iata}</h3>
                <p>{location.city}</p>
                <p>{location.name}</p>
                <p>{location.icao}</p>
            </div>
            <div></div>
            <div>
                <h3>{destination.iata}</h3>
                <p>{destination.city}</p>
                <p>{destination.name}</p>
                <p>{destination.icao}</p>
            </div>
        </div>
    )
}

export default FlightCard