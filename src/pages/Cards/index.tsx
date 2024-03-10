import { useState } from "react";

import { Container } from "@mui/material";
import { Table } from "@mantine/core";

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
import Visa from "../../Assets/IMG/Cards/Visa.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function Cards() {
  type Flags = "euro" | "american" | "english" | "nigerian";
  const [isLoading, setLoading] = useState<boolean>(false);

  const [activeFlag, setActiveFlag] = useState<Flags>("nigerian");
  const [requestFlag, setRequestFlag] = useState<Flags>("nigerian");
  const [holdFlag, setHoldFlag] = useState<Flags>("nigerian");

  const getCurrentImage = (flag: Flags) => {
    switch (flag) {
      case "american":
        return AmericanFlag;
        break;
      case "english":
        return EnglishFlag;
        break;
      case "nigerian":
        return NigerianFlag;
        break;
      case "euro":
        return EuroFlag;
        break;
      default:
        return NigerianFlag;
    }
  };

  const complaints = [
    {
      date: "Today",
      time: "12:00PM",
      title: "Debit Issues",
      desc: "I was debitted twice for the same transaction",
      file: true,
      status: "Pending",
    },
    {
      date: "1 Week",
      time: "2:00PM",
      title: "Sum Tin Wong",
      desc: "Better a diamond with a flaw",
      file: false,
      status: "Failed",
    },
    {
      date: "Yesterday",
      time: "03:10PM",
      title: "Candace Noughts",
      desc: "Than a pebble without",
      file: true,
      status: "Success",
    },
  ];
  return (
    <Container maxWidth="lg">
      <div className="cards-container">
        <div className="flex-row width-100 justify-between stats">
          <div className="flex-col align-center justify-between stat">
            <img src={getCurrentImage(activeFlag)} alt="" className="image" />
            <span className="text-gray-dark label">Virtual Cards - ACTIVE</span>
            <span className="text-blue-dark fw-500">2899</span>
            <div className="tabs flex-row align-end justify-between width-100">
              <span
                className={`tab pointer text-gray-dark ${activeFlag === "nigerian" ? "tab-active" : ""}`}
                onClick={() => {
                  setActiveFlag("nigerian");
                }}
              >
                NGN
              </span>
              <span
                className={`tab pointer text-gray-dark ${activeFlag === "american" ? "tab-active" : ""}`}
                onClick={() => {
                  setActiveFlag("american");
                }}
              >
                USD
              </span>
              <span
                className={`tab pointer text-gray-dark ${activeFlag === "english" ? "tab-active" : ""}`}
                onClick={() => {
                  setActiveFlag("english");
                }}
              >
                GBP
              </span>
              <span
                className={`tab pointer text-gray-dark ${activeFlag === "euro" ? "tab-active" : ""}`}
                onClick={() => {
                  setActiveFlag("euro");
                }}
              >
                EUR
              </span>
            </div>
          </div>
          <div className="flex-col align-center justify-between stat">
            <img src={getCurrentImage(requestFlag)} alt="" className="image" />
            <span className="text-gray-dark label">Virtual Cards - REQUEST</span>
            <span className="text-blue-dark fw-500">1456</span>
            <div className="tabs flex-row align-end justify-between width-100">
              <span
                className={`tab pointer text-gray-dark ${requestFlag === "nigerian" ? "tab-active" : ""}`}
                onClick={() => {
                  setRequestFlag("nigerian");
                }}
              >
                NGN
              </span>
              <span
                className={`tab pointer text-gray-dark ${requestFlag === "american" ? "tab-active" : ""}`}
                onClick={() => {
                  setRequestFlag("american");
                }}
              >
                USD
              </span>
              <span
                className={`tab pointer text-gray-dark ${requestFlag === "english" ? "tab-active" : ""}`}
                onClick={() => {
                  setRequestFlag("english");
                }}
              >
                GBP
              </span>
              <span
                className={`tab pointer text-gray-dark ${requestFlag === "euro" ? "tab-active" : ""}`}
                onClick={() => {
                  setRequestFlag("euro");
                }}
              >
                EUR
              </span>
            </div>
          </div>
          <div className="flex-col align-center justify-between stat">
            <img src={getCurrentImage(holdFlag)} alt="" className="image" />
            <span className="text-gray-dark label">Virtual Cards - ON HOLD</span>
            <span className="text-blue-dark fw-500">2899</span>
            <div className="tabs flex-row align-end justify-between width-100">
              <span
                className={`tab pointer text-gray-dark ${holdFlag === "nigerian" ? "tab-active" : ""}`}
                onClick={() => {
                  setHoldFlag("nigerian");
                }}
              >
                NGN
              </span>
              <span
                className={`tab pointer text-gray-dark ${holdFlag === "american" ? "tab-active" : ""}`}
                onClick={() => {
                  setHoldFlag("american");
                }}
              >
                USD
              </span>
              <span
                className={`tab pointer text-gray-dark ${holdFlag === "english" ? "tab-active" : ""}`}
                onClick={() => {
                  setHoldFlag("english");
                }}
              >
                GBP
              </span>
              <span
                className={`tab pointer text-gray-dark ${holdFlag === "euro" ? "tab-active" : ""}`}
                onClick={() => {
                  setHoldFlag("euro");
                }}
              >
                EUR
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row body width-100 justify-between body">
          <div className="flex-col body-col">
            <div className="flex-col item align-center justify-between">
              <div className="header width-100 flex-row align-center justify-between">
                <span className="px-17 fw-500 text-blue-dark">NGN - Physical Cards</span>
                <img src={Verve} alt="" className="card-image" />
              </div>
              <div className="flex-row content width-100 justify-between">
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">6000</span>
                  <span className="px-14 text-gray-secondary">ACTIVE</span>
                </span>
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">435</span>
                  <span className="px-14 text-gray-secondary">ON HOLD</span>
                </span>
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">4654</span>
                  <span className="px-14 text-gray-secondary">NEW REQUEST</span>
                </span>
              </div>
              <span className="pointer text-purple-primary fw-500 px-15">View All Card Holders</span>
            </div>
            <div className="flex-col item align-center justify-between">
              <div className="header width-100 flex-row align-center justify-between">
                <span className="px-17 fw-500 text-blue-dark">USD/GBP/EUR - Physical Cards</span>
                <div className="flex-row align-center">
                  <img src={Mastercard} alt="" className="card-image" />
                  &nbsp;
                  <img src={Visa} alt="" className="card-image-small" />
                </div>
              </div>
              <div className="flex-row content width-100 justify-between">
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">6000</span>
                  <span className="px-14 text-gray-secondary">ACTIVE</span>
                </span>
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">435</span>
                  <span className="px-14 text-gray-secondary">ON HOLD</span>
                </span>
                <span className="flex-col item-col">
                  <span className="fw-500 px-18">4654</span>
                  <span className="px-14 text-gray-secondary">NEW REQUEST</span>
                </span>
              </div>
              <span className="pointer text-purple-primary fw-500 px-15">View All Card Holders</span>
            </div>
          </div>
          <div className="complaints flex-col">
            <div className="header">
              <span className="px-17 fw-500 text-blue-dark">Card Complaints / Conflict</span>
            </div>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>
                    <i className="far fa-paperclip" />
                  </Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {complaints.map((complaint, index) => {
                  return (
                    <Table.Tr key={index}>
                      <Table.Td>
                        <span className="flex-col">
                          <span className="px-12 text-gray-secondary">{complaint.date}</span>
                          <span className="px-14 fw-500">{complaint.time}</span>
                        </span>
                      </Table.Td>
                      <Table.Td>
                        <span className="flex-col">
                          <span className="px-14">{complaint.title}</span>
                          <span className="px-12 text-gray-secondary fw-500">{complaint.desc}</span>
                        </span>
                      </Table.Td>
                      <Table.Td>
                        {complaint.file && <img src={DefaultTransactionsIcon} alt="" className="image pointer" />}
                      </Table.Td>
                      <Table.Td>
                        <span className={`status px-13 ${complaint.status.toLowerCase()}-status capitalize`}>
                          {complaint.status}
                        </span>
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
}
