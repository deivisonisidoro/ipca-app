import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

/* COMPONENTS*/

import { useHistory } from 'react-router-dom'
import InternalCard from '../components/InternalCard';
import { useDispatch } from 'react-redux';
import ExternalCard from '../components/ExternalCard';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: theme.palette.background.default
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    '&:hover': {
      cursor:  'pointer',
   },
  },
  fixedHeight: {
    height: 200,
   
  },
}));

export default function Hme() {

  /* STYLES */
  const classes = useStyles();

  /* HOOKS */
  const history = useHistory();
  const dispatch = useDispatch()
  
  /* FUNCTION */
  

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container  maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12}  >
              <Paper 
                onClick={
                  ()=>{
                    dispatch({ type: 'INTERNAL_SEARCH', payload: false});
                    dispatch({ type: 'EXTERNAL_SEARCH', payload: true});
                    history.push('/busca-externa');
                  }
                } 
                className={fixedHeightPaper}
              >
                <ExternalCard />
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper 
                onClick={
                  ()=>{
                    dispatch({ type: 'INTERNAL_SEARCH', payload: true});
                    dispatch({ type: 'EXTERNAL_SEARCH', payload: false});
                    history.push('/busca-interna');
                  }
                } 
              className={fixedHeightPaper}
              >
                <InternalCard />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}