import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getExternalValues} from '../action';

import frLocale from 'date-fns/locale/fr';

import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import brLocale from 'date-fns/locale/pt-BR';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core';

const localeMap = {
  en: enLocale,
  fr: frLocale,
  br: brLocale,
  de: deLocale,
};

const maskMap = {
  fr: '__/__/____',
  en: '__/__/____',
  br: '__.__.____',
  de: '__.__.____',
};

export default function FormSearch() {
  /* STYLES */
  const classes = useStyles();
  /*STATES*/
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [locale, setLocale] = useState('br');

  /* HOOKS*/
  const dispatch = useDispatch();

  /* FUNCTIONS */
  const handleSubmit =async (event) => {
    event.preventDefault();

     dispatch(
      await getExternalValues(
        moment(initialDate).format("DD/MM/YYYY"),
        moment(finalDate).format("DD/MM/YYYY")
      )
    )
  };
  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };
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
          <Typography component="h1" color="primary" variant="h5">
            Busca de IPCA no Banco Central
          </Typography>
          <ToggleButtonGroup value={locale} exclusive sx={{ mt: 3 }}>
            {Object.keys(localeMap).map((localeItem) => (
              <ToggleButton
                key={localeItem}
                value={localeItem}
                onClick={() => selectLocale(localeItem)}
              >
                {localeItem}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
         
            <Grid container spacing={2}  >
                <Grid item xs={12} sm={6} >
                  <LocalizationProvider className={classes.datePicker} dateAdapter={AdapterDateFns} locale={localeMap[locale]}> 
                    <DatePicker
                      label="Data Inicial"
                      mask={maskMap[locale]}
                      value={initialDate}
                      onChange={(newValue) => setInitialDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}> 
                    <DatePicker
                      label="Data Final"
                      mask={maskMap[locale]}
                      value={finalDate}
                      onChange={(newValue) => setFinalDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Buscar
            </Button>
          </Box>
        </Box>
      </Container>
  );
}


const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    borderRadius: 5,
    borderWidth: 2,
    background: theme.palette.background.paper,
  },
  datePicker:{
    background: "#FFF",
  }
}));