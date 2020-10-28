import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export function PassingGrid() {
  const data = [
  {
    ccn: 9352,
  },
  {
    ccn: 25081,
  },
  ];

  const t = (val) => val;

  const columnDefs = [
    { headerName: t("ccn"), field: "ccn" },
  ];
  
  return (
    <div className="ag-theme-alpine" style={{height: "200px"}}>
    <AgGridReact
      columnDefs={columnDefs}
      rowData={data}
      />
    </div>
  );
}

export default PassingGrid;
