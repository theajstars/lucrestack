import { useState } from "react";

import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridRowProps } from "@mui/x-data-grid";
import { Select } from "@mantine/core";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function Verifications() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const rowProps = {
    flex: 1,
  };
  const columns: GridColDef[] = [
    { ...rowProps, field: "timestamp", headerName: "Timestamp" },
    { ...rowProps, field: "code", headerName: "Code" },
    { ...rowProps, field: "action", headerName: "Action" },
    { ...rowProps, field: "product", headerName: "Product" },
    { ...rowProps, field: "type", headerName: "Type" },
    {
      ...rowProps,
      field: "value",
      headerName: "Value",
      renderCell: (params) => {
        return <span className={`cell-value cell-${params.row.value.toLowerCase()}-value`}>{params.row.value}</span>;
      },
    },
    {
      ...rowProps,
      field: "cost",
      headerName: "cost",
      renderCell: (params) => {
        return <span>-₦{params.row.cost}</span>;
      },
    },
  ];
  const rows: GridRowsProp = [
    {
      id: 1,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 2,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 3,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 4,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 654655,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 6144,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 72354,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 8345,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 679,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Failed",
      cost: 255,
    },
    {
      id: 651,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 13452,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 1346,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Failed",
      cost: 255,
    },
    {
      id: 1687,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 57861,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 541,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 5731,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 7841,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 7671,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 156756,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 65661,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Success",
      cost: 255,
    },
    {
      id: 123,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Failed",
      cost: 255,
    },
    {
      id: 145,
      timestamp: "10-10-2023 12:00PM",
      code: "GBP",
      action: "Create",
      product: "Wallet",
      type: "Wallet Creation",
      value: "Success",
      cost: 1255,
    },
    {
      id: 23424,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "Account",
      type: "Account confirmation",
      value: "Pending",
      cost: 255,
    },
    {
      id: 2341,
      timestamp: "10-10-2023 12:00PM",
      code: "Institution",
      action: "Lookup",
      product: "verification",
      type: "BVN Lookup",
      value: "Failed",
      cost: 255,
    },
  ];

  return (
    <Container maxWidth="xl">
      <div className="verifications-container">
        <div className="flex-row align-center justify-between width-100">
          <span className="px-18 fw-600">Verifications</span>
          <div className="filters flex-row">
            <div className="flex-col filter">
              <span className="px-13 text-gray-dark label fw-500">Product</span>
              <Select
                placeholder="Select Product"
                style={{
                  width: "170px",
                }}
                data={["Candace", "Noughts", "Fit", "In", "Deez"]}
              />
            </div>
            <div className="flex-col filter">
              <span className="px-13 text-gray-dark label fw-500">Type</span>
              <Select
                placeholder="Type"
                style={{
                  width: "150px",
                }}
                data={["Candace", "Noughts", "Fit", "In", "Deez"]}
              />
            </div>
          </div>
        </div>
        <DataGrid rows={rows} columns={columns} getRowId={(row) => row.id} />
      </div>
    </Container>
  );
}
