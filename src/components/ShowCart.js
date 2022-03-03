import React from 'react'

const ShowCart = ({ cart, quantChange, deleteItem, toggleCart }) => {
  return (
    <div className="showCart">
      <div className="cartContainer">
        <h2>
          Shopping Cart{' '}
          <button className="btn hide" onClick={toggleCart}>
            &#x2715;
          </button>
        </h2>
        <div className="cartListing">
          <div className="cartItem">
            {cart.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
          <div className="cartPrice">
            {cart.map((item) => (
              <div key={item.id}>
                <input
                  type="number"
                  name="quant"
                  value={item.quant}
                  onChange={(e) => quantChange(e, item.id)}
                />
                &#x2715; {item.price} € = {item.quant * item.price} €
              </div>
            ))}
          </div>
          <div className="cartDelete">
            {cart.map((item) => (
              <div key={item.id} onClick={() => deleteItem(item.id)}>
                &#x2715;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCart
