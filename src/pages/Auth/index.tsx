import { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Logo from "../../Assets/IMG/Logo.svg";
import ProgressCircle from "../../Misc/ProgressCircle";
import Cards from "../Cards";
import Dashboard from "../DashboardNew";
// import Dashboard from "../Dashboard";
import LoansAndCredit from "../LoansAndCredit";
import Sidebar from "../Sidebar";
import TopNav from "../TopNav";
import Verifications from "../Verifications";
import Wallets from "../Wallets";
import { AppContext } from "../../Context/AppContext";
import { PerformRequest, usePerformRequest } from "../../Lib/usePerformRequest";
import { Merchant, Profile, Wallet } from "../../Lib/Types";
import { Endpoints } from "../../Lib/Endpoints";
import Cookies from "js-cookie";
import "./styles.scss";
import { MerchantDetailsResponse } from "../../Lib/Responses";
import { DefaultErrorNotification } from "../../Lib/Methods";
import KYC from "../KYC";
import Transactions from "../Transactions";

export default function Auth() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [merchant, setMerchant] = useState<Merchant | undefined>(undefined);
  const {
    data: profile,
    response: profileResponse,
    reloadData: reloadProfile,
    isLoading: isLoadingProfile,
  } = usePerformRequest<Profile>({ method: "POST", url: Endpoints.GetAccountDetails });

  const {
    data: wallets,
    response: walletsResponse,
    reloadData: reloadWallets,
    isLoading: isLoadingWallets,
  } = usePerformRequest<Wallet[]>({
    method: "POST",
    url: Endpoints.GetWalletDetails,
    body: {
      code: "internal",
      order_reference_code: "",
      order_by: "",
      page: "",
      limit: "",
      section: "",
      meta: {
        wallet_id: "",
        currency: "",
        user_id: "",
        main: "",
      },
    },
  });

  const GetMerchantDetails = async () => {
    const r: MerchantDetailsResponse = await PerformRequest({
      method: "POST",
      route: Endpoints.GetMerchantDetails,
      token: Cookies.get("merchantToken"),
      data: {},
    }).catch(() => {
      setLoading(false);
      navigate("/login");
      DefaultErrorNotification("An error occurred!");
    });
    if (r && r.data && r.data.status === "success") {
      setMerchant(r.data);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const business = Cookies.get("business");
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else {
      if (!business || !token) {
        navigate("/select-business");
      } else {
        GetMerchantDetails();
      }
    }
  }, []);

  const doLogout = () => {
    navigate("/login");
    Cookies.remove("token");
  };
  return (
    <AppContext.Provider
      value={{
        profile: profileResponse as unknown as Profile,
        isLoadingProfile,
        reloadProfile,
        logout: doLogout,
        wallets,
        MerchantDetails: merchant,
      }}
    >
      <div className="auth-container">
        <TopNav />
        <Sidebar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/compliance" element={<KYC />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/verifications" element={<Verifications />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<LoansAndCredit />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
