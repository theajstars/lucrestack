import { useContext, useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { Button, Menu, Text, rem } from "@mantine/core";

import { motion } from "framer-motion";

import { Routelist } from "../../Lib/RouteList";

import Logo from "../../Assets/IMG/Logo.svg";
import SmallLogo from "../../Assets/IMG/SmallLogo.svg";
import DefaultUserImage from "../../Assets/IMG/DefaultUserImage.png";
import MoreIcon from "../../Assets/IMG/Nav/More.svg";
import NotificationsIcon from "../../Assets/IMG/Nav/Notifications.svg";

import { AppContext } from "../../Context/AppContext";
import "./styles.scss";
import { IconBusinessplan, IconSettings } from "@tabler/icons-react";

export default function TopNav() {
  const location = useLocation();

  const context = useContext(AppContext);

  const [isNavMenuOpen, setNavMenuOpen] = useState<boolean>(false);

  const [activeRoute, setActiveRoute] = useState<string>("");

  useEffect(() => {
    const pathname = location.pathname;

    if (!["/dashboard", "/dashboard/", "dashboard"].includes(pathname)) {
      const path = pathname.substring(pathname.lastIndexOf("/"), pathname.length).replaceAll("/", "");

      const routes = Routelist.map((r) => r.link);
      const r = routes.filter((r) => r.includes(path));
      setActiveRoute(r[0]);
    } else {
      setActiveRoute("dashboard");
    }
  }, [location]);
  return (
    <>
      {context && (
        <>
          <motion.nav
            initial={false}
            animate={{
              top: isNavMenuOpen ? "80px" : "-500px",
            }}
            className="sm-nav flex-row align-center"
          >
            {Routelist.map((route) => {
              return (
                <Link
                  to={route.link === "dashboard" ? "/dashboard" : `/dashboard/${route.link}`}
                  className={`sm-nav-item flex-row align-center justify-center ${
                    activeRoute === route.link ? "sm-nav-item-active" : ""
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
          </motion.nav>
          <div className="top-nav-container flex-row align-center justify-between">
            <div className="left flex-row align-center justify-center">
              <Link to="/dashboard">
                <img src={SmallLogo} alt="" className="small-logo" />
              </Link>
              <Link to="/dashboard">
                <img src={Logo} alt="" className="logo" />
              </Link>
            </div>
            <div className="right flex-row align-center">
              <nav className="nav flex-row align-center">
                {Routelist.map((route) => {
                  return (
                    <Link
                      to={route.link === "dashboard" ? "/dashboard" : `/dashboard/${route.link}`}
                      className={`nav-item flex-row align-center justify-center ${
                        activeRoute === route.link ? "nav-item-active" : ""
                      }`}
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex-row align-center middle">
                <span
                  className="pointer toggle-menu flex-row align-center justify-center"
                  onClick={() => {
                    setNavMenuOpen(!isNavMenuOpen);
                  }}
                >
                  <i className={`far fa-${isNavMenuOpen ? "times" : "bars"} px-20`} />
                </span>
                {context.profile?.kyc.percentage !== 100 && (
                  <Link to="/dashboard/compliance">
                    <Button radius="xl" size="xs" color="orange">
                      KYC
                    </Button>
                  </Link>
                )}
                &nbsp; &nbsp;
                <span className="pointer middle-item flex-row align-center justify-center">
                  <img src={NotificationsIcon} alt="" />
                </span>
              </div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button size="xl" variant="subtle" className="end flex-row align-center pointer">
                    <img src={DefaultUserImage} alt="" className="avatar" />

                    <div className="flex-col profile pointer">
                      <Text fw={500} fz="sm" className="text-blue-dark capitalize">
                        {context.profile?.data.username}
                      </Text>
                    </div>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Link to="/select-business">
                    <Menu.Item leftSection={<IconBusinessplan style={{ width: rem(14), height: rem(14) }} />}>
                      Switch Business
                    </Menu.Item>
                  </Link>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </>
      )}
    </>
  );
}
