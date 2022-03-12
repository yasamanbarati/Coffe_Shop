import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './productInfo_table.css';

function createData(name, lebalInfo) {
  return { name, lebalInfo };
}

const rows = [
  createData('Name', 'coffe Point Brazil 100%'),
  createData('Type', 'dark'),
  createData('Manufacturer', 'Brazil'),
  createData('Mark', 'point'),
  createData('Compounds', 'Brazilian Dark Coffee + Cocoa'),
  createData('Weight', 600+'g'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='InfoTable'>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='InfoTable_th'>
                {row.name}
              </TableCell>
              <TableCell align="left" className='InfoTable_td'>{row.lebalInfo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
