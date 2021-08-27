import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton  } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './Product/styles'




const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    console.log(product);
     // check properties of the products from commerce js //
    
    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image={product.media.source} title={product.name} />
           <CardContent>
               <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formated_with_symbol}
                    </Typography>
               </div>
               <Typography dangerouslySetInnerHTML={{  __html: product.description }} variant="body2" color="textSecondary" /> 
           </CardContent>
           <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
                    <AddShoppingCart />
                </IconButton>
           </CardActions>
       </Card>
    )
}

export default Product;
