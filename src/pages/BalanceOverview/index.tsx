import { useState } from "react";

import { Link } from "react-router-dom";

import { Divider, Select } from "@mantine/core";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function BalanceOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="balance-overview-container flex-col  justify-between">
      <span className="text-gray-secondary label">Your Balance</span>
      <span className="text-black px-18 fw-600">
        ₦298,099<span className="text-gray-secondary px-13">.00</span>
      </span>
      <Divider style={{ width: "150px" }} size="sm" />
      <span className="text-gray-secondary label">Currency</span>
      <span className="text-black fw-600 px-18">NGN / Nigerian Naira</span>
    </div>
  );
}
