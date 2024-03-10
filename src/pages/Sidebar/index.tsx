import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { ProtectedRoutes } from "../../Lib/RouteList";

import "./styles.scss";
export default function Sidebar() {
  const [isSidebarOpen, { open: OpenSidebar, close: CloseSidebar }] = useDisclosure(false);

  const [activeRoute, setActiveRoute] = useState<string>("");
  return (
    <div className="sidebar-container">
      <Button
        variant="subtle"
        className="toggle"
        onClick={() => {
          isSidebarOpen ? CloseSidebar() : OpenSidebar();
        }}
        color={isSidebarOpen ? "white" : "dark"}
      >
        {isSidebarOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
      </Button>
      <motion.div
        className="sidebar flex-col"
        initial={false}
        animate={{
          left: isSidebarOpen ? 0 : "-400px",
        }}
      >
        {ProtectedRoutes.map((route) => {
          return (
            <Link
              to={`/dashboard/${route.route}`}
              className={`link ${activeRoute === route.route ? "link-active" : ""}`}
            >
              {route.label}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
