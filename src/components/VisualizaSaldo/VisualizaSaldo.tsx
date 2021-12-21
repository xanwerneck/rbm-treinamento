import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RMBTheme } from "../../themes/Theme";
import { getPlanoDeContas } from '../../models/firestore/PlanoDeContasStore';
import { firestoreDB } from '../../config/DataBase';
import { getReceitas } from '../../models/firestore/ReceitasStore';




const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(despesa: number, receita: number) {
  return { despesa, receita};
}

const rows = [
  createData(9000, 10000),
];

export default function VisualizarSaldo() {

  getReceitas();
  var receitas : number = 0
  getReceitas()
  .then((r) => {
    r.map((receita) => {
      receitas = receitas + (receita.valor as number)
    })
  })
  .catch()
  console.log(receitas);


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
            <StyledTableCell >Receita</StyledTableCell>
            <StyledTableCell >Saldo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
                        <StyledTableRow key={row.despesa}>

              <StyledTableCell>R$ {row.despesa}</StyledTableCell>
              <StyledTableCell>R$ {row.receita}</StyledTableCell>
              <StyledTableCell>R$ {row.receita - row.despesa}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}