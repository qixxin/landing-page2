import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./forestroad.jpg";


const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
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
