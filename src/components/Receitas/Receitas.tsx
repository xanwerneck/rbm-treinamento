import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams,GridRenderCellParams } from "@mui/x-data-grid";
import { getReceitas } from "../../models/firestore/ReceitasStore";
import { IReceitas } from "../../models/interfaces/IReceitas";
import BtnDelContasReceber from '../BtnDelContasReceber/BtnDelContasReceber';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "descricao", headerName: "Descrição", width: 90 },
  {
    field: "data",
    headerName: "Data",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "plano",
    headerName: "Plano de Contas",
    width: 110,
  },
  {
    field: "valor",
    headerName: "Valor",
    width: 160,
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

export default function Receitas() {
  const [rows, setRows] = React.useState(new Array<IReceitas>());

  React.useEffect(() => {
    getReceitas().then((data) => {
      let regs = data.map((d, i) => {
        let reg = { ...d };
        reg.id = i;
        return reg;
      });
      setRows(regs);
    });
  }, []);


  return (
    <div style={{ height: 400, width: "100%" }}>
      {rows.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      ) : null}
    </div>
  );
}
