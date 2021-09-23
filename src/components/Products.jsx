import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './Product/styles2'

// removed mock products to pull products through a prop from commerece js account // 
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
       <Grid container justify="center" spacing={4} >
           {products.map((product)=>(
               <Grid  container justify="center" item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} onAddToCArt={onAddToCart} />
               </Grid>
           ))}
       </Grid>
    </main>
    )
}

export default Products;