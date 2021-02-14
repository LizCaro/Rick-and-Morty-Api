import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './LocationContainer.css'
import LocationInfo from './LocationInfo'
import SearchBox from './SearchBox'
import ResidentContainer from './ResidentContainer'
import RandomLocation from './RandomLocation'

function LocationContainer() {
    const [isLocation, setIsLocation] = useState("")
    const [isGetLocation, setIsGetLocation] = useState([])

    useEffect(() => {
        if(isLocation) {
            const getLocation = async ()  => {
                const res = await axios(`https://rickandmortyapi.com/api/location/?name=${isLocation}`)
                    setIsGetLocation(res.data.results.slice(0, 1))
            }
            getLocation()
        }
    }, [isLocation])

    const locationMap = isGetLocation.map((value) => {
        return <LocationInfo name={value.name} type={value.type} dimension={value.dimension} residents={value.residents.length} key={value.id}/>
    })

    const residentUrl = isGetLocation.map((value) => {
        return <ResidentContainer residents={value.residents} key={value.id}/>
    })
        
    return (
        <>
            <div className="location__container">
                <SearchBox setIsLocation={setIsLocation}/>
                {isLocation && locationMap} 
                <div className="resident">
                    {isLocation && residentUrl}
                </div>
            </div>
            <RandomLocation setIsLocation={setIsLocation}/>
        </>
    )
}

export default LocationContainer
