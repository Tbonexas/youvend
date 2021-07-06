import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton  } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './Product/styles'


const Product = ({ product }) => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <CardMedia className={classes.media} image='https://raw.githubusercontent.com/Tbonexas/50ampcordreel/main/assets/prods/50%20Amp%20Cord%20Reel.png' title={product.name} />
           <CardContent>
               <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
               </div>
               <Typography variant="body2" color="textSecondary">{product.description}</Typography>
           </CardContent>
           <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
           </CardActions>
       </Card>
    )
}

// Fix typography sizing once cards are complete line 21 h2 may need need to be smaller to fit better description of product

export default Product;
