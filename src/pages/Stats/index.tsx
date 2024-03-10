import { useState } from "react";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function Stats() {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="stats-container flex-row  justify-between">
      <div className="stat flex-col align-center justify-between">
        <div className="flex-row align-center justify-center wallet-image-container image-container">
          <img src={WalletIcon} alt="" className="image" />
        </div>
        <span className="px-14 text-gray-secondary">Wallet - Active</span>
        <span className="px-20 fw-600 text-black">
          $295,098<span className="px-14 text-gray-secondary">.00</span>
        </span>
      </div>
      <div className="stat flex-col align-center justify-between">
        <div className="flex-row align-center justify-center loan-image-container image-container">
          <img src={LoansIcon} alt="" className="image" />
        </div>
        <span className="px-14 text-gray-secondary">Loans/Credit</span>
        <span className="px-20 fw-600 text-black">
          $295,098<span className="px-14 text-gray-secondary">.00</span>
        </span>
      </div>
      <div className="stat flex-col align-center justify-between">
        <div className="flex-row align-center justify-center expenses-image-container image-container">
          <img src={ExpensesIcon} alt="" className="image" />
        </div>
        <span className="px-14 text-gray-secondary">Total Expenses</span>
        <span className="px-20 fw-600 text-black">
          $295,098<span className="px-14 text-gray-secondary">.00</span>
        </span>
      </div>
    </div>
  );
}
