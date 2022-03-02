import React from 'react'

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={`${item.image}`} />
      <h2 className="itemName">{item.name}</h2>
      <div className="hovering">
        <p className="description">{item.description}</p>
        <p className="price">{item.price} €</p>
        <button className="btn buy">Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
