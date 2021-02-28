import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import logo from './logo-white.svg';

import {Image} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        flexGrow: '1',
        width: '95%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    logo:{

        height: '4rem',
        /*width: '25vw',
        minWidth: '2rem',
        minHeight: '1rem',*/
    }
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <img className={classes.logo} src={logo} alt={"demeterAI"} />
               {/*     <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>*/}
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Road towards a <br />
                        interconnected <span className={classes.colorText}>Green< /span> future
                    </h1>
                    {/*<Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>*/}
                </div>
            </Collapse>
        </div>
    );
}