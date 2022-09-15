import React, { useContext } from 'react'
import { CardContext } from '../context/allContext'
import {  Container } from "@nextui-org/react";

const FavCharacters = () => {
  const { items } = useContext(CardContext);

  return (
    <Container sm>
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.status}</p>
          <p>{item.gender}</p>
          <img src={item.image} alt={item.name}/>
        </div>
      )
      )}
    </Container>
  )
}

export default FavCharacters