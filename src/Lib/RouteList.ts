const Routelist = [
  {
    label: "Dashboard",
    link: "dashboard",
  },
  // {
  //   label: "Verifications",
  //   link: "verifications",
  // },
  {
    label: "Wallets",
    link: "wallets",
  },
  {
    label: "Cards",
    link: "cards",
  },
  {
    label: "Transactions",
    link: "transactions",
  },
  {
    label: "Loans / Credit",
    link: "loans",
  },
  {
    label: "Bill Payment",
    link: "bills",
  },
];
const ProtectedRoutes = [
  { label: "Management", route: "management" },
  { label: "Home", route: "home" },
  { label: "Wallets", route: "wallets" },
  { label: "Settings", route: "settings" },
  { label: "Team", route: "subscription" },
  { label: "Audit Log", route: "Logout" },
];
export { Routelist, ProtectedRoutes };
