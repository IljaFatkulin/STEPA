import React, {useState} from 'react';
import axios from "axios";
import Select from "./Select";
import classes from "../styles/main.module.css"
import {Link} from "react-router-dom";

const PostProduct = () => {
    const [product, setProduct] = useState({sku: '', name:'',price:'', productType:'',weight:'',size:'',height:'',width:'',length:''});

    function validation(e) {
        e.preventDefault();
        if (product.sku !=='' && product.name !==''  && product.price !=='' &&   product.productType!=='')
        {
            switch (product.productType) {
                case 'book':
                    if (product.weight!=='')
                        postProducts();
                    break;
                case 'dvd':
                    if (product.size!=='')
                        postProducts();
                    break;
                case 'furniture':
                    if (product.height&&product.weight&&product.length !=='')
                        postProducts();
                    break;

            }
        }


    }
    function postProducts() {
        axios.post(`http://localhost/stepa/back-end/public/`, product)
            .then(response => {
                return response;
            });
        setProduct({sku: '', name:'',price:'', productType:'',weight:'',size:'',height:'',width:'',length:''});
        // console.log(event.target.value);
        //   console.log(textSku.current.value);
        //   console.log("name",textName.current.value);
        //console.log(arr);
    }
    return (
        <form>
        <div>
            <header>
                <h1>Product Add</h1>
                <div className={classes.buttons}>
                    <button onClick={validation}>Save</button>&nbsp;&nbsp;&nbsp;
                    <button><Link to='/'>Cancel</Link></button>

                </div>
                <hr/>
            </header>
            <br/>
            <br/>
<div>
            <label>SKU </label>
            <input
                id='sku'
                value={product.sku}
                onChange={e => setProduct({...product, sku: e.target.value})}
                type="text"
                placeholder="sku"
            /><br/><br/>
        </div>
        <div>
            <label>Name </label>
            <input
                id='name'
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value})}
                type="text"
                placeholder="name"
            /><br/><br/>
        </div>
        <div>
            <label>Price  </label>
            <input id='price'
                value={product.price}
                onChange={e => setProduct({...product, price: e.target.value})}
                type="number"
                placeholder="price"
            /><br/><br/>
        </div>

            <label>Type Switcher </label>
            <Select
                id='productType'
                value={product.productType}
                onChange={e => setProduct({...product,productType: e})}
                defaultValue="Type Switcher"
                options={[
                    { value:'book',name:'book'},
                    {value: 'dvd',name: 'dvd'},
                    {value: 'furniture',name: 'furniture'}
                ]}
            />



            {
                product.productType==='book'?(
                    <div>
                        <label >Weight </label>
                    <input
                        id='weight'
                    value={product.weight}
                    onChange={e => setProduct({...product,weight: e.target.value})}
                    type="number"
                    placeholder="weight"
                    />
                    </div>
                ): product.productType ==='dvd'?(
                    <div>
                        <label>Size </label>
                    <input
                        id='size'
                        value={product.size}
                        onChange={e => setProduct({...product,size: e.target.value})}
                        type="number"
                        placeholder="size"
                    />
                    </div>
                ): product.productType === 'furniture'?(
                    <p>
                        <label>Height (CM)&nbsp;</label>
                        <input
                            id='height'
                            value={product.height}
                            onChange={e => setProduct({...product,height: e.target.value})}
                            type="number"
                            placeholder="height"
                        /><br/>
                        <label>Width (CM)&nbsp;&nbsp;</label>
                        <input
                            id='width'
                            value={product.width}
                            onChange={e => setProduct({...product,width: e.target.value})}
                            type="number"
                            placeholder="width"
                        /><br/>
                        <label>Length (CM)&nbsp;</label>
                        <input
                            id='length'
                            value={product.length}
                            onChange={e => setProduct({...product,length: e.target.value})}
                            type="number"
                            placeholder="length"
                        />
                    </p>
                ):(<p></p>)
            }

        </div>
        </form>
    );
};

export default PostProduct;