import { useContext, useState } from "react";

import { Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";

import { Table, Text, Badge, CopyButton } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";
import ProgressCircle from "../../Misc/ProgressCircle";
import ActionsOverview from "../ActionsOverview";
import BalanceOverview from "../BalanceOverviewNew";
import InvoicesOverview from "../InvoicesOverview";
import LoansOverview from "../LoansOverview";
import TransactionsOverview from "../TransactionsOverview";
import ActivityOverview from "../ActivityOverview";

import "./styles.scss";
import { getEllipsisWithString } from "../../Lib/Methods";
import { AppContext } from "../../Context/AppContext";

export default function Dashboard() {
  const context = useContext(AppContext);

  return (
    <Container maxWidth="xl">
      {context && context.profile && context.MerchantDetails && (
        <>
          <div className="dashboard-container flex-row  justify-between">
            <div className="left flex-col">
              <ActivityOverview />

              <Table verticalSpacing="md">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Environment</Table.Th>
                    <Table.Th>Public Key</Table.Th>
                    <Table.Th>Private Key</Table.Th>
                    <Table.Th>Encryption Key</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>
                      <Badge radius="sm" color="green">
                        Live
                      </Badge>
                    </Table.Td>

                    <Table.Td>
                      <CopyButton value={context.MerchantDetails.api_key.live_api_key}>
                        {({ copied, copy }) => (
                          <div className="flex-row align-center pointer" onClick={copy}>
                            <IconCopy size={14} />
                            <Text className="key" c={copied ? "green" : "black"}>
                              {context.MerchantDetails && (
                                <>{getEllipsisWithString(context.MerchantDetails.api_key.live_api_key, 30)}</>
                              )}
                            </Text>
                          </div>
                        )}
                      </CopyButton>
                    </Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>
                      <Badge radius="sm" color="yellow">
                        Test
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <CopyButton value={context.MerchantDetails.api_key.test_api_key}>
                        {({ copied, copy }) => (
                          <div className="flex-row align-center pointer" onClick={copy}>
                            <IconCopy size={14} />
                            <Text className="key" c={copied ? "green" : "black"}>
                              {context.MerchantDetails && (
                                <>{getEllipsisWithString(context.MerchantDetails.api_key.test_api_key, 30)}</>
                              )}
                            </Text>
                          </div>
                        )}
                      </CopyButton>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </div>
            <div className="right flex-row justify-between">
              {/* <div className="right-left flex-col">
            <LoansOverview />
            <TransactionsOverview />
            <InvoicesOverview />
          </div> */}
              <div className="right-right flex-col">
                {/* <CardsOverview /> */}
                <BalanceOverview />
                {/* <ActionsOverview /> */}
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
