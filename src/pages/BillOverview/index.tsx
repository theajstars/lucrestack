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

export default function BillOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  const bills = [
    {
      title: "Netflix",
      desc: "Social Media | Payment with Visa Card",
      date: "12:00PM",
    },
    {
      title: "Spotify",
      desc: "Music is my melody | Paid with QR Code",
      date: "02:00PM",
    },
  ];
  return (
    <div className="bill-overview-container flex-col  justify-between">
      <div className="header flex-row align-center justify-between width-100">
        <span className="px-17 fw-500">Bill Payments</span>
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
      <table className="bills-table">
        {bills.map((bill, index) => {
          return (
            <tr>
              <td>
                <div className="flex-col">
                  <span className="px-12 text-gray-secondary">Today</span>
                  <span className="px-12 fw-500 text-black">{bill.date}</span>
                </div>
              </td>
              <td>
                <div className="flex-row align-center">
                  <div className="image-container">
                    <img
                      className="image"
                      src={DefaultTransactionsIcon}
                      alt=""
                    />
                  </div>
                  <div className="flex-col">
                    <span className="px-12 text-gray-secondary">
                      {bill.title}
                    </span>
                    <span className="px-13 fw-500 text-black">{bill.desc}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex-row align-center justify-center success-badge">
                  <i className="fas fa-circle" />
                  Success
                </div>
              </td>
              <td>
                <div className="flex-col">
                  <span className="fw-500 px-15">-$236</span>
                  <span className="fw-500 px-12 text-gray-secondary">
                    Cashback $8
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
