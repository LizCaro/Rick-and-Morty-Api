import React from 'react'
import './LocationInfo.css'
import { MdLocationOn } from 'react-icons/md'
import { FiType } from 'react-icons/fi'
import { GiWorld } from 'react-icons/gi'
import { HiUserGroup } from 'react-icons/hi'


function LocationInfo({name, type, dimension, residents,}) {
    return (
        <div className="location__info">
            <div className="location__body">
                <h3><span><MdLocationOn /></span>{name}</h3>
                <p><span><FiType /></span> - {type}</p>
                <p><span><GiWorld /></span> - {dimension}</p>
                <p><span><HiUserGroup /></span> - {residents} residents</p>
            </div>
        </div>
    )
}

export default LocationInfo
