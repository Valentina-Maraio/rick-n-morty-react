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



export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [items, setItems] = useState([]);

  const addToFav = (name, status, gender, image) => {
    setItems((prevState) => [...prevState, { name, status, gender, image}])
  };

  return (
    <CardContext.Provider value={{ items, setItems, addToFav}}>{children}</CardContext.Provider>
  )
}