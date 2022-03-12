/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding:theme.spacing(3),
  },
  subTitle: {
    marginTop: theme.spacing(10),
  },
}))


export default function ExternalCard() {
  /* STYLES */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title >Busca De Valores Externo</Title>
      <Typography  className={classes.subTitle} color="secondary" component="p" variant="h4">
        Acessar   
      </Typography>
    </div >
  );
}