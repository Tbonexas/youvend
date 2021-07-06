import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';



const Navbar= () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        <img src="https://github.com/Tbonexas/50ampcordreel/blob/main/assets/navbarlogo/navlogo.png?raw=true" alt='minilogo' height='25px' className={classes.image} />
                        50 Amp Cord Reel
                    </Typography>
                </Toolbar>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit' >
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </AppBar>
        </>
    )
}

export default Navbar;
