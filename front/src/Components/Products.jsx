import React, {useEffect, useState} from 'react';
import classes from "./Products.module.css";
import axios from "axios";


const Products = ({id,name,sku,price,productType,...props}) => {
    if (id != null) {
        return (

            <div className={classes.product} key = {id}>

                <h5>{sku}</h5>
                <p>{name}</p>
                <p>{price}</p>
                <p>{productType}</p>
                {/*<button onClick={deleteProduct}>Delete</button>*/}
                <input type="checkbox" {...props} />
            </div>
        );
    }
    else {
        return (
            <h1>Product list is empty </h1>
        )
    }

};

export default Products;
