import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getValues } from '../action';
import { Card, Typography } from '@material-ui/core';

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

export default function Home() {

  /* STYLES */
  const classes = useStyles();

  /* HOOKS */
  const dispatch = useDispatch();
  const {values} = useSelector(state => state.valuesReducer);
  

  
  /* FUNCTION */
  
  const loadValues = async()=>{
    dispatch(await getValues());
  };

  /* EFFECTS */
  useEffect(()=>{
    loadValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);



  return (
    <div className={classes.root}>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container  maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           
            <Card style={{paddingRight: 20}}>
        
              {values.length > 0 ?
                <ul>
                  {
                    values.map((item, key)=>(
                      <div key={key}>
                        <li><Typography color='primary'>{item.date}</Typography></li>
                      </div>
                    ))
                  }
                </ul>
          
                :
                <p>array vazio</p>
              }
            </Card>          
          </Grid>
        </Container>
      </main>
    </div>
  );
}