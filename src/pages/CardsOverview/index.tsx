import { useState } from "react";

import { Link } from "react-router-dom";

import { Alert } from "@mantine/core";
import { motion } from "framer-motion";

import Logo from "../../Assets/IMG/Logo.svg";
import BankLogo from "../../Assets/IMG/Card/logo.png";
import MastercardLogo from "../../Assets/IMG/Card/mastercard.png";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function CardsOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);

  interface CardInterface {
    number: string;
    name: string;
    date: string;
    id: string;
    classname: string;
  }
  const Cards: CardInterface[] = [
    {
      number: "0567790116044090",
      name: "theajstars penguin",
      date: "04/35",
      id: "asfsdfas",
      classname: "purple",
    },
    {
      number: "7471801559662722",
      name: "lord braavosi",
      date: "02/25",
      id: "afg32424",
      classname: "green",
    },
    {
      number: "0022725913266804",
      name: "your grace",
      date: "02/25",
      id: "afg324df24",
      classname: "blue",
    },
  ];

  const [activeCard, setActiveCard] = useState<string>(Cards.length > 0 ? Cards[0].id : "");
  const SlideCard = (action: "next" | "prev") => {
    const isCard = Cards.filter((c) => c.id === activeCard);
    const card = isCard[0];
    const cardIndex = Cards.indexOf(card);

    if (action === "next") {
      if (cardIndex + 1 === Cards.length) {
        //Last card
        setActiveCard(Cards[0].id);
      } else {
        setActiveCard(Cards[cardIndex + 1].id);
      }
    }
    if (action === "prev") {
      if (cardIndex === 0) {
        //Last card
        setActiveCard(Cards[Cards.length - 1].id);
      } else {
        setActiveCard(Cards[cardIndex - 1].id);
      }
    }
  };

  return (
    <>
      {Cards.length > 0 ? (
        <div className="cards-overview-container flex-col  justify-between">
          <div className="header flex-row align-center justify-between width-100">
            <span className="px-17 fw-600">My Cards</span>
            <div className="flex-row icons align-center">
              <button
                className="icon active flex-row align-center justify-center"
                onClick={() => {
                  SlideCard("prev");
                }}
              >
                <i className="far fa-chevron-left" />
              </button>
              <button
                className="icon active flex-row align-center justify-center"
                onClick={() => {
                  SlideCard("next");
                }}
              >
                <i className="far fa-chevron-right" />
              </button>
            </div>
          </div>

          {Cards.map((card) => {
            const { number } = card;
            const numberSplit = number.split("");
            return (
              <div
                className={`card flex-col justify-between ${card.classname}-card ${
                  activeCard === card.id ? "active-card" : "inactive-card"
                }`}
                onClick={() => {
                  setActiveCard(card.id);
                }}
              >
                <div className="flex-row align-center width-100 justify-between">
                  <img src={BankLogo} alt="" className="bank-logo" />
                  <span className="icon">
                    <i className="fas fa-wifi" />
                  </span>
                </div>
                <div className="card-number flex-row width-100 justify-between">
                  <span>
                    {numberSplit[0]}
                    {numberSplit[1]}
                    {numberSplit[2]}
                    {numberSplit[3]}
                  </span>
                  <span>
                    {numberSplit[4]}
                    {numberSplit[5]}
                    {numberSplit[6]}
                    {numberSplit[7]}
                  </span>
                  <span>
                    {numberSplit[8]}
                    {numberSplit[9]}
                    {numberSplit[10]}
                    {numberSplit[11]}
                  </span>
                  <span>
                    {numberSplit[12]}
                    {numberSplit[13]}
                    {numberSplit[14]}
                    {numberSplit[15]}
                  </span>
                </div>
                <div className="flex-row align-center width-100 justify-between bottom">
                  <span className="name">{card.name}</span>
                  <span className="date">{card.date}</span>

                  <img src={MastercardLogo} alt="" className="card-logo" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex-col  no-cards-container">
          <span className="px-17 fw-600 label">My Cards</span>
          <Alert variant="light" color="blue" title="Alert title">
            You do not have any cards. Create one below
          </Alert>
        </div>
      )}
    </>
  );
}
