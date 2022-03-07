import React from 'react'
import Item from './Item'
import ShowCart from './ShowCart'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const WebShopContent = ({
  interiorContent,
  exteriorContent,
  brushesContent,
  machinesContent,
}) => {
  const [listing, setListing] = useState('all')
  const [cart, setCart] = useState([])
  const [showCart, setshowCart] = useState(false)

  const toggleListing = (listing) => {
    setListing(listing)
  }

  const addToCart = (prop) => {
    const index = cart.findIndex((item) => item.id === prop.id)
    if (index !== -1) {
      const item = cart[index]
      const updatedItem = {
        ...item,
        quant: item.quant + 1,
      }
      const updatedArray = [...cart]
      updatedArray[index] = updatedItem
      setCart(updatedArray)
    } else {
      const newItem = {
        id: prop.id,
        name: prop.name,
        quant: 1,
        price: prop.price,
      }
      setCart((prevState) => [...prevState, newItem])
    }
  }

  const quantChange = (e, eID) => {
    const { name, value } = e.target
    const numberValue = parseInt(value)

    const index = cart.findIndex((item) => item.id === eID)
    const item = cart[index]
    const updatedItem = {
      ...item,
      [name]: numberValue,
    }
    const updatedArray = [...cart]
    updatedArray[index] = updatedItem
    setCart(updatedArray)
  }

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const ternaryStyling = {
    borderBottom: '3px solid #2e416f',
    paddingBottom: '2px',
  }
  const noStyling = {
    borderBottom: '3px solid #fff',
    paddingBottom: '2px',
  }

  return (
    <div className="container">
      <ul>
        <li
          onClick={() => toggleListing('all')}
          style={listing === 'all' ? ternaryStyling : noStyling}
        >
          All
        </li>
        <li
          onClick={() => toggleListing('interior')}
          style={listing === 'interior' ? ternaryStyling : noStyling}
        >
          Interior
        </li>
        <li
          onClick={() => toggleListing('exterior')}
          style={listing === 'exterior' ? ternaryStyling : noStyling}
        >
          Exterior
        </li>
        <li
          onClick={() => toggleListing('brushes')}
          style={listing === 'brushes' ? ternaryStyling : noStyling}
        >
          Brushes
        </li>
        <li
          onClick={() => toggleListing('machines')}
          style={listing === 'machines' ? ternaryStyling : noStyling}
        >
          Machines
        </li>
        <li onClick={() => setshowCart(!showCart)}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </ul>
      {(listing === 'all' || listing === 'interior') && (
        <div className="itemBox">
          {interiorContent.map((item) => (
            <Item item={item} key={item.id} addToCart={addToCart} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'exterior') && (
        <div className="itemBox">
          {exteriorContent.map((item) => (
            <Item item={item} key={item.id} addToCart={addToCart} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'brushes') && (
        <div className="itemBox">
          {brushesContent.map((item) => (
            <Item item={item} key={item.id} addToCart={addToCart} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'machines') && (
        <div className="itemBox">
          {machinesContent.map((item) => (
            <Item item={item} key={item.id} addToCart={addToCart} />
          ))}
        </div>
      )}
      {showCart && (
        <ShowCart
          cart={cart}
          quantChange={quantChange}
          deleteItem={deleteItem}
          toggleCart={() => setshowCart(!showCart)}
        />
      )}
    </div>
  )
}

export default WebShopContent
