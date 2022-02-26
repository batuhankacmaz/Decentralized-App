pragma solidity ^0.5.0;

import "./Token.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

// Deposit & Withdraw Funds
// Manage Orders - Make or Cancel
// Handle Trades - Charge fees

// TODO:
// [X] Set The Fee Account
// [X] Deposit Ether
// [X] Withdraw Ether
// [X] Deposit Tokens
// [X] Withdraw Tokens
// [X] Check Balances
// [X] Make Order
// [X] Cancel Order
// [ ] Fill Order 
// [ ] Charge Fees 
 
 contract Exchange {
     using SafeMath for uint;
     //Variables
     address public feeAccount; // the account receives excahnge fees
     uint256 public feePercent; // the fee percent
     address constant ETHER = address(0); // store Ether in tokens mapping with blank address
     mapping(address => mapping(address => uint256))public tokens;
     // a way to store the order
     mapping(uint256 => _Order) public orders;
     uint256 public orderCount; 
     mapping(uint256 => bool) public orderCancelled;

     //events
     event Deposit(address token, address user, uint256 amount, uint256 balance);
     event Withdraw(address token, address user, uint256 amount, uint256 balance );
     event Order(
         uint256 id,
         address user,
         address tokenGet,
         uint256 amountGet,
         address tokenGive,
         uint256 amountGive,
         uint256 timestamp
     );
     event Cancel(
         uint256 id,
         address user,
         address tokenGet,
         uint256 amountGet,
         address tokenGive,
         uint256 amountGive,
         uint256 timestamp
     );

     //
     // a way to model the order 
    struct _Order{
        uint256 id;
        address user;
        address tokenGet;
        uint256 amountGet;
        address tokenGive;
        uint256 amountGive;
        uint256 timestamp;
    }

    
     
     

     constructor(address _feeAccount, uint256 _feePercent) public {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
     }

     //Fallback: reverts if Ether is sent to this smart contract by mistake
     function() external {
         revert();
     }

     function depositEther() payable public{
        tokens[ETHER][msg.sender] = tokens[ETHER][msg.sender].add(msg.value);
        emit Deposit(ETHER, msg.sender, msg.value, tokens[ETHER][msg.sender]);
     }
     function withdrawEther(uint _amount) public {
         require(tokens[ETHER][msg.sender] >= _amount);
         tokens[ETHER][msg.sender] = tokens[ETHER][msg.sender].sub(_amount);
         msg.sender.transfer(_amount);
         emit Withdraw(ETHER, msg.sender, _amount, tokens[ETHER][msg.sender]);
         
     }

     // any erc20 token you can use this method 
     function depositToken(address _token, uint _amount) public {
         //Which token?
         //How much?
         require(_token != address(0));
         //TODO: Don't allow Ether Deposits 
         require(Token(_token).transferFrom(msg.sender, address(this), _amount));
         tokens[_token][msg.sender] = tokens[_token][msg.sender].add(_amount);
         //Manage deposit - update balance
         emit Deposit(_token, msg.sender, _amount, tokens[_token][msg.sender]);
         //Emit Event

     } 
     function withdrawToken(address _token, uint256 _amount) public{
         require(_token != ETHER); 
         require(tokens[_token][msg.sender] >= _amount);
         tokens[_token][msg.sender] = tokens[_token][msg.sender].sub(_amount);
         require(Token(_token).transfer(msg.sender, _amount));
         emit Withdraw(_token, msg.sender, _amount, tokens[_token][msg.sender]);
     }
     function balanceOf(address _token, address _user) public view returns (uint256){
         return tokens[_token][_user];
     }
     //add the order to storage
     function makeOrder(address _tokenGet, uint256 _amountGet, address _tokenGive, uint256 _amountGive) public{
         orderCount = orderCount.add(1);
         orders[orderCount] = _Order(orderCount, msg.sender, _tokenGet, _amountGet, _tokenGive, _amountGive, now ); 
         emit Order(orderCount,msg.sender, _tokenGet, _amountGet, _tokenGive, _amountGive, now);
     }

     function cancelOrder(uint256 _id) public {
         //Must be "my" order
         _Order storage _order = orders[_id];
         require(address(_order.user) == msg.sender);
         //Must be valid order 
         require(_order.id == _id);
         orderCancelled[_id] = true;
         emit Cancel(_order.id,msg.sender, _order.tokenGet, _order.amountGet, _order.tokenGive, _order.amountGive, now);
     }
 }