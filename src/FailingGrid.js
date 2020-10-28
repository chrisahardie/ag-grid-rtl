import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function FailingGrid() {
  const data = [
    {
      ccn: 9352,
      consignee_address: "94319 Tressie Prairie",
      consignee_city: "Port Nobleville",
      consignee_country: "USA",
      consignee_name: "Jay Aufderhar",
      consignee_postal_zip: "67605",
      consignee_province_state: "HI",
      shipper_address: "58105 Emmanuelle Terrace",
      shipper_city: "Port Milliemouth",
      shipper_country: "Canada",
      shipper_name: "Maximillian Raynor",
      shipper_postal_zip: "06158-8902",
      shipper_province_state: "MO",
    },
    {
    ccn: 25081,
    consignee_address: "873 Makenzie Lodge",
    consignee_city: "North Hunterview",
    consignee_country: "USA",
    consignee_name: "Hank McLaughlin",
    consignee_postal_zip: "87234-0436",
    consignee_province_state: "TX",
    shipper_address: "774 Haley Burg",
    shipper_city: "Brandomouth",
    shipper_country: "USA",
    shipper_name: "Collin Ebert",
    shipper_postal_zip: "95538",
    shipper_province_state: "AR",
  },
  ];

  const t = (val) => val;

  const columnDefs = [
    // Comment out the first ColDef and the test will pass!
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      maxWidth: 50,
      suppressSizeToFit: true,
      cellStyle: { paddingLeft: "15px" },
    },
    { headerName: t("ccn"), field: "ccn" },
    {
      headerName: t("consignee"),
      autoHeight: true,
      field: "consignee",
      cellRenderer: (param) =>
        `${param.data.consignee_name}<br/>
       ${param.data.consignee_address}<br />
       ${param.data.consignee_city}, ${param.data.consignee_province_state}<br />
       ${param.data.consignee_postal_zip}<br />${param.data.consignee_country}`,
    },
    {
      headerName: t("shipper"), 
      autoHeight: true,
      field: "shipper",
      cellRenderer: (param) =>
        `${param.data.shipper_name}<br/>
       ${param.data.shipper_address}<br />
       ${param.data.shipper_city},
       ${param.data.shipper_province_state}<br />
       ${param.data.shipper_postal_zip}<br />${param.data.shipper_country}`,
    }
  ];
  
  return (
    <div className="ag-theme-alpine" style={{height: "500px"}}>
    <AgGridReact
      columnDefs={columnDefs}
      rowData={data}
      onGridReady={(params) => {
        params.api.sizeColumnsToFit();
      }}
      />
    </div>
  );
}

export default FailingGrid;
