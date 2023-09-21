import React from 'react'
import Banner from './Banner/Banner'
import Produtos from './Produtos/Produtos'

const Main = (props) => {
    return (
        <>
            <Banner />
            <Produtos cart={props.cart} setCart={props.setCart} />
        </>
    )
}

export default Main
