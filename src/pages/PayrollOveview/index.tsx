import { useState } from "react";

import { Link } from "react-router-dom";

import { Select } from "@mantine/core";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function PayrollOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="payroll-overview-container flex-col  justify-between">
      <div className="header flex-row align-center justify-between width-100">
        <span className="px-17 fw-500">Payroll / Admin</span>
        <div className="flex-row align-center">
          <Select
            placeholder="Filter"
            style={{
              width: "120px",
            }}
            data={["Candace", "Noughts", "Fit", "In", "Deez"]}
          />
          &nbsp; &nbsp; &nbsp;
          <Link
            to="/dashboard"
            className="flex-row align-center text-blue-dark px-14 fw-500"
          >
            See All &nbsp;
            <i className="far fa-external-link" />
          </Link>
        </div>
      </div>
      <br />
      <br />
      <div className="flex-row width-100 align-center justify-center">
        <span className="px-25 fw-600">Coming Soon...</span>
      </div>
      <br />
    </div>
  );
}
