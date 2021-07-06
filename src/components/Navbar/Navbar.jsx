import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';


function Navbar() {
    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        <img src={} alt='minilogo' height='25px' className={classes.image} />
                        50 Amp Cord Reel
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
