import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { Divider, Text, Badge, Button } from "@mantine/core";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import { AppContext } from "../../Context/AppContext";
import "./styles.scss";

export default function BalanceOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  const context = useContext(AppContext);

  return (
    <>
      {context && context.wallets && (
        <div className="balance-overview-container flex-col justify-between">
          <Text fw={600}>Balance</Text>
          <div className="balance-overview flex-col justify-between">
            <span className="text-gray-secondary label">Your Balance</span>
            <span className="text-black px-18 fw-600">
              {context.wallets.find((w) => w.code === "mpwt")?.available_balance}
              {/* <span className="text-gray-secondary px-13">.00</span> */}
            </span>

            <Divider style={{ width: "150px" }} size="sm" />

            <div className="flex-row width-100 justify-between align-end">
              <div className="flex-col">
                <span className="text-gray-secondary label">Currency</span>
                <span className="text-black fw-600 px-18">MPWt</span>
              </div>
              <Badge color="yellow" radius="md" size="lg" className="pointer">
                History
              </Badge>
            </div>
          </div>
          <br />
          <div className="flex-col width-100 align-center justify-center">
            <button className="new-card-btn width-100 flex-row align-center justify-center">
              <span className="icon flex-row align-center justify-center">
                <i className="far fa-plus" />
              </span>
              <span className="label">Add Credit</span>
            </button>
            <Text c="dimmed" fz="sm" mt={10}>
              Buy MPWt to avoid service diruption
            </Text>
          </div>
          <br />
          <div className="flex-row width-100 align-center justify-between">
            <div className="flex-col">
              <Text fw={600}>Balance</Text>
              <Text c="dimmed" fz="sm" mt={10}>
                Configuration
              </Text>
            </div>
            <Button color="green">View Docs</Button>
          </div>
        </div>
      )}
    </>
  );
}
