import React from 'react'

const ShowCart = ({ cart, quantChange, deleteItem, toggleCart }) => {
  let totalPrice = 0
  return (
    <div className="showCart">
      <div className="cartContainer">
        <h2>
          Shopping Cart{' '}
          <button className="btn hide" onClick={toggleCart}>
            &#x2715;
          </button>
        </h2>
        {cart.map((item) => (
          <div className="cartListing" key={item.id}>
            <div className="cartItem">{item.name}</div>

            <div className="cartPrice">
              <div>
                <input
                  type="number"
                  name="quant"
                  value={item.quant}
                  onChange={(e) => quantChange(e, item.id)}
                  totalprice={(totalPrice += item.quant * item.price)}
                />
                &#x2715; {item.price} € = {item.quant * item.price} €
              </div>
            </div>

            <div className="cartDelete">
              <div onClick={() => deleteItem(item.id)}>&#x2715;</div>
            </div>
          </div>
        ))}
        <div className="totalPrice">
          <u>Total amount:</u> {totalPrice} €
        </div>
      </div>
    </div>
  )
}

export default ShowCart
