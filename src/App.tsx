import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider, createTheme } from "@mantine/core";

import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Auth from "./pages/Auth";
import Dashboard from "./pages/DashboardNew";
// import Dashboard from "./pages/Dashboard";
import Verifications from "./pages/Verifications";
import Cards from "./pages/Cards";
import LoansAndCredit from "./pages/LoansAndCredit";

import Wallets from "./pages/Wallets";
import { usePerformRequest } from "./Lib/usePerformRequest";
import { Country } from "./Lib/Types";
import { Endpoints } from "./Lib/Endpoints";
import Register from "./pages/Register";
import { Notifications } from "@mantine/notifications";
import SelectBusiness from "./pages/SelectBusiness";
import KYC from "./pages/KYC";

import "@mantine/core/styles.css";
import "./Assets/Styles/Index.scss";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import Transactions from "./pages/Transactions";

const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  const { data: countries } = usePerformRequest<Country[]>({
    method: "POST",
    url: Endpoints.GetCountries,
    body: { supported: "Yes" },
    usePublicToken: true,
  });

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/register" element={<Register countries={countries ?? []} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/select-business" element={<SelectBusiness />} />
          <Route path="/dashboard" element={<Auth />}>
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/dashboard/compliance" element={<KYC />} />
            <Route path="/dashboard/wallets" element={<Wallets />} />
            <Route path="/dashboard/verifications" element={<Verifications />} />
            <Route path="/dashboard/cards" element={<Cards />} />
            <Route path="/dashboard/bills" element={<Dashboard />} />
            <Route path="/dashboard/loans" element={<LoansAndCredit />} />
            <Route path="/dashboard/transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
