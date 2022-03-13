import React from "react";
import {useSelector} from "react-redux";
import {Button} from "reactstrap";
import "./style.css";

function Wallet() {
  const walletAddress = useSelector((state) => state.web3.account);
  return (
    <div className="wallet-container">
      <Button outline color="primary" size="lg">
        <a
          href={`https://etherscan.io/address/${walletAddress}`}
          target="blank"
        >
          {" "}
          Go To Wallet Detail
        </a>
      </Button>
    </div>
  );
}

export default Wallet;
