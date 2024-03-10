import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, Select, Text, TextInput } from "@mantine/core";
import { matchesField, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { Country } from "../../Lib/Types";

import { DefaultErrorNotification, DefaultSuccessNotification, validateEmail } from "../../Lib/Methods";
import { DefaultResponse } from "../../Lib/Responses";
import { PerformRequest } from "../../Lib/usePerformRequest";
import { Endpoints } from "../../Lib/Endpoints";
import Logo from "../../Assets/IMG/Logo.svg";

import "./styles.scss";

interface RegisterComponentProps {
  countries: Country[];
}
export default function Register({ countries }: RegisterComponentProps) {
  const navigate = useNavigate();
  const countriesSelect = countries.map((c) => {
    return {
      value: c.name,
      label: c.name,
    };
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const registerForm = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
    validate: {
      username: (value) => (value.length < 4 ? "Username must be at least 4 characters" : null),
      email: (value) => (!validateEmail(value) ? "Please enter a valid email" : null),
      password: (value) => (value.length < 8 ? "Password must be at least 4 characters" : null),
      confirmPassword: matchesField("password", "Your passwords do not match"),
    },
  });
  const inputProps = (placeholder: string, type: string) => {
    return {
      spellCheck: false,
      className: "input",
      placeholder,
      type,
    } as React.InputHTMLAttributes<HTMLInputElement>;
  };
  const RegisterUser = async () => {
    setLoading(true);

    if (registerForm.validate().hasErrors) {
      DefaultErrorNotification("Please fill the form correctly!");
    } else {
      const { username, email, password, country } = registerForm.values;

      const r: DefaultResponse = await PerformRequest({
        method: "POST",
        route: Endpoints.Register,
        data: { username, email, password, country },
      }).catch(() => {
        setLoading(false);
        DefaultErrorNotification("An error occurred! Please try again");
      });
      setLoading(false);

      if (r.data.status === "success") {
        DefaultSuccessNotification("Account created successfully!");
        navigate("/login");
      } else {
        notifications.show({
          color: "orange",
          message: "Please check your form and try again!",
        });
      }
    }
  };
  return (
    <div className="register-container flex-row align-center justify-center">
      <div className="register flex-col align-center justify-between">
        <img src={Logo} alt="" className="logo" />
        <div className="flex-row align-center justify-between input-container">
          <span className="icon">
            <i className="far fa-envelope" />
          </span>
          <input
            spellCheck={false}
            className="input"
            placeholder="Enter email address"
            {...registerForm.getInputProps("email")}
          />
        </div>
        <div className="flex-row inputs width-100 justify-between">
          <Select
            searchable
            w="50%"
            styles={{
              input: {
                height: "55px",
              },
            }}
            placeholder="Select Country"
            data={countriesSelect}
            {...registerForm.getInputProps("country")}
          />
          &nbsp; &nbsp;
          <div
            className="flex-row align-center justify-between input-container"
            style={{
              width: "50%",
            }}
          >
            <span className="icon">
              <i className="far fa-user" />
            </span>
            <input type="text" placeholder="Username" className="input" {...registerForm.getInputProps("username")} />
          </div>
        </div>
        <div className="flex-row inputs width-100 justify-between">
          <div className="flex-row align-center justify-between input-container">
            <span className="icon">
              <i className="far fa-key" />
            </span>
            <input
              type="password"
              placeholder="Create a password"
              className="input"
              {...registerForm.getInputProps("password")}
            />
          </div>
          &nbsp; &nbsp;
          <div className="flex-row align-center justify-between input-container">
            <span className="icon">
              <i className="far fa-key" />
            </span>
            <input
              type="password"
              placeholder="Confirm password"
              className="input"
              {...registerForm.getInputProps("confirmPassword")}
            />
          </div>
        </div>
        <div className="flex-row width-100 align-end justify-between">
          <div className="flex-row align-center">
            <Text mr={7}>Already have an account?</Text>

            <Link to="/login" className="px-14 pointer text-gray-secondary">
              Login
            </Link>
          </div>
          <Link to="/reset" className="px-14 pointer text-gray-secondary">
            Forgot Password?
          </Link>
        </div>
        <Button onClick={RegisterUser} loading={isLoading}>
          Register
        </Button>
      </div>
    </div>
  );
}
