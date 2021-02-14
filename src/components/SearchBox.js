import React, { useState } from 'react'
import './SearchBox.css'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
  } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { CloseButton } from "@chakra-ui/react"


function SearchBox({setIsLocation}) {
    const [isGetInput, setIsGetInput] = useState("")
    const [isOpen, setIsOpen] = useState("-1000px")
    
    const handleUbication = (e) => {
        e.preventDefault()
        setIsLocation(isGetInput)
        setIsOpen("-1000px")
        setIsGetInput("")
    }

    return (
        <>
            <div className="search__container">
                <div className="search__icon">
                    <IconButton
                        style={{backgroundColor: "rgb(6, 21, 46)"}}
                        onClick={() => setIsOpen("0")}
                        colorScheme="blue"
                        aria-label="Search database"
                        icon={<SearchIcon />}
                    />
                </div>
                <h1>Rick and Morty</h1>
            </div>
            <div className="search__input" style={{left: isOpen}}>
                <CloseButton onClick={() => setIsOpen("-1000px")} style={{backgroundColor: "#f2f2f2", marginBottom: "1rem", color: "#000"}} colorScheme="blue"/>
                <form onSubmit={(e) => handleUbication(e)}>
                    <FormControl>
                        <FormLabel>Search Location</FormLabel>
                        <Input value={isGetInput} placeholder="Location" onChange={e => setIsGetInput(e.target.value)}/>                
                    </FormControl>
                    <Box mt={3}>
                        <Button colorScheme="blue" size="md" type="submit">
                            Search
                        </Button>
                    </Box>
                </form>
            </div>
        </>
    )
}

export default SearchBox
