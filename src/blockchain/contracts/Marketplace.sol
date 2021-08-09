pragma solidity ^0.6.2;


abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes memory) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}

pragma solidity ^0.6.2;


contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () internal {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

   
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

pragma solidity ^0.6.2;

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

pragma solidity ^0.6.2;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // According to EIP-1052, 0x0 is the value returned for not-yet created accounts
        // and 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 is returned
        // for accounts without code, i.e. `keccak256('')`
        bytes32 codehash;
        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
        // solhint-disable-next-line no-inline-assembly
        assembly { codehash := extcodehash(account) }
        return (codehash != accountHash && codehash != 0x0);
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{ value: amount }("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain`call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
      return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        return _functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        return _functionCallWithValue(target, data, value, errorMessage);
    }

    function _functionCallWithValue(address target, bytes memory data, uint256 weiValue, string memory errorMessage) private returns (bytes memory) {
        require(isContract(target), "Address: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.call{ value: weiValue }(data);
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                // solhint-disable-next-line no-inline-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}

pragma solidity ^0.6.2;

/**
 * @dev Contract module which allows children to implement an emergency stop
 * mechanism that can be triggered by an authorized account.
 *
 * This module is used through inheritance. It will make available the
 * modifiers `whenNotPaused` and `whenPaused`, which can be applied to
 * the functions of your contract. Note that they will not be pausable by
 * simply including this module, only once the modifiers are put in place.
 */
contract Pausable is Context {
    /**
     * @dev Emitted when the pause is triggered by `account`.
     */
    event Paused(address account);

    /**
     * @dev Emitted when the pause is lifted by `account`.
     */
    event Unpaused(address account);

    bool private _paused;

    /**
     * @dev Initializes the contract in unpaused state.
     */
    constructor () internal {
        _paused = false;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function paused() public view returns (bool) {
        return _paused;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    modifier whenNotPaused() {
        require(!_paused, "Pausable: paused");
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    modifier whenPaused() {
        require(_paused, "Pausable: not paused");
        _;
    }

    /**
     * @dev Triggers stopped state.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(_msgSender());
    }

    /**
     * @dev Returns to normal state.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(_msgSender());
    }
}


pragma solidity ^0.6.2;

interface IERC1155Receiver {
    /**
        @dev Handles the receipt of a single ERC1155 token type. This function is
        called at the end of a `safeTransferFrom` after the balance has been updated.
        To accept the transfer, this must return
        `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
        (i.e. 0xf23a6e61, or its own function selector).
        @param operator The address which initiated the transfer (i.e. msg.sender)
        @param from The address which previously owned the token
        @param id The ID of the token being transferred
        @param value The amount of tokens being transferred
        @param data Additional data with no specified format
        @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed
    */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4);

    /**
        @dev Handles the receipt of a multiple ERC1155 token types. This function
        is called at the end of a `safeBatchTransferFrom` after the balances have
        been updated. To accept the transfer(s), this must return
        `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
        (i.e. 0xbc197c81, or its own function selector).
        @param operator The address which initiated the batch transfer (i.e. msg.sender)
        @param from The address which previously owned the token
        @param ids An array containing ids of each token being transferred (order and length must match values array)
        @param values An array containing amounts of each token being transferred (order and length must match ids array)
        @param data Additional data with no specified format
        @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed
    */
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external returns (bytes4);
}

pragma solidity ^0.6.2;

contract ERC1155Holder is IERC1155Receiver {
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}


pragma solidity ^0.6.2;

interface IERC165 {
    /**
     * @dev Returns true if this contract implements the interface defined by
     * `interfaceId`. See the corresponding
     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     * to learn more about how these ids are created.
     *
     * This function call must use less than 30 000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

pragma solidity ^0.6.2;

interface IERC1155 is IERC165 {
    /**
     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.
     */
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);

    /**
     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all
     * transfers.
     */
    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256[] ids,
        uint256[] values
    );

    /**
     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to
     * `approved`.
     */
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);

    /**
     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.
     *
     * If an {URI} event was emitted for `id`, the standard
     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value
     * returned by {IERC1155MetadataURI-uri}.
     */
    event URI(string value, uint256 indexed id);

    /**
     * @dev Returns the amount of tokens of token type `id` owned by `account`.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function balanceOf(address account, uint256 id) external view returns (uint256);

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.
     *
     * Requirements:
     *
     * - `accounts` and `ids` must have the same length.
     */
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    /**
     * @dev Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`,
     *
     * Emits an {ApprovalForAll} event.
     *
     * Requirements:
     *
     * - `operator` cannot be the caller.
     */
    function setApprovalForAll(address operator, bool approved) external;

    /**
     * @dev Returns true if `operator` is approved to transfer ``account``'s tokens.
     *
     * See {setApprovalForAll}.
     */
    function isApprovedForAll(address account, address operator) external view returns (bool);

    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via {setApprovalForAll}.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}



pragma solidity ^0.6.2;

/**
 * @dev Interface of the BEP20 standard as defined in the EIP.
 */
interface IBEP20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

pragma solidity ^0.6.2;

/**
 * @title SafeBEP20
 * @dev Wrappers around BEP20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeBEP20 for IBEP20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeBEP20 {
    using SafeMath for uint256;
    using Address for address;

    function safeTransfer(IBEP20 token, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(IBEP20 token, address from, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IBEP20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(IBEP20 token, address spender, uint256 value) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        // solhint-disable-next-line max-line-length
        require((value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeBEP20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(IBEP20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).add(value);
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(IBEP20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).sub(value, "SafeBEP20: decreased allowance below zero");
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IBEP20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(data, "SafeBEP20: low-level call failed");
        if (returndata.length > 0) { // Return data is optional
            // solhint-disable-next-line max-line-length
            require(abi.decode(returndata, (bool)), "SafeBEP20: BEP20 operation did not succeed");
        }
    }
}


pragma solidity ^0.6.2;

interface IMarketplace {

    struct Order {
        // Order ID
        uint256 orderId;
        // Owner of the NFT
        address seller;
        // NFT registry address
        address nftAddress;
        // NFT ID
        uint256 nftId;
        // Time when order was created
        uint256 createdAt;
        // Amount of tokens to sell
        uint256 amount;
        // Price (in wei) for the published item
        uint256 price;
        
    }
    
    struct Bid {
        // Bid Id
        bytes32 id;
        // Bidder address
        address bidder;
        // Time when bid was created
        uint256 createdAt;
        // amount of tokens to buy
        uint256 amount;
        // Price for the bid in wei
        uint256 price;
       
    }
    // Helper Structs
    
    struct Sellers {
        uint256 total;
        uint256[] ordersIds;
    }
    
    struct Seller {
        uint256 total;
        uint256[] ordersIds;
    }
    
    
    // ORDER EVENTS
    event OrderCreated(
        uint256 orderId,
        address indexed seller,
        address indexed nftAddress,
        uint256 nftId,
        uint256 createdAt,
        uint256 amount,
        uint256 priceInWei
        
    );

    event OrderUpdated(
        uint256 orderId,
        uint256 priceInWei
    );

    event OrderSuccessful(
        uint256 orderId,
        address indexed buyer,
        uint256 amount,
        uint256 priceInWei
    );

    event OrderCancelled(uint256 id);
    
    // BID EVENTS
    event BidCreated(
      bytes32 id,
      address indexed nftAddress,
      uint256 indexed assetId,
      address indexed bidder,
      uint256 createdAt,
      uint256 amount,
      uint256 priceInWei
    );
    event BidAccepted(bytes32 bidId);
    event BidCancelled(uint256 assetId);
    
}

pragma solidity ^0.6.2;

contract FeeManager is Ownable {

    event ChangedFeePerMillion(uint256 cutPerMillion);

    // Market fee on sales
    uint256 public cutPerMillion;
    uint256 public constant maxCutPerMillion = 100000; // 10% cut

    /**
     * @dev Sets the share cut for the owner of the contract that's
     *  charged to the seller on a successful sale
     * @param _cutPerMillion - Share amount, from 0 to 99,999
     */
    function setOwnerCutPerMillion(uint256 _cutPerMillion) external onlyOwner {
        require(
            _cutPerMillion < maxCutPerMillion,
            "The owner cut should be between 0 and maxCutPerMillion"
        );
        cutPerMillion = _cutPerMillion;
        emit ChangedFeePerMillion(cutPerMillion);
    }
}

pragma solidity ^0.6.2;

contract Marketplace is Ownable, Pausable, FeeManager, IMarketplace, ERC1155Holder {

    using Address for address;
    using SafeMath for uint256;
    using SafeBEP20 for IBEP20;

    IBEP20 public acceptedToken;
    
    
    // From ERC1155 registry assetId to order id to Order (to avoid asset collision)
    mapping(address => mapping(uint256 => mapping(uint256 => Order))) public orderByAssetId;
    
    // From ERC1155 registry assetId to order id to Bid (to avoid asset collision)
    mapping(address => mapping(uint256 => mapping(uint256 => Bid))) public bidByOrderId;
    
    // Collect orders from same item and diferent sellers, from ERC1155 registry assetId to itemId
    mapping(address => mapping(uint256 => Sellers)) public sellersByItem;
    
    // Collect orders from seller address
    
    mapping(address => Seller) public ordersBySeller;
    
    // collect order from order id
    mapping(uint256 => Order) public orderById;
    
    // Orders id counter
    uint256 public orders;
    
    // Data for safeTransfer
    bytes data = "0x00";

    // 1155 Interfaces
    bytes4 public constant _INTERFACE_ID_ERC1155 = 0x4e2312e0;
    bytes4 public constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;

    /**
     * @dev Initialize this contract. Acts as a constructor
     * @param _acceptedToken - currency for payments
     */
    constructor(address _acceptedToken) public Ownable() {
        require(
            _acceptedToken.isContract(),
            "The accepted token address must be a deployed contract"
        );
        acceptedToken = IBEP20(_acceptedToken);
    }

    /**
     * @dev Sets the paused failsafe. Can only be called by owner
     * @param _setPaused - paused state
     */
    function setPaused(bool _setPaused) public onlyOwner {
        return (_setPaused) ? _pause() : _unpause();
    }

    /**
     * @dev Creates a new order
     * @param _nftAddress - Non fungible registry address
     * @param _assetId - ID of the published NFT
     * @param _amount - amount of tokens to sell 
     * @param _priceInWei - Price in Wei for the supported coin
     
     */
    function createOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei
        
    )
        public payable whenNotPaused
    {
        _createOrder(_nftAddress, _assetId, _amount, _priceInWei);
    }
    
     /**
     * @dev Creates a new order
     * @param _nftAddress - Non fungible registry address
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Price in Wei for the supported coin
     
     */
    function _createOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei
        
    )
        internal
    {
        
        // Check nft registry
        IERC1155 nftRegistry = _requireERC1155(_nftAddress);

        // Check order creator is the asset owner
        uint256 assetOwnerBalance = nftRegistry.balanceOf(msg.sender, _assetId);

        require(
            assetOwnerBalance >= _amount,
            "Marketplace: dont have enough balance to transfer"
        );

        require(_priceInWei > 0, "Marketplace: Price should be bigger than 0");

        
        // get NFT asset from seller
        nftRegistry.safeTransferFrom(
            msg.sender,
            address(this),
            _assetId,
            _amount,
            data
        );

        // create the orderId
        uint256 orderId = orders;
        orders++;

        // save order
        orderByAssetId[_nftAddress][_assetId][orderId] = Order({
            orderId: orderId,
            seller: msg.sender,
            nftAddress: _nftAddress,
            nftId: _assetId,
            createdAt: block.timestamp,
            amount: _amount,
            price: _priceInWei
            
        });
        
        // save on sellers of this item
        
        Sellers storage sellers = sellersByItem[_nftAddress][_assetId];
        
        sellers.total++;
        sellers.ordersIds.push(orderId);
        
        // 
        
        Seller storage seller = ordersBySeller[msg.sender];
        
        seller.total++;
        seller.ordersIds.push(orderId);
        
        orderById[orderId] = orderByAssetId[_nftAddress][_assetId][orderId];
        
        

        emit OrderCreated(
            orderId,
            msg.sender,
            _nftAddress,
            _assetId,
            block.timestamp,
            _amount,
            _priceInWei
        );
    }

    /**
     * @dev Cancel an already published order
     *  can only be canceled by seller or the contract owner
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function cancelOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _orderId,
        uint256 _sellersIndex,
        uint256 _sellerIndex
    )
        public whenNotPaused
    {
        Order memory order = orderByAssetId[_nftAddress][_assetId][_orderId];

        require(
            order.seller == msg.sender || msg.sender == owner(),
            "Marketplace: unauthorized sender"
        );
        
         // Remove pending bid if any
        Bid memory bid = bidByOrderId[_nftAddress][_assetId][_orderId];

        if (bid.id != 0) {
            _cancelBid(
                _assetId,
                bid.bidder,
                _nftAddress,
                bid.price,
                _orderId
            );
        }
        
        // remove seller
        _removeSeller(
            _nftAddress,
            _assetId,
            _sellersIndex,
            _sellerIndex,
            order.seller
            );

        // Cancel order.
        _cancelOrder(
            order.orderId,
            _nftAddress,
            _assetId,
            msg.sender,
            order.amount
        );
    }
    
     /**
     * @dev Cancel an already published order
     *  can only be canceled by seller or the contract owner
     * @param _orderId - Bid identifier
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _seller - Address
     */
    function _cancelOrder(
        uint256 _orderId,
        address _nftAddress,
        uint256 _assetId,
        address _seller,
        uint256 _amount
    )
        internal
    {
        delete orderByAssetId[_nftAddress][_assetId][_orderId];
        delete orderById[_orderId];
        

        /// send asset back to seller
        IERC1155(_nftAddress).safeTransferFrom(
            address(this),
            _seller,
            _assetId,
            _amount,
            data
        );
        emit OrderCancelled(_orderId);
    }


    /**
     * @dev Update an already published order
     *  can only be updated by seller
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function updateOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _priceInWei,
        uint256 _orderId
    )
        public whenNotPaused
    {
        Order storage order = orderByAssetId[_nftAddress][_assetId][_orderId];
        Order storage orderbyid = orderById[_orderId];

        // Check valid order to update
        require(order.amount != 0, "Marketplace: asset not available");
        require(order.seller == msg.sender, "Marketplace: sender not allowed");
        
        // check order updated params
        require(_priceInWei > 0, "Marketplace: Price should be bigger than 0");
        
        order.price = _priceInWei;
        orderbyid.price = _priceInWei;
       
        emit OrderUpdated(order.orderId, _priceInWei);
    }

    /**
     * @dev Executes the sale for a published NFT 
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Order price
     */
    function safeExecuteOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei,
        uint256 _orderId,
        uint256 _sellersIndex,
        uint256 _sellerIndex
    )
        public whenNotPaused
    {
        // Get the current valid order for the asset or fail
        Order memory order = _getValidOrder(
            _nftAddress,
            _assetId,
            _orderId
        );

        /// Check the execution price matches the order price
        uint256 orderPayment =_amount. mul(_priceInWei);
        uint256 orderPrice = _amount.mul(order.price);
        
        require(orderPrice == orderPayment, "Marketplace: invalid price");
        require(order.seller != msg.sender, "Marketplace: unauthorized sender");
        require(IERC1155(_nftAddress).balanceOf(address(this), _assetId) >= _amount, "Not enough token balance" );
        
        
        // market fee to cut
        uint256 saleShareAmount = 0;

        // Send market fees to owner
        if (FeeManager.cutPerMillion > 0) {
            // Calculate sale share
            saleShareAmount = orderPrice
                .mul(FeeManager.cutPerMillion)
                .div(1e6);

            // Transfer share amount for marketplace Owner
            acceptedToken.safeTransferFrom(
                msg.sender, //buyer
                owner(),
                saleShareAmount
            );
        }

        // Transfer accepted token amount minus market fee to seller
        acceptedToken.safeTransferFrom(
            msg.sender, // buyer
            order.seller, // seller
            orderPrice.sub(saleShareAmount)
        );
        
         // Remove pending bid if any
        Bid memory bid = bidByOrderId[_nftAddress][_assetId][_orderId];

        if (bid.id != 0) {
            _cancelBid(
                _assetId,
                bid.bidder,
                _nftAddress,
                bid.price,
                _orderId
            );
        }

        _executeOrder(
            order.orderId,
            msg.sender, // buyer
            _nftAddress,
            _assetId,
            _amount,
            _priceInWei,
            _sellersIndex,
            _sellerIndex
        );
    }
    
    /**
     * @dev Executes the sale for a published NFT
     * @param _orderId - Order Id to execute
     * @param _buyer - address
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - NFT id
     * @param _priceInWei - Order price
     */
    function _executeOrder(
        uint256 _orderId,
        address _buyer,
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei,
        uint256 _sellersIndex,
        uint256 _sellerIndex
    )
        internal
    {
        
        Order storage order = orderByAssetId[_nftAddress][_assetId][_orderId];
        Order storage orderbyid = orderById[_orderId];
        
        if (order.amount == _amount) {
             //if buy all remaining amount, delete order and remove seller
            
            delete orderByAssetId[_nftAddress][_assetId][_orderId];
            delete orderById[_orderId];
            
            _removeSeller(_nftAddress, _assetId, _sellersIndex, _sellerIndex, order.seller);
        } else {
            
            // Set new amount for the order
            uint256 newAmount = order.amount.sub(_amount); 
            order.amount = newAmount;
            orderbyid.amount = newAmount;
        }
    
        // Transfer NFT asset
        IERC1155(_nftAddress).safeTransferFrom(
            address(this),
            _buyer,
            _assetId,
            _amount,
            data
        );

        // Notify ..
        emit OrderSuccessful(
            _orderId,
            _buyer,
            _amount,
            _priceInWei
        );
    }


    /**
     * @dev Internal function gets Order by nftRegistry and assetId. Checks for the order validity
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     */
    function _getValidOrder(
        address _nftAddress,
        uint256 _assetId,
        uint256 _orderId
    )
        internal view returns (Order memory order)
    {
        order = orderByAssetId[_nftAddress][_assetId][_orderId];

        require(order.amount != 0, "Marketplace: asset not available");
    }
    
     /**
     * @dev Places a bid for a published NFT and checks for the asset fingerprint
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _amount - Number of tokens to buy
     * @param _priceInWei - Bid price in acceptedToken currency
     */
    function safePlaceBid(
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei,
        uint256 _orderId
    )
        public whenNotPaused
    {
       
        _createBid(
            _nftAddress,
            _assetId,
            _amount,
            _priceInWei,
            _orderId
            
        );
    }


    /**
     * @dev Creates a new bid on a existing order
     * @param _nftAddress - Non fungible registry address
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Price in Wei for the supported coin
     */
    function _createBid(
        address _nftAddress,
        uint256 _assetId,
        uint256 _amount,
        uint256 _priceInWei,
        uint256 _orderId
    )
        internal
    {
        // Checks order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId, _orderId);

        
        // calculate order payment amount
        uint256 orderPayment = _amount.mul(_priceInWei);
        
        // Check price if theres previous a bid
        Bid memory bid = bidByOrderId[_nftAddress][_assetId][_orderId];
        
        if (bid.price != 0) {
            
        require(orderPayment > bid.price, "Marketplace: bid price should be higher than last bid");
           
            _cancelBid(
                _assetId,
                bid.bidder,
                _nftAddress,
                bid.price,
                _orderId
            );

        }
        
        require(_priceInWei > 0, "Marketplace: bid should be > 0");
        

        // Transfer sale amount from bidder to escrow
        acceptedToken.safeTransferFrom(
            msg.sender, // bidder
            address(this),
            orderPayment
        );

        // Create bid
        bytes32 bidId = keccak256(
            abi.encodePacked(
                block.timestamp,
                msg.sender,
                order.orderId,
                _priceInWei,
                _amount
            )
        );

        // Save Bid for this order
        bidByOrderId[_nftAddress][_assetId][_orderId] = Bid({
            id: bidId,
            bidder: msg.sender,
            createdAt: block.timestamp,
            amount: _amount,
            price: orderPayment
        });

        emit BidCreated(
            bidId,
            _nftAddress,
            _assetId,
            msg.sender, // bidder
            block.timestamp,
            _amount,
            orderPayment
        );
    }
    
      /**
     * @dev Cancel an already published bid
     *  can only be canceled by seller or the contract owner
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - id of the asset
     
     */
    function cancelBid(
        address _nftAddress,
        uint256 _assetId,
        uint256 _orderId
    )
        public whenNotPaused
    {
        Bid memory bid = bidByOrderId[_nftAddress][_assetId][_orderId];

        require(
            bid.bidder == msg.sender || msg.sender == owner(),
            "Marketplace: Unauthorized sender"
        );

        _cancelBid(
            _assetId,
            bid.bidder,
            _nftAddress,
            bid.price,
            _orderId
        );
    }

   
    /**
     * @dev Cancel bid from an already published order
     *  can only be canceled by seller or the contract owner
     * @param _assetId - asset identifier
     * @param _nftAddress - registry address
     * @param _bidder - Address
     * @param _escrowAmount - in acceptenToken currency
     */
    function _cancelBid(
        uint256 _assetId,
        address _bidder,
        address _nftAddress,
        uint256 _escrowAmount,
        uint256 _orderId
    )
        internal
    {
        delete bidByOrderId[_nftAddress][_assetId][_orderId];

        // return escrow to canceled bidder
        acceptedToken.safeTransfer(
            _bidder,
            _escrowAmount
        );

        emit BidCancelled(_assetId);
    }
    
    /**
     * @dev Executes the sale for a published NFT by accepting a current bid
     * @param _nftAddress - Address of the NFT registry
     * @param _assetId - ID of the published NFT
     * @param _priceInWei - Bid price in wei in acceptedTokens currency
     */
    function acceptBid(
        address _nftAddress,
        uint256 _assetId,
        uint256 _priceInWei,
        uint256 _orderId,
        uint256 _sellersIndex,
        uint256 _sellerIndex
    )
        public whenNotPaused
    {
        // check order validity
        Order memory order = _getValidOrder(_nftAddress, _assetId, _orderId);

        // item seller is the only allowed to accept a bid
        require(order.seller == msg.sender, "Marketplace: unauthorized sender");

        Bid memory bid = bidByOrderId[_nftAddress][_assetId][_orderId];
        
        require(bid.price == _priceInWei, "Marketplace: invalid bid price");
        
        // remove bid
        delete bidByOrderId[_nftAddress][_assetId][_orderId];

        emit BidAccepted(bid.id);

        // calc market fees
        uint256 saleShareAmount = bid.price
            .mul(FeeManager.cutPerMillion)
            .div(1e6);

        // transfer escrowed bid amount minus market fee to seller
        acceptedToken.safeTransfer(
            order.seller,
            bid.price.sub(saleShareAmount)
        );

        _executeOrder(
            order.orderId,
            bid.bidder,
            _nftAddress,
            _assetId,
            bid.amount,
            _priceInWei,
            _sellersIndex,
            _sellerIndex
        );
    }
    
    function _removeSeller (address _nftAddress, uint256 _assetId, uint256 _sellersIndex, uint256 _sellerIndex, address _sellerAddress ) internal {
        
        Sellers storage sellers = sellersByItem[_nftAddress][_assetId];
        
        sellers.ordersIds[_sellersIndex] = sellers.ordersIds[sellers.ordersIds.length - 1];
        sellers.ordersIds.pop();
        sellers.total--;
        
        Seller storage seller = ordersBySeller[_sellerAddress];
        
        seller.ordersIds[_sellerIndex] = seller.ordersIds[seller.ordersIds.length - 1];
        seller.ordersIds.pop();
        seller.total--;
        
    }
    
    function _requireERC1155(address _nftAddress) internal view returns (IERC1155) {
        require(
            _nftAddress.isContract(),
            "The NFT Address should be a contract"
        );
        return IERC1155(_nftAddress);
    }
     
    
     function getSellers (address _nftAddress, uint256 _assetId ) public view returns (uint256 [] memory, uint256) {
        
        Sellers storage sellers = sellersByItem[_nftAddress][_assetId];
         return (sellers.ordersIds, sellers.total);
    }
    
     function getOrdersId (address _sellerAddress ) public view returns (uint256 [] memory, uint256) {
        Seller memory seller = ordersBySeller[_sellerAddress];
        return (seller.ordersIds, seller.total);
    }  
    
    
}