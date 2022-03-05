import React from "react";
import {useSelector} from "react-redux";

function Wallet() {
  const walletAddress = useSelector((state) => state.web3.account);
  return (
    <div>
      <a href={`https://etherscan.io/address/${walletAddress}`} target="blank">
        {" "}
        Go To Wallet Detail
      </a>
    </div>
  );
}

export default Wallet;
