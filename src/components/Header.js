/* LIBS */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


/*MATERIAL UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';


export default function Header() {
  const classes = useStyles();
  
  /* STATES */
  
  /*HOOKS*/
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.utilsReducer.darkMode);



  /* FUNCTION */



  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6"  noWrap className={classes.title}>
            <Link href="/" color="primary" >
             IPCA
            </Link>
          </Typography>
          <Switch
            checked={darkMode}
                  value={darkMode}
                  color='secondary'
                  onChange={() =>{ 
                    dispatch({ type: 'DARK_MODE', payload: !darkMode})
                  }}
                  className={classes.icons}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

/* STYLES */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background:  theme.palette.background.default
  },
  title: {
    flexGrow: 1,
  },
}));
