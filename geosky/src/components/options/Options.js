import { useState, useEffect } from "react"

function Options({originLocation, onDestinationSelected}){

    const [option, setOption] = useState([])
    const [selectedOption, setSelectedOption] = useState([])
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/airports', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => {
            setOption(data)
            
        })
        .catch((err) => console.log(err))
    },[originLocation])
    
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setIsOptionSelected(true);
    }
    const setDestination = () => {
        if(isOptionSelected){
            onDestinationSelected(selectedOption)
        }
    }

    return(
        <>
            <select value={isOptionSelected ? selectedOption : ''}
                    onChange={handleSelectChange}> 
                <option value=''>Select a destination</option>
                {option.map((item) => (
                    item.id !== originLocation && (
                    <option key={item.id}>{item.name}</option>
                    )
                ))}
            </select>
            <button onClick={() => setDestination()}>Bid</button>
        </>
    )
}

export default Options