import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { getReceitas } from "../../models/firestore/ReceitasStore";
import { IReceitas } from "../../models/interfaces/IReceitas";

const columns: GridColDef[] = [
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
];

export default function Receitas() {
  const [rows, setRows] = React.useState([]);

    // setRows(getReceitas());
  return (
    <div style={{ height: 400, width: "100%" }}>
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
