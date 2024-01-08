import { useState, useEffect } from "react"

function Options({originLocation}){

    const [option, setOption] = useState([])

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
    })

    return(
        <>
            <option></option>
        </>
    )
}

export default Options