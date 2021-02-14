import React, { useState, useEffect } from 'react'
import './ResidentContainer.css'
import axios from 'axios'
import ResidentInfo from './ResidentInfo'
import Pagination from './Pagination'

function ResidentContainer({residents}) {
    const [isResident, setIsResident] = useState([])
    const [currenPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)

    useEffect(() => {
        const getResidents = () => {
            let promise = residents.map((url) => { 
                return axios.get(url) 
            })
            axios.all(promise)
                .then(axios.spread((...res) => {

                    let temp = res.map((element) => {
                        return element.data
                    })
                    setIsResident(temp)
                }))
        }
        getResidents()
        

    }, [residents])

    



    // get current posts
    const indexOfLastPost = currenPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = isResident.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const resident = currentPost.map((value) => {
        return <ResidentInfo name={value.name} image={value.image} status={value.status} species={value.species} origin={value.location.name} episode={value.episode.length} key={value.id}/>
    })

    return (
        <>
            <Pagination postsPerPage={postsPerPage} totalPosts={isResident.length} paginate={paginate}/>
            {isResident && resident}      
        </>
    )
}

export default ResidentContainer
