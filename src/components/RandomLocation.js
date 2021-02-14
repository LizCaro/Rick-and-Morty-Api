import React, {useEffect} from 'react'
import axios from 'axios'

function RandomLocation({setIsLocation}) {

    useEffect(() => {
        const links = ["https://rickandmortyapi.com/api/location?page=6", "https://rickandmortyapi.com/api/location?page=5", "https://rickandmortyapi.com/api/location?page=4", "https://rickandmortyapi.com/api/location?page=3", "https://rickandmortyapi.com/api/location?page=2", "https://rickandmortyapi.com/api/location?page=1"]
        
        const getLocations = () => {
            let promise = links.map((urls) => { 
                return axios.get(urls) 
            })
            axios.all(promise)
                .then(axios.spread((...res) => {

                    let temp = res.map((element) => {
                        return element.data.results
                    })
                    
                    let dataLocation = temp
                    let randomNumber = Math.floor(Math.random() * dataLocation.length)

                    let randomN = dataLocation[randomNumber]
                    
                    let mapLocations = randomN.map((value) => {
                        return value.name
                    })

                    let letName = mapLocations
                    let letRandomName = Math.floor(Math.random() * dataLocation.length)

                    let randomName = letName[letRandomName]
                    setIsLocation(randomName)
                }))
        }
        getLocations()      
    }, [setIsLocation])
    return ( <div></div>
    )
}

export default RandomLocation
