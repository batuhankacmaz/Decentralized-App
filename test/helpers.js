export const EVM_REVERT = "VM Exception while processing transaction: revert";
export const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";
export const EVM_INVALID_ADDRESS =
  'invalid address (arg="_to", coderType="address", value=0)';
export const ether = (n) => {
  return new web3.utils.BN(web3.utils.toWei(n.toString(), "ether"));
};

//Same as Ether

export const tokens = (n) => ether(n);
