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

export default function LoansOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="loans-overview-container flex-col  justify-between">
      <div className="header flex-row align-center justify-between width-100">
        <span className="px-17 fw-500">Credit / Loans</span>
        <span className="icon px-16 pointer">
          <i className="far fa-ellipsis-h-alt" />
        </span>
      </div>
      <div className="flex-row content align-center justify-between">
        <div className="flex-col align-center justify-center item">
          <span className="text-gray-secondary px-14 fw-500">Outgoing</span>
          <span className="text-red-primary value fw-600">$987</span>
        </div>
        <div className="flex-col align-center justify-center item">
          <span className="text-gray-secondary px-14 fw-500">Approved</span>
          <span className="text-red-primary value fw-600">$9,287</span>
        </div>
        <div className="flex-col align-center justify-center item">
          <span className="text-gray-secondary px-14 fw-500">Total Loans</span>
          <span className="text-red-primary value fw-600">$34,343,234</span>
        </div>
      </div>
    </div>
  );
}
