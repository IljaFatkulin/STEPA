import React, {useEffect, useState} from 'react';
import axios from "axios";
import Products from "./Products";
import classes from "./Products.module.css";

const GetProducts = function () {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost/aaaa/back-end/public/')
            .then(response => {
                setProducts(response.data);
            });

    });

    const [ids, setIds] = useState('');
    function deleteProducts() {
        axios.delete(`http://localhost/aaaa/back-end/public/${ids}`)
            .then(response => {
                return response;
            });
    }
  let textSku =React.createRef();
    let textName =React.createRef();
    let textPrice =React.createRef();
    let textType =React.createRef();

    function postProducts() {
         axios.post(`http://localhost/aaaa/back-end/public/`,{
             "sku":textSku.current.value,
             "name":textName.current.value,
             "price":textPrice.current.value,
             "productType":textType.current.value
         })
             .then(response => {
                 return response;
             });
      // console.log(event.target.value);
      //   console.log(textSku.current.value);
      //   console.log("name",textName.current.value);
        //console.log(arr);
    }

    const setIdToDelete = (id) => {
        if(ids.includes(id)) {
            setIds(ids.replace(id + ',', ''));
        } else {
            setIds(ids + id + ',');
        }
    }


return (
    <div>
        <h1>Product list</h1>
        <button onClick={deleteProducts}>MASS DELETE</button>
        <div className={classes.productList}>
            {products.map((product) =>
                <Products key={product.id} id={product.id} name={product.name} sku={product.sku} price={product.price} productType={product.productType} onChange={() => setIdToDelete(product.id)}/>
            )}

        </div>
        <div>
            <br/>
            <br/>
            <label>SKU  </label>
            <input type="text"  ref={textSku}/><br/>
            <label>NAME  </label>
            <input type="text"  ref={textName}/><br/>
            <label>PRICE  </label>
            <input type="text"  ref={textPrice}/><br/>
            <label>PRODUCT TYPE  </label>
            <input type="text"  ref={textType}/><br/>

            <button onClick={postProducts}>SAD</button>
        </div>
    </div>
    );
}



export default GetProducts;