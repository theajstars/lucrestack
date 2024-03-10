import { useState } from "react";

import { Container } from "@mui/material";
import { Table, Select } from "@mantine/core";

import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import AmericanFlag from "../../Assets/IMG/Cards/AmericanFlag.svg";
import EnglishFlag from "../../Assets/IMG/Cards/EnglishFlag.svg";
import EuroFlag from "../../Assets/IMG/Cards/EuroFlag.svg";
import NigerianFlag from "../../Assets/IMG/Cards/NigerianFlag.svg";
import Verve from "../../Assets/IMG/Cards/Verve.svg";
import Mastercard from "../../Assets/IMG/Cards/Mastercard.svg";
import Call from "../../Assets/IMG/LoansAndCredit/Call.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function LoansAndCredit() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const data = [
    { name: "Heung Min Son", manager: "Ange Poste", source: "MoveOn App", status: "Disbursed to Loanee" },
    { name: "Bukayo Saka", manager: "Mikel Arteta", source: "CIBL Trigger", status: "Assigned to POS" },
    { name: "Reece James", manager: "Pochettino", source: "Customer Service", status: "Assigned to POS" },
    { name: "Anotonyyy", manager: "Ten Hag", source: "CIBL Trigger", status: "Loan Repayment Complete" },
  ];
  return (
    <Container maxWidth="lg">
      <div className="loans-credit-container flex-col">
        <div className="stats flex-row width-100 justify-between">
          <div className="stat flex-row justify-between">
            <div className="flex-col">
              <span className="px-30 fw-600">560</span>
              <span className="px-18 fw-500">Loans Disbursed</span>
              <span className="px-15 fw-500 text-purple-primary">October 2023</span>
            </div>
            <div className="flex-col">
              <span className="px-20 text-yellow-primary">Total</span>
              <span className="px-20 fw-600">
                $298,089<span className="px-13 text-gray-secondary fw-500">.00</span>
              </span>
            </div>
          </div>
          <div className="stat flex-row justify-between">
            <div className="flex-col">
              <span className="px-30 fw-600">1099</span>
              <span className="px-18 fw-500">Loans Assigned</span>
            </div>
            <div className="flex-col">
              <span className="px-20 text-yellow-primary">Total</span>
              <span className="px-20 fw-600">
                $298,089<span className="px-13 text-gray-secondary fw-500">.00</span>
              </span>
            </div>
          </div>
          <div className="stat flex-row justify-between">
            <div className="flex-col">
              <span className="px-30 fw-600">10299</span>
              <span className="px-18 fw-500">Loans Overdue</span>
            </div>
            <div className="flex-col">
              <span className="px-20 text-yellow-primary">Total</span>
              <span className="px-20 fw-600">
                $298,089<span className="px-13 text-gray-secondary fw-500">.00</span>
              </span>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="header flex-row width-100 justify-between align-center">
            <span className="text-white-primary px-16 fw-500">All Loans</span>
            <Select
              placeholder="Filter"
              bg="blue"
              classNames={{
                input: "filter-input",
                root: "filter-root",
                section: "filter-section",
              }}
              style={{
                width: "120px",
              }}
              data={["Candace", "Noughts", "Fit", "In", "Deez"]}
            />
          </div>
          <Table>
            <Table.Tbody>
              {[...data, ...data].map((record, index) => {
                return (
                  <Table.Tr>
                    <Table.Td>
                      <div className="flex-col">
                        <span className="fw-500 px-17">{record.name}</span>
                        <span className="fw-400 px-13">
                          Loan ID : <span className="fw-600">{4574932}</span>
                        </span>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <img src={Call} alt="" className="call" />
                    </Table.Td>
                    <Table.Td>
                      <div className="flex-col">
                        <span className="px-14">
                          Loan Disbursed &nbsp; &nbsp;
                          <span className="px-14 fw-600 text-yellow-primary">1 Week Ago</span>
                        </span>
                        <span className="px-14 fw-600 text-blue-dark">7 April 2023 &nbsp;|&nbsp; 11:25 AM</span>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <div className="flex-col">
                        <span className="px-14 text-gray-secondary">Loan Manager</span>
                        <span className="px-16 fw-500">{record.manager}</span>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <div className="flex-col details">
                        <div className="flex-row detail">
                          <span className="label">Source</span>
                          <span className="value">{record.source}</span>
                        </div>
                        <div className="flex-row detail">
                          <span className="label">Status</span>
                          <span className="value">{record.status}</span>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <button className="view">View Loan</button>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
