import { notifications } from "@mantine/notifications";
import AmericanFlag from "../Assets/IMG/Cards/AmericanFlag.svg";
import EnglishFlag from "../Assets/IMG/Cards/EnglishFlag.svg";
import EuroFlag from "../Assets/IMG/Cards/EuroFlag.svg";
import NigerianFlag from "../Assets/IMG/Cards/NigerianFlag.svg";
function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const getFinancialValueFromNumeric = (value: number | string | undefined) => {
  if (value !== undefined) {
    return parseInt(value.toString()).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return "...";
};

const getFullDate = (dateString: string | undefined | number) => {
  if (dateString) {
    const d = new Date(dateString);
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const year = d.getFullYear();
    const month = MONTHS[d.getMonth()];
    const day = DAYS[d.getDay()];
    return `${day} ${d.getDate()} ${month}, ${year} `;
  }
  return dateString;
};
const getHalfDate = (dateString: string | undefined) => {
  if (dateString) {
    const d = new Date(dateString);
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const year = d.getFullYear();
    const month = MONTHS[d.getMonth()];

    return `${month}-${d.getDate()}-${year} `;
  }
  return dateString;
};
function generateRandomString(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
const getBaseEmailDomain = () => {
  return "@getquickhealth.org";
};
const DefaultErrorNotification = (message?: string) => {
  notifications.show({
    color: "red",
    message: message ?? "An error occurred",
  });
};
const DefaultSuccessNotification = (message?: string) => {
  notifications.show({
    color: "green",
    message: message ?? "Completed!",
  });
};

const getEllipsisWithString = (string: string, length: number) => {
  if (string.length < length - 5) {
    return string;
  } else {
    return `${string.substring(0, length)}...`;
  }
};

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

const validatePassword = (password: string) => {
  return passwordRegex.test(password);
};

const getWalletDetails = (code: string) => {
  switch (code) {
    case "ngn":
      return { image: NigerianFlag, tag: "Nigerian Naira" };
      break;
    case "usd":
      return { image: AmericanFlag, tag: "United States Dollar" };
      break;
    case "eur":
      return { image: EuroFlag, tag: "European Euros" };
      break;
    case "gbp":
      return { image: EnglishFlag, tag: "United Kingdom Pounds" };

    default:
      return { image: NigerianFlag, tag: "Nigerian Naira" };
  }
};
export {
  validateEmail,
  getWalletDetails,
  getFinancialValueFromNumeric,
  getFullDate,
  getHalfDate,
  generateRandomString,
  getBaseEmailDomain,
  DefaultErrorNotification,
  DefaultSuccessNotification,
  getEllipsisWithString,
  validatePassword,
};
