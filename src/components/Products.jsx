import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './Product/styles2'


const products = [
    {id: 1, name: "Legend of Zelda Triforce Wall Decor", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/triforce.jpg?raw=true", description: 'The Triforce with wings wall decor. Perfect for gaming desks, wall mounts, or pure decoration.', price: '$20.99' },
    {id: 2, name: "Legend of Zelda 3D Link Figurine", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/linkprint.jpg?raw=true" , description: 'A custom Legend of Zelda Link figurine. Handmade and painted. Sizes may vary.', price: '$15.00' },
    {id: 3, name: "Hylian Shield Desktop Decor", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/hylianss.jpg?raw=true" , description: 'Hylian Shield desk decor. Perfect for gaming desks, or pure decoration.', price: '$9.99' },
    {id: 4, name: "Hylian Shield Keychain", image:"https://github.com/Tbonexas/50ampcordreel/blob/main/src/assets/prods/keychainshield.jpeg?raw=true" , description: 'A custom Legend of Zelda Hylian Shield Keychain.', price: '$5.00' },

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