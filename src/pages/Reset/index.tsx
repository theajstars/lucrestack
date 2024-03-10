import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, PinInput, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import Logo from "../../Assets/IMG/Logo.svg";
import EmailIcon from "../../Assets/IMG/EmailIcon.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import "./styles.scss";
import { DefaultErrorNotification, DefaultSuccessNotification, validateEmail } from "../../Lib/Methods";
import { IconMail } from "@tabler/icons-react";
import { PerformRequest } from "../../Lib/usePerformRequest";
import { Endpoints } from "../../Lib/Endpoints";
import { DefaultResponse } from "../../Lib/Responses";

interface ResetFormProps {
  email: string;
  password: string;
  code: string;
}
export default function Reset() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentScreen, setCurrentScreen] = useState<"email" | "otp">("email");
  const resetForm = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (!validateEmail(value) ? "Please enter a valid email address" : null),
    },
  });
  const [code, setCode] = useState<string>("");
  const inputProps = (placeholder: string, type: string) => {
    return {
      spellCheck: false,
      className: "input",
      placeholder,
      type,
    } as React.InputHTMLAttributes<HTMLInputElement>;
  };
  const SendReset = async () => {
    const errors = resetForm.validate().hasErrors;
    if (!errors) {
      setLoading(true);
      const r: DefaultResponse = await PerformRequest({
        method: "POST",
        data: { email: resetForm.values.email },
        route: Endpoints.ResetPassword,
      }).catch(() => {
        setLoading(false);
        DefaultErrorNotification("An error occurred!");
      });
      setLoading(false);
      if (r && r.data) {
        if (r.data.status === "success") {
          DefaultSuccessNotification("New password sent to your email!");
          navigate("/login");
        } else {
          DefaultErrorNotification(r.data.message);
        }
      }
    }
  };
  const VerifyReset = async () => {};
  return (
    <div className="reset-container flex-row align-center justify-center">
      {currentScreen === "email" ? (
        <div className="reset flex-col align-center justify-between">
          <img src={Logo} alt="" className="logo" />

          <TextInput
            placeholder="Enter email"
            leftSection={<IconMail />}
            w="100%"
            styles={{
              input: {
                height: 50,
                width: "100%",
              },
            }}
            label="Account email address"
            {...resetForm.getInputProps("email")}
          />

          <br />
          <Button loading={isLoading} onClick={SendReset}>
            Request Password Reset
          </Button>
          <br />
          <div className="flex-row width-100 align-end justify-end">
            <span className=" px-15 text-gray-secondary">Remembered your password? &nbsp;</span>
            <Link to="/login" className="px-15 pointer link">
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="verify flex-col align-center justify-between">
          <img src={Logo} alt="" className="logo" />
          <img src={EmailIcon} alt="" className="envelope" />
          <Text fz="sm" className="fw-500 text-purple-default">
            We just emailed you!
          </Text>
          <Text fz="sm" className="fw-500 text-gray-secondary">
            Please enter the code sent to your email
          </Text>
          <div className="flex-row align-center">
            <Text fz="sm" className="fw-500 text-purple-default">
              atajiboyeo@gmail.com
            </Text>
            <Text
              fz="sm"
              ml={5}
              fw={500}
              c="blue"
              className="pointer"
              onClick={() => {
                setCurrentScreen("email");
              }}
            >
              Not you?
            </Text>
          </div>
          <PinInput size="xl" value={code} onChange={(e) => setCode(e)} />
          <br />
          <Button loading={isLoading} onClick={VerifyReset}>
            Verify
          </Button>
          <div className="flex-row width-100 align-end justify-center">
            <span className="px-14 text-purple-default pointer link">Resend Code</span>
            &nbsp; &nbsp;
            <span className="px-14 text-purple-default pointer">Or</span>
            &nbsp; &nbsp;
            <span className="px-14 text-purple-default pointer link">Call</span>
          </div>
        </div>
      )}
    </div>
  );
}
