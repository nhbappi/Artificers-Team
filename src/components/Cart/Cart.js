import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let artificerName =[];
    for(const product of cart){
        total = total + parseInt(product.Salary);
        artificerName.push(product.name);

    }
    const cartIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="cart-menu">
            <h3>{cartIcon} Artificers Added:{props.cart.length}</h3>
            {
                artificerName.map(name => <h5 className="cart-name">{name}</h5>)
            }
              <h3>Total Cost: ${total}</h3>
              <button className="btn-total">Hire Now</button>
        </div>
    );
};

export default Cart;