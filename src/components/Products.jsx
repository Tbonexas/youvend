import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: "cord", description: 'The 50 amp cord.', price: '$5' },
    {id: 2, name: "reel", description: 'The Motor for the cord.', price: '$10' },
];

const Products = () => {
    <main>
       <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
               <Grid item key={parts.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} />
               </Grid>
           ))}
       </Grid>
    </main>
}

export default Products;