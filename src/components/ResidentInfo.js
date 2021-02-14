import React, { useState } from 'react'
import './ResidentInfo.css'
import { BiUserCircle } from 'react-icons/bi'
import { GiPlainCircle, GiTargetDummy} from 'react-icons/gi'
import { AiFillPlaySquare } from 'react-icons/ai'
import { GiWorld } from 'react-icons/gi'
import { useEffect } from 'react'

function ResidentInfo({name, status, species, origin, episode, image}) {
    const [color, setColor] = useState()

    useEffect(() => {
        if(status === "unknown") {
            setColor("#ffd369")
        } else if(status === "Dead") {
            setColor("#c24914")
        } else {
            setColor("#61b15a")
        }
    }, [status])

    return (
        <div className="resident__container">
            <div className="resident__body">
                <div>
                    <img src={image} alt="Resident img"/>
                </div>
                <div className="resident__info">
                    <h3><span><BiUserCircle /></span> - {name}</h3>
                    <p><span style={{color: color}}><GiPlainCircle /></span> - {status}</p>
                    <p><span><GiTargetDummy /></span> - {species}</p>
                    <p><span><GiWorld /></span> - {origin}</p>
                    <p><span><AiFillPlaySquare /></span> - {episode} espisodes</p>
                </div>
            </div>
        </div>

    )
}

export default ResidentInfo
