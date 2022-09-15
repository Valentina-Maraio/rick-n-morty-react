import React from 'react'
import CharactersCards from './CharactersCards'
import Menu from './Menu'
import { Divider } from 'primereact/divider';
import { AllCharactersProvider } from '../context/allContext';

const Home = () => {
  return (
    <>
      <Menu />
      <Divider />
      <AllCharactersProvider>
        <CharactersCards />
      </AllCharactersProvider>
    </>
  )
}

export default Home