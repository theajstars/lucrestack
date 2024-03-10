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

export default function TransactionsOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="transactions-overview-container flex-row  justify-between">
      <div className="flex-col">
        <span className="px-14 text-gray-secondary">
          Transactions this month
        </span>
        <span className="px-22 text-black fw-600 letter-space-1 mt-4">
          ₦298,343<span className="px-15 text-gray-secondary fw-400">.00</span>
        </span>
      </div>
    </div>
  );
}
