import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './Product/styles2'
import { classes } from 'istanbul-lib-coverage';

const products = [
    {id: 1, name: "50A Cord Reel", 
    description: 'A cord winding unit designed to save time. It has a motorized self retracting and delivering feature of up to 150 feet. The unit is designed to setup temporary power easier than using your hands to wind or unwind the cables. ', price: '$3,500' },
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