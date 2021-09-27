import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name, role, Age, Email, Salary, image } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

        return (
            <div className="container">
                <main className="grid">
                <article>
                    <img className="eng-pic" src={image} alt=""/>
                <div className="text">
                 <h3>Name: {name}</h3>
                 <h3>Role: {role}</h3>
                 <h3>Age: {Age}</h3>
                 <h3>Email: {Email}</h3>
                 <h3>Salary: ${Salary}</h3>
                 <button onClick={() => props.handleAddToCart(props.product)}> {cartIcon} Add To Cart</button>
                
            </div>
            </article>

         </main>
     </div>

                
        

       
    );
};

export default Product;