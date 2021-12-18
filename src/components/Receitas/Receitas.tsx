import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams,GridRenderCellParams  } from '@mui/x-data-grid';
import BtnDelContasReceber from '../BtnDelContasReceber/BtnDelContasReceber';

const columns: GridColDef[] = [
  { field: 'descricao', headerName: 'Descrição', width: 90 },
  {
    field: 'data',
    headerName: 'Data',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'plano',
    headerName: 'Plano de Contas',
    width: 110,
  },
  {
    field: 'valor',
    headerName: 'Valor',
    width: 160
  },
  {
    field: 'acao',
    headerName: 'Ação',
    width: 150,
    renderCell: (params: GridRenderCellParams<Date>) => (
        <BtnDelContasReceber/>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, acao:  <BtnDelContasReceber/>},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Receitas() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
