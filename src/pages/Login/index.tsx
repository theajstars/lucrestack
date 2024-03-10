import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, Text, TextInput, PasswordInput, PinInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import Logo from "../../Assets/IMG/Logo.svg";
import ProgressCircle from "../../Misc/ProgressCircle";

import {
  DefaultErrorNotification,
  DefaultSuccessNotification,
  validateEmail,
  validatePassword,
} from "../../Lib/Methods";
import { DefaultResponse, ValidateOTPResponse } from "../../Lib/Responses";

import "./styles.scss";
import { notifications } from "@mantine/notifications";
import { Endpoints } from "../../Lib/Endpoints";
import { PerformRequest } from "../../Lib/usePerformRequest";
import Cookies from "js-cookie";
interface LoginFormProps {
  email: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (!validateEmail(value) ? "Please enter a valid email" : null),
      // password: (value) =>
      //   !validatePassword(value)
      //     ? "Your password must contain  1 number, 1 lowercase letter, 1 uppercase letter, 1 symbol, at least 8 characters"
      //     : null,
    },
  });
  const [currentScreen, setCurrentScreen] = useState<"email" | "otp">("email");
  const [otp, setOTP] = useState<string>("");
  const LoginUser = async () => {
    setLoading(true);

    if (loginForm.validate().hasErrors) {
      DefaultErrorNotification("Please fill the form correctly!");
    } else {
      const { email, password } = loginForm.values;

      const r: DefaultResponse = await PerformRequest({
        method: "POST",
        route: Endpoints.Login,
        data: { email, password },
      }).catch(() => {
        setLoading(false);
        DefaultErrorNotification("An error occurred! Please try again");
      });
      setLoading(false);

      if (r && r.data) {
        if (r.data.status === "success") {
          DefaultSuccessNotification("OTP sent to your email!");
          setCurrentScreen("otp");
        } else {
          DefaultErrorNotification(r.data.message);
        }
      } else {
        DefaultErrorNotification("An error occurred!");
      }
    }
  };

  const ValidateOTP = async () => {
    if (otp.length !== 6) {
      notifications.show({
        message: "Please enter a valid OTP",
        color: "orange",
      });
    } else {
      setLoading(true);
      const { email } = loginForm.values;
      const r: ValidateOTPResponse = await PerformRequest({
        method: "POST",
        route: Endpoints.ValidateOTP,
        data: { email, code: otp },
      }).catch(() => {
        setLoading(false);
      });
      setLoading(false);
      if (r && r.data && r.data.status === "success") {
        DefaultSuccessNotification("Logged in successfully!");
        Cookies.set("token", r.data.data.token);
        navigate("/select-business");
      } else if (r && r.data && r.data.statusCode === 401) {
        DefaultErrorNotification("Wrong OTP Provided!");
      }
    }
  };
  return (
    <div className="login-container flex-row align-center justify-center">
      {currentScreen === "email" ? (
        <form
          onSubmit={loginForm.onSubmit(
            (values, _event) => {
              LoginUser();
            },
            (validationErrors, _values, _event) => {}
          )}
          className="login flex-col align-center justify-between"
        >
          <img src={Logo} alt="" className="logo" />

          <TextInput
            style={{
              width: "100%",
            }}
            styles={{
              input: {
                width: "100%",
                height: "55px",
              },
            }}
            placeholder="Enter email address"
            label="Email"
            spellCheck={false}
            {...loginForm.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            style={{
              width: "100%",
            }}
            styles={{
              input: {
                width: "100%",
                height: "55px",
              },
            }}
            placeholder="Enter password"
            {...loginForm.getInputProps("password")}
          />

          <div className="flex-row width-100 align-end justify-between">
            <div className="flex-row align-center">
              <Text mr={7}>Don't have an account?</Text>
              <Link to="/register" className="px-16 underline pointer text-gray-secondary">
                Sign Up
              </Link>
            </div>
            <Link to="/reset" className="px-14 pointer text-gray-secondary">
              Forgot Password?
            </Link>
          </div>
          <Button className="btn" loading={isLoading} type="submit">
            Login
          </Button>
        </form>
      ) : (
        <div className="otp flex-col align-center justify-between">
          <img src={Logo} alt="" className="logo" />
          <div className="flex-row">
            <Text>OTP sent to</Text>
            <Text ml={10} fw={500}>
              {loginForm.values.email}
            </Text>
            <Text
              c="blue"
              ml={10}
              className="pointer"
              onClick={() => {
                setCurrentScreen("email");
              }}
            >
              Not you?
            </Text>
          </div>
          <PinInput
            size="lg"
            length={6}
            onChange={(e) => {
              setOTP(e);
            }}
          />
          <Button loading={isLoading} className="btn" onClick={ValidateOTP}>
            Verify
          </Button>
        </div>
      )}
    </div>
  );
}
