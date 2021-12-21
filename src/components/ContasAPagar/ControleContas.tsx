import * as React from 'react';
import { getContasAPagar, setContasAPagar } from '../../models/firestore/ContasAPagar';
import { IContasAPagar } from '../../models/interfaces/IContasAPagar';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableHead } from '@mui/material';
import { Table } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DenseTable() {
  const [contasPagar, setContasPagar] = React.useState(new Array<IContasAPagar>());

  React.useEffect(() => {

    getContasAPagar()
      .then(data => { 
        setContasPagar(data)
      })
      .catch()

  }, [])

  
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Plano de contas</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contasPagar.map((contas : IContasAPagar) => (
            <TableRow
              key={contas.descricao}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contas.descricao}
              </TableCell>
              <TableCell align="right">{contas.data.toString()}</TableCell>
              <TableCell align="right">{contas.valor}</TableCell>
              <TableCell align="right">{contas.planodecontas}</TableCell>
              <TableCell align="right">
                <DeleteIcon onClick={() => setContasAPagar(contas)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
