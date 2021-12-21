import * as React from 'react';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableHead } from '@mui/material';
import { Table } from '@mui/material';
import { IContas } from '../../models/interfaces/IContas';
import BtnDelContasReceber from '../BtnDelContasReceber/BtnDelContasReceber';
import { ContasAReceber } from '../../models/ContasAReceber';

export default function ControleContasAReceber() {
  const [contasReceber, setContasReceber] = React.useState(new Array<IContas>());
  
  React.useEffect(() => {
    const contas : ContasAReceber = new ContasAReceber('', new Date(), 0, '')
    contas.get()
    .then(data => {setContasReceber(data)})
    .catch(error => alert('Erro ao buscar lista de contas a pagar'))
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
          {contasReceber.map((contas : IContas, key : number) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contas.descricao}
              </TableCell>
              <TableCell align="right">{contas.data.toString()}</TableCell>
              <TableCell align="right">{contas.valor}</TableCell>
              <TableCell align="right">{contas.tipo}</TableCell>
              <TableCell align="right">
                <BtnDelContasReceber contas={contas} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
