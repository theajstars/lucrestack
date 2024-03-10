import { useContext, useEffect, useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Button, Modal, NumberInput, Paper, Text } from "@mantine/core";

import { AppContext } from "../../Context/AppContext";
import "./styles.scss";
import { DefaultResponse } from "../../Lib/Responses";
import { PerformRequest } from "../../Lib/usePerformRequest";
import { Endpoints } from "../../Lib/Endpoints";
import { DefaultErrorNotification, DefaultSuccessNotification } from "../../Lib/Methods";

export default function KYC() {
  const context = useContext(AppContext);

  const bvnForm = useForm({
    initialValues: {
      bvn: "",
      phone: "",
    },
    validate: {
      bvn: (value) => (value.toString().length !== 11 ? "Enter a valid bvn" : null),
      phone: (value) => (value.toString().length !== 10 ? "Enter a valid phone number" : null),
    },
  });
  const [isModalOpen, { open: OpenModal, close: CloseModal }] = useDisclosure(false);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentVerification, setCurrentVerification] = useState<"bvn" | "ng_phone_number_confirmation">("bvn");

  console.log(context);
  const DoVerification = async () => {
    if (currentVerification === "bvn") {
      const errors = bvnForm.validate().hasErrors;
      console.log(bvnForm.values);
      if (!errors) {
        setLoading(true);
        const { phone, bvn } = bvnForm.values;
        const r: DefaultResponse = await PerformRequest({
          method: "POST",
          route: Endpoints.DoVerification,
          data: { code: "bvn", meta: { number: bvn, phone_number: phone } },
        }).catch(() => {
          setLoading(false);
        });

        setLoading(false);
        if (r && r.data) {
          r.data.status === "success"
            ? DefaultSuccessNotification(r.data.message)
            : DefaultErrorNotification(r.data.message);

          if (r.data.status === "success") {
            CloseModal();
            bvnForm.reset();
            context?.reloadProfile();
          }
        }
      }
    }
  };
  return (
    <>
      {context && (
        <div className="kyc-container width-100 flex-col">
          {context.profile?.kyc.details?.map((kyc) => {
            return (
              <>
                {kyc.status !== "Successful" && (
                  <Paper my={20} key={kyc.code} withBorder className="kyc flex-col align-center justify-between ">
                    <Text fw={500} fz="sm" className="capitalize name" ta="center">
                      {kyc.parameter}
                    </Text>
                    <Text c="dimmed" fz="sm" className="initials" ta="center">
                      {kyc.message}
                    </Text>
                    {/* <Badge color={account.permission === "full" ? "green" : "orange"}>{account.permission}</Badge> */}
                    <div className="flex-row align-center">
                      <Button
                        color="black"
                        onClick={() => {
                          OpenModal();
                          setCurrentVerification(kyc.code);
                        }}
                      >
                        Verify Now
                      </Button>
                    </div>
                  </Paper>
                )}
              </>
            );
          })}

          <Modal
            opened={isModalOpen}
            onClose={CloseModal}
            centered
            size="md"
            title={currentVerification === "bvn" ? "Verify BVN" : "Verify Phone Number"}
          >
            <div className="kyc-modal flex-col justify-between">
              {currentVerification === "bvn" ? (
                <>
                  <NumberInput
                    min={0}
                    hideControls
                    label="BVN"
                    placeholder="Enter 11 Digit BVN"
                    {...bvnForm.getInputProps("bvn")}
                    maxLength={11}
                  />
                  <NumberInput
                    min={0}
                    hideControls
                    label="Phone number"
                    placeholder="Input your BVN Phone number"
                    {...bvnForm.getInputProps("phone")}
                    prefix="+234 "
                    maxLength={15}
                  />
                </>
              ) : (
                <>
                  <NumberInput min={0} hideControls label="Phone number" placeholder="Input your BVN Phone number" />
                </>
              )}

              <Button color="green" loading={isLoading} onClick={DoVerification}>
                Complete
              </Button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
