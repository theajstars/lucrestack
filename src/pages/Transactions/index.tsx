import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import { Badge, Text, Button, Modal, Select, List, TextInput, NumberInput } from "@mantine/core";

import "./styles.scss";
import { AppContext } from "../../Context/AppContext";

export default function Transactions() {
  const context = useContext(AppContext);
  console.log(context?.wallets);

  return (
    <Container maxWidth="xl">
      <div className="transactions-container flex-col width-100">
        <div className="flex-row align-end">
          <Text ml={20} fw={600}>
            Transactions
          </Text>
          <Text fz="12px" mb={3} ml={5} c="dimmed">
            View all transactions
          </Text>
        </div>
      </div>
    </Container>
  );
}
