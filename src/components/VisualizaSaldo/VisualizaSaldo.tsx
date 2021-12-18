import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RMBTheme } from "../../themes/Theme";



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(descricao: string, valor: number, soma: number) {
  return { descricao, valor, soma };
}

const rows = [
  createData('Aluguel', 600.68, 500.88),
];

export default function VisualizarSaldo() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: RMBTheme.palette.primary.main,
      color: RMBTheme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Despesa </StyledTableCell>
            <StyledTableCell align="right">Receita</StyledTableCell>
            <StyledTableCell align="right">Soma Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
                        <StyledTableRow key={row.descricao}>

              <StyledTableCell component="th" scope="row">
                {row.descricao}
              </StyledTableCell>
              <StyledTableCell align="right">{row.valor} R$</StyledTableCell>
              <StyledTableCell align="right">{row.soma}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}