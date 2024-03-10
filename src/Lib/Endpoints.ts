const baseURL = "https://API.Moipayway.co";

const Endpoints = {
  Register: `${baseURL}/account/user/sign-up`,
  Login: `${baseURL}/account/user/sign-in`,
  ValidateOTP: `${baseURL}/account/user/validate-code`,
  ResetPassword: `${baseURL}/account/user/recover-account`,

  DoVerification: `${baseURL}/account/user/verification/process`,

  GetCountries: `${baseURL}/countries`,
  GetAccountDetails: `${baseURL}/account/user/details`,
  MerchantSignIn: `${baseURL}/account/merchant/sign-in`,
  GetMerchantDetails: `${baseURL}/account/merchant/details`,

  GetWalletDetails: `${baseURL}/wallet/details`,

  GetWalletTransactions: `${baseURL}/walle/transactions`,
};

export { Endpoints, baseURL };
