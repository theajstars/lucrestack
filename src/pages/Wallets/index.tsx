import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import { Badge, Text, Button, Modal, Select, List, TextInput, NumberInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import BalanceOverview from "../BalanceOverviewNew";

import WalletsNonCustodial from "../../Assets/IMG/WalletsNonCustodial.svg";
import WalletsNonCustodialLogo from "../../Assets/IMG/WalletsNonCustodialLogo.svg";
import EnglishFlag from "../../Assets/IMG/Cards/EnglishFlag.svg";
import EuroFlag from "../../Assets/IMG/Cards/EuroFlag.svg";
import NigerianFlag from "../../Assets/IMG/Cards/NigerianFlag.svg";

import { RandomWalletData, SampleWallet } from "../../Lib/RandomData";

import "./styles.scss";
import { IconHome } from "@tabler/icons-react";
import { AppContext } from "../../Context/AppContext";
import { getWalletDetails } from "../../Lib/Methods";
import { Wallet } from "../../Lib/Types";

export default function Wallets() {
  const context = useContext(AppContext);
  console.log(context?.wallets);
  const [isWalletModalOpen, { open: OpenWalletModal, close: CloseWalletModal }] = useDisclosure(false);
  const [isChannelsModalOpen, { open: OpenChannelsModal, close: CloseChannelsModal }] = useDisclosure(false);
  const [isTransferModalOpen, { open: OpenTransferModal, close: CloseTransferModal }] = useDisclosure(false);

  const [currentWallet, setCurrentWallet] = useState<Wallet>();
  const walletGridProps = {
    className: "wallet-grid",
  };
  const walletButtonProps = {
    className: "btn uppercase",
  };

  return (
    <Container maxWidth="xl">
      <div className="wallets-container flex-row  justify-between">
        <div className="left flex-col">
          <div className="flex-row align-end">
            <Text ml={20} fw={600}>
              Wallets
            </Text>
            <Text fz="12px" mb={3} ml={5} c="dimmed">
              Overview of your Wallet information
            </Text>
          </div>
          <div className="wallets width-100">
            <Grid container spacing={3} justifyContent="space-between">
              <Grid item {...walletGridProps} key="wallet-custodial">
                <div className="wallet flex-col">
                  <div className="flex-row align-center">
                    <img src={WalletsNonCustodialLogo} alt="" className="image" />
                    <img src={WalletsNonCustodial} alt="" className="custodial" />
                  </div>
                  <Text c="dimmed" className="uppercase">
                    Non-Custodial Chain Wallets
                  </Text>
                  <div className="flex-row button-row">
                    <Button {...walletButtonProps} color="yellow" onClick={OpenWalletModal}>
                      create
                    </Button>
                    <Button {...walletButtonProps} color="green">
                      Receive Tokens
                    </Button>
                  </div>
                  <div className="flex-row button-row">
                    <Button {...walletButtonProps} color="red">
                      Transfer
                    </Button>
                    <Button {...walletButtonProps} color="black">
                      Details
                    </Button>
                  </div>
                </div>
              </Grid>
              {context && context.wallets && (
                <>
                  {context.wallets.map((wallet) => {
                    return (
                      <Grid item {...walletGridProps} key={wallet.wallet_id}>
                        <div className="wallet flex-col">
                          <div className="flex-row align-center">
                            <img src={getWalletDetails(wallet.currency).image} alt="" className="image" />
                            <div className="flex-col">
                              <Text c="green" className="uppercase" fz="18px">
                                Wallet ID: {wallet.wallet_id}
                              </Text>
                              <Text>Available Balance: {wallet.available_balance}</Text>
                              <Text>Pending Balance: {wallet.pending_balance}</Text>
                            </div>
                          </div>
                          <Text c="dimmed" className="uppercase">
                            {wallet.run} - {getWalletDetails(wallet.currency).tag}
                          </Text>
                          <div className="flex-row button-row">
                            <Button
                              {...walletButtonProps}
                              color="yellow"
                              onClick={() => {
                                OpenChannelsModal();
                                setCurrentWallet(wallet);
                              }}
                            >
                              Channels
                            </Button>
                            <Button {...walletButtonProps} color="green">
                              Receive Payment
                            </Button>
                          </div>
                          <div className="flex-row button-row">
                            <Button {...walletButtonProps} color="red" onClick={OpenTransferModal}>
                              Transfer
                            </Button>
                            <Button {...walletButtonProps} color="black">
                              Details
                            </Button>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
                </>
              )}
              {/* {RandomWalletData.map((wallet, index) => {
                return (
                  <Grid item {...walletGridProps} key={wallet.walletID}>
                    <div className="wallet flex-col">
                      <div className="flex-row align-center">
                        <img src={wallet.image} alt="" className="image" />
                        <div className="flex-col">
                          <Text c="green" className="uppercase" fz="18px">
                            Wallet ID: {wallet.walletID}
                          </Text>
                          <Text>Available Balance: {wallet.available}</Text>
                          <Text>Pending Balance: {wallet.pending}</Text>
                        </div>
                      </div>
                      <Text c="dimmed" className="uppercase">
                        {wallet.type} - {wallet.currency}
                      </Text>
                      <div className="flex-row button-row">
                        <Button
                          {...walletButtonProps}
                          color="yellow"
                          onClick={() => {
                            OpenChannelsModal();
                            setCurrentWallet(wallet);
                          }}
                        >
                          Channels
                        </Button>
                        <Button {...walletButtonProps} color="green">
                          Receive Payment
                        </Button>
                      </div>
                      <div className="flex-row button-row">
                        <Button {...walletButtonProps} color="red" onClick={OpenTransferModal}>
                          Transfer
                        </Button>
                        <Button {...walletButtonProps} color="black">
                          Details
                        </Button>
                      </div>
                    </div>
                  </Grid>
                );
              })} */}
              <Grid item {...walletGridProps} key="create-wallet">
                <div className="wallet create-wallet flex-col">
                  <div className="flex-row width-100 justify-between">
                    <img src={EnglishFlag} alt="" className="image" />
                    <img src={EuroFlag} alt="" className="image" />
                    <img src={NigerianFlag} alt="" className="image" />
                  </div>
                  <Button className="uppercase" color="red" onClick={OpenWalletModal}>
                    Create Wallet
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="right flex-row justify-between">
          <div className="right-right flex-col">
            <BalanceOverview />
          </div>
        </div>
      </div>
      <Modal opened={isWalletModalOpen} onClose={CloseWalletModal} centered size="75%" title="Create New Wallet">
        <div className="new-wallet-modal flex-col">
          <Text fw={600} fz="20px">
            Create Wallet
          </Text>
          <Text fz="16px">Create a non-custodial blockchain wallet</Text>

          <Select
            data={[
              { label: "Crypto", value: "34" },
              { label: "Fiat", value: "fiat" },
            ]}
            className="width-100"
          />
          <Text c="red">Disclaimer: Non-Custodial Wallet Warning</Text>
          <List type="ordered">
            <List.Item>
              <Text fz="15px" fw={500}>
                The user acknowledges and understands that non-custodial wallets created on the MoiPayWay platform
                solely provide access to personal funds, and MoiPayWay bears no responsibility for the storage,
                security, or recovery of private keys. Users are strongly advised to secure and backup their private
                keys independently.
              </Text>
            </List.Item>
            <List.Item>
              <Text fz="15px" fw={500}>
                MoiPayWay emphatically warns users that the irreversible nature of blockchain transactions implies sole
                responsibility for any loss, theft, or compromise of private keys. Users are urged to exercise utmost
                caution, employ robust security practices, and seek professional guidance to safeguard their
                non-custodial wallets and associated assets.
              </Text>
            </List.Item>
          </List>
          <Button color="black" className="btn uppercase" fullWidth>
            Create Wallet
          </Button>
        </div>
      </Modal>
      <Modal opened={isChannelsModalOpen} onClose={CloseChannelsModal} centered size="75%" title="Wallet Channels">
        <div className="new-wallet-modal flex-col">
          {currentWallet && (
            <>
              <div className="flex-row align-center">
                <img src={getWalletDetails(currentWallet.currency).image} alt="" />
                <div className="flex-col align-center">
                  <Text fw={600} fz="20px">
                    GBP Wallet
                  </Text>
                  <Text fw={600} fz="20px" c="green">
                    Wallet ID: {currentWallet.wallet_id}
                  </Text>
                </div>
              </div>
              <Text fw={500}>Available Balance: {currentWallet.available_balance}</Text>
              <Text fw={500}>Pending Balance: {currentWallet.pending_balance}</Text>
              <Text fz="16px">Create a non-custodial blockchain wallet</Text>
              <div className="flex-row width-100 justify-between">
                <Badge color="orange" className="uppercase" radius="sm" size="xl">
                  channels
                </Badge>
                <Badge color="red" className="uppercase" radius="sm" size="xl">
                  transfer
                </Badge>
                <Badge color="green" className="uppercase" radius="sm" size="xl">
                  receive payment
                </Badge>
                <Badge color="black" className="uppercase" radius="sm" size="xl">
                  transactions
                </Badge>
              </div>
              <Select
                placeholder="Select"
                label="Select Type"
                data={[{ label: "CELO", value: "34" }]}
                className="width-100"
              />
              <TextInput placeholder="Channel ID" label="Channel ID" className="width-100" />
              <Text c="red">Disclaimer: Non-Custodial Wallet Warning</Text>

              <Button color="black" className="btn uppercase" fullWidth>
                Filter
              </Button>
            </>
          )}
        </div>
      </Modal>
      <Modal opened={isTransferModalOpen} onClose={CloseTransferModal} centered size="75%" title="Transfer Wallet">
        <div className="transfer-wallet-modal flex-col align-center">
          <Text fw={500} fz="lg">
            Transfer Wallet
          </Text>
          <Text fz="lg">Transfer from non-custodial blockchain wallet</Text>
          <Select label="Choose Preferred Chain" data={[{ label: "CELO", value: "34" }]} className="width-100" />
          <TextInput label="Enter sender address" placeholder="Address" className="width-100" />
          <TextInput label="Enter sender private key" placeholder="Private key" className="width-100" />
          <TextInput
            label="Enter recipient address"
            placeholder="Enter destination wallet address"
            className="width-100"
          />
          <NumberInput label="Amount" placeholder="Enter amount" className="width-100" hideControls />

          <Text c="red" fz="sm">
            Disclaimer: Non-Custodial Wallet Warning
          </Text>
          <List type="ordered">
            <List.Item>
              <Text fz="15px" fw={500}>
                The user acknowledges and understands that non-custodial wallets created on the MoiPayWay platform
                solely provide access to personal funds, and MoiPayWay bears no responsibility for the storage,
                security, or recovery of private keys. Users are strongly advised to secure and backup their private
                keys independently.
              </Text>
            </List.Item>
            <List.Item>
              <Text fz="15px" fw={500}>
                MoiPayWay emphatically warns users that the irreversible nature of blockchain transactions implies sole
                responsibility for any loss, theft, or compromise of private keys. Users are urged to exercise utmost
                caution, employ robust security practices, and seek professional guidance to safeguard their
                non-custodial wallets and associated assets.
              </Text>
            </List.Item>
          </List>
          <Button color="black" className="btn uppercase" fullWidth>
            Transfer Tokens
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
