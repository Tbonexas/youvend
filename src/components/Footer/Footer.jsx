import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import logo from '../../assets/navbarlogo/navlogo.png'
import EnvelopeOpenText from '../../assets/images/envelope-open-text-solid.svg';
import GithubSquare from '../../assets/images/github-square-brands.svg';
import Instagram from '../../assets/images/instagram-brands.svg';
import Linkedin from '../../assets/images/linkedin-brands.svg';
import Twitter from '../../assets/images/twitter-brands.svg';



import '../../../src/App.css'
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'


const Footer= () => {

    // const classes = useStyles();
    const gfont = createMuiTheme({
        typography: {
          fontFamily: [
            'Chilanka',
            'cursive',
          ].join(','),
        },});
    return ( 
        <>
            <footer>
                <Box 
                    px={{ xs: 3, sm: 10}} 
                    py={{ xs: 5, sm: 10}}
                    bgcolor="text.secondary" 
                    color="white">
                    <Container maxWidth='lg'>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>About YouVend <img src={logo} alt='minilogo' height='15px' /></Box>
                                <br>
                                </br>
                                <Box>
                                    YouVend is a 3D Printing E-Commerce Shop.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Explore </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="/registration" color="inherit">
                                        Registration
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/login" color="inherit">
                                        Login
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/account" color="inherit">
                                        Account
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/order" color="inherit">
                                        Orders
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/customerservice" color="inherit">
                                        Customer Service
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/about" color="inherit">
                                        About
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/returnpolicy" color="inherit">
                                        Return Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/privacypolicy" color="inherit">
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/partners" color="inherit">
                                        Partners
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/termsofservice" color="inherit">
                                        Term of Service
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Contact </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="/" color="inherit">
                                        <img className="socials" src={EnvelopeOpenText} alt="email" />  Email
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://twitter.com/MandolorCodes" color="inherit" >
                                        <img className="socials" src={Twitter} alt="Twitter" />  Twitter
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://www.instagram.com/aegcodes/" color="inherit">
                                        <img className="socials" src={Instagram} alt="Instagram" />  Instagram
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://www.linkedin.com/in/todd-murdoch/" color="inherit">
                                        <img className="socials" src={Linkedin} alt="Linkedin" />  Linkedin
                                    </Link>
                                </Box>
                                <br>
                                </br>
                                <Box>
                                    <Link href="https://github.com/Tbonexas/youvend" color="inherit">
                                        <img className="socials" src={GithubSquare} alt="Github" />  Github
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box borderBottom={1}>Search </Box>
                                <br>
                                </br>
                                <Box>
                                    <SearchBar
                                         onChange={() => console.log('onChange')}
                                         onRequestSearch={() => console.log('onRequestSearch')}
                                         style={{
                                           margin: '0 auto',
                                           maxWidth: 800
                                         }}
                                    />
                                    <br>
                                    </br>
                                        <Link href='/'>
                                        <img className='bottomRightLogo' src={logo} alt='minilogo' height='90px' width='90' />
                                        </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}}>
                            YouVend <img src={logo} alt='minilogo' height='12px'/> &copy; {new Date().getFullYear()} TBONEXAS-AEG CODES Production. All Rights Reserved.&reg;
                        </Box>
                    </Container>
                </Box>
            </footer>
        </>
    )
}

export default Footer;