import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Badge, Paper, Text, Loader } from "@mantine/core";
import { AppContext } from "../../Context/AppContext";
import { PerformRequest, usePerformRequest } from "../../Lib/usePerformRequest";
import { Profile } from "../../Lib/Types";
import { Endpoints } from "../../Lib/Endpoints";
import "./styles.scss";
import { MerchantDetailsResponse, MerchantSignInResponse } from "../../Lib/Responses";
import { DefaultErrorNotification } from "../../Lib/Methods";
import Cookies from "js-cookie";
export default function SelectBusiness() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const callback = () => {
    navigate("/login");
  };
  const {
    data: profile,
    response: profileResponse,
    reloadData: reloadProfile,
    isLoading: isLoadingProfile,
  } = usePerformRequest<Profile>({ method: "POST", url: Endpoints.GetAccountDetails, errorCodes: [401], callback });

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  const MerchantSignIn = async (apiKey: string, business: string) => {
    setLoading(true);
    const r: MerchantSignInResponse = await PerformRequest({
      method: "POST",
      data: { api_key: apiKey },
      route: Endpoints.MerchantSignIn,
    }).catch(() => {
      setLoading(false);
      DefaultErrorNotification("An error occurred!");
    });
    if (r && r.data && r.data.status === "success") {
      Cookies.set("token", r.data.data.token);
      Cookies.set("business", business);
      // const r2: MerchantDetailsResponse = await PerformRequest({
      //   method: "POST",
      //   route: Endpoints.GetMerchantDetails,
      //   token: r.data.data.token,
      //   data: {},
      // }).catch(() => {
      //   setLoading(false);
      //   DefaultErrorNotification("An error occurred!");
      // });
      // console.log(r2);
      navigate("/dashboard");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="select-business-container flex-row align-center justify-center width-100">
        <div className="select-business flex-col align-center">
          <Text fw={600}>Select Business</Text>

          {isLoadingProfile ? (
            <>
              <br />
              <div className="flex-row align-center">
                <Loader size="sm" />{" "}
                <Text fw={500} ml={10}>
                  Loading ...
                </Text>
              </div>
            </>
          ) : (
            <>
              {(profileResponse as unknown as Profile)?.connected_accounts?.list?.map((account) => {
                return (
                  <Paper
                    my={20}
                    key={account.live_api_key}
                    withBorder
                    opacity={isLoading ? 0.6 : 1}
                    className="business flex-col align-center justify-between "
                  >
                    <Text fw={500} fz="sm" className="capitalize name">
                      {account.name}
                    </Text>
                    <Text fw={600} fz="lg" className="initials">
                      {account.initials}
                    </Text>
                    {/* <Badge color={account.permission === "full" ? "green" : "orange"}>{account.permission}</Badge> */}
                    <div className="flex-row align-center">
                      <Button
                        loading={isLoading}
                        color="green"
                        onClick={() => {
                          MerchantSignIn(account.live_api_key, "live");
                        }}
                      >
                        Live
                      </Button>
                      &nbsp;
                      <Button
                        loading={isLoading}
                        onClick={() => {
                          MerchantSignIn(account.test_api_key, "test");
                        }}
                        color="black"
                      >
                        Test
                      </Button>
                    </div>
                  </Paper>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
