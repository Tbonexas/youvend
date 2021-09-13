import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/navbarlogo/navlogo.png'
import '../../../src/App.css'
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'


const Navbar= () => {
    
    const classes = useStyles();
    const gfont = createMuiTheme({
        typography: {
          fontFamily: [
            'Chilanka',
            'cursive',
          ].join(','),
        },});

    return (
        <>
            <ThemeProvider theme={gfont}>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title} color='inherit'>
                                <img src={logo} alt='minilogo' height='25px' className={classes.image} />YouVend
                        </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit' >
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Navbar;
