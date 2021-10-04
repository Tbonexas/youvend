import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import '../src/App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './components/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Account from './components/Account/Account'
import CustomerService from './components/CustomerService/CustomerService'
import Login from './components/Login/Login'
import Orders from './components/Orders/Orders'
import Partners from './components/Partners/Partners'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import Registration from './components/Registration/Registration'
import ReturnPolicy from './components/ReturnPolicy/ReturnPolicy'
import TermsofService from './components/TermsofService/TermsofService'

const App = () => {
    
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity ) => {
        const item = await commerce.cart.add(productId, quantity);
        
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log(cart);
    

    return (
        <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/account" component={Account} />
                <Route path="/customerService" component={CustomerService} />
                <Route path="/login" component={Login} />
                <Route path="/order" component={Orders} />
                <Route path="/partners" component={Partners} />
                <Route path="/privacyPolicy" component={PrivacyPolicy} />
                <Route path="/registration" component={Registration} />
                <Route path="/returnPolicy" component={ReturnPolicy} />
                <Route path="/termsofService" component={TermsofService} />
                <Route>
                    <Products products={products} onAddToCart={handleAddToCart} />
                </Route>
            </Switch> 
            <Footer />
        </div>
        </Router>
    )
}

export default App;
