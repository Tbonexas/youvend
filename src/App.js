import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'

import { Products, Navbar } from './components';

const App = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    console.log(products, "Stripe Array is working");

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;
