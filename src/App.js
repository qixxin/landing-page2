import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";



const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/forestroad.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
    },
}));
export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Footer>
                <span> More Details Coming Soon <br />

                   © 2021 Solutions Logicielles Demeter. All rights reserved </span>
            </Footer>
        </div>
    );
}
