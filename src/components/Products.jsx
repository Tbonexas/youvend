import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './Product/styles2'


const products = [
    {id: 1, name: "Legend of Zelda: Triforce Wall Decor", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/gdrum.jpeg?raw=true", description: 'A cord winding unit designed to save time.', price: '$0.00' },
    {id: 2, name: "3D Printed Link Figurine", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/linkprint.jpg?raw=true" , description: 'A custom Legend of Zelda Link figurine. Handmade and painted', price: '$15.00' },
    {id: 3, name: "Hylian Shield Desktop Decor", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/linkprint.jpg?raw=true" , description: 'A custom Legend of Zelda Link figurine. Handmade and painted', price: '$15.00' },
    {id: 4, name: "Hylian Shield Keychain", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/linkprint.jpg?raw=true" , description: 'A custom Legend of Zelda Link figurine. Handmade and painted', price: '$15.00' },

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