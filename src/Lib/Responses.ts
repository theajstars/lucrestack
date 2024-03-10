import { AxiosHeaders } from "axios";
import { Country, Wallet } from "./Types";

export interface DefaultResponse {
  data: {
    message: string;
    payload: string;
    status: "failed" | "success";
    statusCode: number;
  };
}
export interface GetCountriesResponse {
  data: {
    message: string;
    data: Country[];
    status: boolean;
    response_code: number;
  };
}
export interface LoginResponse {
  data: {
    message: string;
    token: string;
    status: boolean;
    statusCode: number;
  };
}
export interface ResponseWithHeaders extends DefaultResponse {
  headers: {
    authorization: string;
  };
}

export interface ValidateOTPResponse {
  data: {
    message: string;
    status: "failed" | "success";
    statusCode: number;
    data: {
      reference: string;
      token: string;
      environment: string;
    };
  };
}

export interface ProfileResponse {
  data: {
    message: string;
    token: string;
    status: boolean;
    statusCode: number;

    data: {
      lastname: string;
      othernames: string;
      username: string;
      country: string;
      email: string;
      phone_number: string;
    };
    account_management: "Yes" | "No";
    token_ip_address: string;
    token_period: string;
    activity_timestamp: number;
    environment: "live" | "test";
    api_key: {
      live_api_key: string;
      test_api_key: string;
    };
    connected_accounts: {
      list: [
        {
          name: string;
          initials: string;
          live_api_key: string;
          test_api_key: string;
          permission: string;
        },
        {
          name: string;
          initials: string;
          live_api_key: string;
          test_api_key: string;
          permission: string;
        }
      ];
      count: number;
    };
    kyc: {
      expected_check: number;
      current_check: number;
      details: {
        parameter: string;
        code: "bvn" | "ng_phone_number_confirmation";
        status: "Pending" | "Depending";
        message: string;
      }[];

      percentage: number;
    };
  };
}

export interface MerchantSignInResponse {
  data: {
    status: "success" | "failed";
    response_code: number;
    message: string;
    data: {
      token: string;
      environment: "live" | "test";
    };
  };
}
export interface MerchantDetailsResponse {
  data: {
    status: "success" | "failed";
    response_code: number;
    message: string;
    data: {
      merchant_id: string;
      name: string;
      short_name: string;
      description: string;
      business_email: string;
      support_email: string;
      phone_number: string;
      address: string;
      live_api_key: string;
      test_api_key: string;
      type: string;
      logo: string;
      success_webhook_url: string;
      failed_webhook_url: string;
      bearer: "merchant" | "user";
      country: string;
      active: "Yes" | "No";
      merchant_email_notification: "Yes" | "No";
      merchant_sms_notification: "No" | "Yes";
      user_email_notification: "No" | "Yes";
      user_sms_notification: "No" | "Yes";
      authorized: "Yes" | "No";
      banned: string;
      vat: string;
      created_on: string;
      api_calls: [
        {
          id: string;
          name: "Verification" | "Wallet" | "Token" | "User";
          today: number;
          week: number;
          month: number;
          year: number;
        }
      ];
      auth_keys: [
        {
          live: string;
          test: string;
          encryption_key: string;
        }
      ];
    };
    environment: "live" | "test";
    api_key: {
      live_api_key: string;
      test_api_key: string;
    };
    kyc: {
      expected_check: number;
      current_check: number;
      details: [
        {
          parameter: string;
          code:
            | "cac"
            | "application_status"
            | "certificate_of_incorporation"
            | "memorandum_articles_of_association"
            | "business_address"
            | "proof_of_address"
            | "director_bvn"
            | "ng_phone_number_confirmation"
            | "other_documents";
          status: "Successful" | "Pending";
          message: string;
        }
      ];
      percentage: number;
    };
  };
}

export interface GetWalletDetailsResponse {
  data: {
    status: "success" | "failed";
    response_code: number;
    message: string;
    data: Wallet[];
  };
}
