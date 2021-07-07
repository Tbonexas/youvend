import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/navbarlogo/navlogo.png'


const Navbar= () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='minilogo' height='25px' className={classes.image} />50 Amp Cord Reel
                    </Typography>
                
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit' >
                        <Badge badgeContent={0} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
