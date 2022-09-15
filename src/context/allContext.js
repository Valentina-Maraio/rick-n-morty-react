import axios from 'axios';
import React, {useState, useEffect, createContext} from 'react'
import rickNmorty from '../api/apiCall'

export const AllCharactersContext = createContext();

export const AllCharactersProvider = ({children}) => {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {getAllCharacters() }, [])

    const getAllCharacters = async() => {
        try {
            const response = await axios.get(rickNmorty.allC)
            setAllCharacters(response.data.results)
        } catch(err) {console.log(err)}
    }

    return (
        <AllCharactersContext.Provider value={[allCharacters, setAllCharacters]}>{children}</AllCharactersContext.Provider>
    )
}