/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useSelector } from 'react-redux';

import moment from 'moment';
import { Box, Container } from '@material-ui/core';

export default function DateTable() {
  
  /*STYLES*/
  

  /* STATES */



  /* HOOKS */
  const {externalValues} = useSelector(state => state.valuesReducer);
  /* FUNCTION */
 
  return (
    <Container component="main" maxWidth="xs"  >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title>Resultado da Busca</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Data:</TableCell>
                <TableCell>Valor:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {externalValues.map((row, key) => (
                <TableRow key={key}>
                  <TableCell>{moment(row.data).format("DD/MM/YYYY")}</TableCell>
                  <TableCell>{row.valor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      
    </Container>
  );
}


