import AmericanFlag from "../Assets/IMG/Cards/AmericanFlag.svg";
import EnglishFlag from "../Assets/IMG/Cards/EnglishFlag.svg";
import EuroFlag from "../Assets/IMG/Cards/EuroFlag.svg";
import NigerianFlag from "../Assets/IMG/Cards/NigerianFlag.svg";
export interface SampleWallet {
  walletID: number;
  available: number;
  pending: number;
  type: string;
  currency: string;
  image: string;
}
const RandomWalletData: SampleWallet[] = [
  {
    walletID: 1245,
    available: 0.0,
    pending: 0.0,
    type: "fiat",
    currency: "United States Dollars",
    image: AmericanFlag,
  },
  {
    walletID: 1334,
    available: 0.0,
    pending: 0.0,
    type: "fiat",
    currency: "European Euros",
    image: EuroFlag,
  },
  {
    walletID: 2323,
    available: 0.0,
    pending: 0.0,
    type: "fiat",
    currency: "Nigerian Naira",
    image: NigerianFlag,
  },
  {
    walletID: 3443,
    available: 0.0,
    pending: 0.0,
    type: "fiat",
    currency: "Great British Pounds",
    image: EnglishFlag,
  },
];

export { RandomWalletData };
