import { useState } from "react";

import { Link } from "react-router-dom";

import { Progress, Select } from "@mantine/core";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function InvoicesOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  interface InvoiceProp {
    name: string;
    total: number;
    progress: number;
  }
  const invoices: InvoiceProp[] = [
    { name: "Payment Contract", total: 763, progress: 44 },
    { name: "Business Loan", total: 499, progress: 76 },
    { name: "Sugar Transfer", total: 11063, progress: 52 },
    { name: "Spending", total: 263, progress: 88 },
  ];
  return (
    <div className="invoices-overview-container flex-col  justify-between">
      <div className="header flex-row align-center justify-between width-100">
        <span className="px-17 fw-500">Invoices</span>
        <span className="icon px-16 pointer">
          <i className="far fa-ellipsis-h-alt" />
        </span>
      </div>
      <div className="content flex-col width-100">
        {invoices.map((invoice) => {
          return (
            <div className="flex-row align-center justify-between item width-100">
              <div className="flex-row align-center justify-center image-container">
                <img src={DefaultTransactionsIcon} alt="" className="image" />
              </div>
              <div className="flex-col progress-container">
                <span className="px-15 fw-500 text-blue-dark name">
                  {invoice.name}
                </span>
                <Progress color="black" value={invoice.progress} />
              </div>
              <div className="flex-col details align-end">
                <span className="text-gray-secondary px-13">
                  {invoice.progress}% of
                </span>
                <span className="text-black px-16 fw-600">
                  ${invoice.total}
                </span>
              </div>
            </div>
          );
        })}
        <div className="flex-row align-center justify-center width-100">
          <Link
            to="/dashboard"
            className="see-all flex-row align-center justify-center"
          >
            See All &nbsp;
            <i className="far fa-external-link" />
          </Link>
        </div>
      </div>
    </div>
  );
}
