import React from 'react'
import Header from './Header'
import GroceryOption from './GroceryOption'
import DineOption from './DineOption'
import FoodOption from './FoodOption'


const Home = () => {
    return (
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
        </>
    )
}

export default Home