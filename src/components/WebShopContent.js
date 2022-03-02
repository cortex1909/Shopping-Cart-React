import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react'

const WebShopContent = ({
  interiorContent,
  exteriorContent,
  brushesContent,
  machinesContent,
}) => {
  const [listing, setListing] = useState('all')

  const toggleListing = (listing) => {
    setListing(listing)
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
      </ul>
      {(listing === 'all' || listing === 'interior') && (
        <div className="itemBox">
          {interiorContent.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'exterior') && (
        <div className="itemBox">
          {exteriorContent.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'brushes') && (
        <div className="itemBox">
          {brushesContent.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      )}
      {(listing === 'all' || listing === 'machines') && (
        <div className="itemBox">
          {machinesContent.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WebShopContent
