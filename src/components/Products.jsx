import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './Product/styles2'
import drum from '../assets/prods/gdrum.jpeg'
import LOZ from '../assets/prods/linkprint.jpg'

const products = [
    {id: 1, name: "50A Cord Reel", image:{drum}, description: 'A cord winding unit designed to save time.', price: '$3,500' },
    {id: 2, name: "3D Printed Link Figurine", image: {LOZ}, description: 'A custom Legend of Zelda Link figurine. Handmade and painted', price: '$3,500' },
];


const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
       <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} />
               </Grid>
           ))}
       </Grid>
    </main>
    )
}

export default Products;