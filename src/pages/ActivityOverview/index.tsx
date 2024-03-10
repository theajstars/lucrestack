import { useContext } from "react";

import { Link } from "react-router-dom";

import { Select, Text, Table } from "@mantine/core";

import { AppContext } from "../../Context/AppContext";
import "./styles.scss";

export default function ActivityOverview() {
  const context = useContext(AppContext);

  return (
    <>
      {context && context.MerchantDetails && (
        <div className="activity-overview-container flex-col  justify-between">
          <div className="header flex-row align-center justify-between width-100">
            <div className="flex-row align-end">
              <Text ml={20} fw={600}>
                Activity
              </Text>
              <Text fz="12px" mb={3} ml={5} c="dimmed">
                Overview of your API calls
              </Text>
            </div>

            <Link to="/dashboard" className="flex-row align-center text-blue-dark px-14 fw-500">
              See All &nbsp;
              <i className="far fa-external-link" />
            </Link>
          </div>
          <div className="activity">
            <Table verticalSpacing="md">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Product</Table.Th>
                  <Table.Th>Today</Table.Th>
                  <Table.Th>Last 7 Days</Table.Th>
                  <Table.Th>This Month</Table.Th>
                  <Table.Th>This Year</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {context.MerchantDetails.data.api_calls.map((tr) => {
                  return (
                    <Table.Tr key={tr.id}>
                      <Table.Td>
                        <Text className="capitalize">{tr.name}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text>{tr.today}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text>{tr.week}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text>{tr.month}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text>{tr.year}</Text>
                      </Table.Td>
                    </Table.Tr>
                  );
                })}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}
