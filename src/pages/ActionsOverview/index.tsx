import { useState } from "react";

import { Link } from "react-router-dom";

import { Divider, Select } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import Logo from "../../Assets/IMG/Logo.svg";
import WalletIcon from "../../Assets/IMG/Stats/Wallet.svg";
import LoansIcon from "../../Assets/IMG/Stats/Loans.svg";
import DefaultTransactionsIcon from "../../Assets/IMG/Bills/DefaultTransactionIcon.svg";
import ExpensesIcon from "../../Assets/IMG/Stats/Expenses.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";

export default function ActionsOverview() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const contacts = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="actions-overview-container flex-col  justify-between">
      <button className="new-card-btn flex-row align-center justify-center">
        <span className="icon flex-row align-center justify-center">
          <i className="far fa-plus" />
        </span>
        <span className="label">Add New Card</span>
      </button>
      <span className="px-18 fw-600">Quick Transfer</span>

      <Carousel align="center" slideSize="25%" slideGap="xs" dragFree loop controlsOffset="xs" slidesToScroll={5}>
        {contacts.map((c) => {
          return (
            <Carousel.Slide>
              <div className="contact flex-row align-center justify-center">
                <img src={DefaultTransactionsIcon} alt="" className="image" />
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <div className="flex-col input-container">
        <span className="text-gray-secondary px-14 label">Card Number</span>
        <input type="text" placeholder="Enter card number" className="input" />
      </div>
      <div className="flex-row width-100 justify-between actions align-center">
        <button className="action withdraw">Withdraw</button>
        <button className="action draft">Save as Draft</button>
      </div>
    </div>
  );
}
