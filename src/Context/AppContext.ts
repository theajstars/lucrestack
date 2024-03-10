import { createContext, useContext } from "react";
import { Merchant, Profile, Wallet } from "../Lib/Types";

export interface ContextProps {
  profile: Profile | undefined;
  reloadProfile: () => void;
  isLoadingProfile: boolean;
  logout: () => void;
  MerchantDetails: Merchant | undefined;
  wallets: Wallet[] | undefined;
}
const AppContext = createContext<ContextProps | null>(null);

export { AppContext };
