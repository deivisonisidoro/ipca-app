import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

// import { Container } from './styles';


export default function PageNotFound() {

  /* STYLES */
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs"  className={classes.container}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mt: 3 }}>
          <Typography  className={classes.subTitle} color="secondary" component="p" variant="h1">
            404
          </Typography>
          <Typography className={classes.subTitle} color="secondary" component="p" variant="h4">
            Página não Encontrada
          </Typography>
        </Box>
        
      </Box>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    borderRadius: 5,
    borderWidth: 2,
    textAlign: 'center'
  },
  subTitle: {
    marginTop: theme.spacing(10),
  },
}));