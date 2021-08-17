---
title: CryptoZombies tutorial
---

## ZombieFactory

- Maintain database of all zombies
- Create new zombie with random & unique apperance
- Zombie DNA => Appearance

## SmartContract

- A **contract** is the fundamental building block of Ethereum applications, all variables & functions belong to a contract
- **state variables** will be saved to Ethereum
- Function is `public` by default, it's best practice to mark the function `private` by default, and `private` function name

* Convention:
  - local variables name should begin with an underscore `_` to seperate with global variables
  - private functions name should also begin with an undercore
* Function modifier
  - `view`: The function only view the data, not change anything
  - `pure`: The function does not even touch the state

:::danger
Secure random-number generation in blockchain is a very difficult problem
:::

- **Event** are a way to for contract to communicate that something happened on the blockchain to the frontend. Frontend can listen for certain events

- `msg.sender` is address of the person (or smart contract) who called the function

:::caution
A DApp does not always mean decentralized, a backdoor can be created that allow only the owner to modify/control the application
:::

- User have to pay **gas** - a currency which can be bought by ETH, the total cost is the sum of the gas costs of all individual operations. But not all blockchain requires money to execute the function
  - Because any modification to the blockchain will run on every node to verify it.

:::tip
Code optimization is much more important than other language
:::

- Normally there's no benefit to use sub-types.

  - But `struct` is the exception. Sub-types can make the struct size smaller
  - Cluster identical data types together (i.e. put them next to each other in the struct) so that Solidity can minimize the required storage space

- `external view` functions are frees

  - but do cost gas if they are called internally

- Sometimes ineffecient code are better (i.e. recreate an array everytime, instead of store it) because it does not cost extra money.

:::tip
`require` will refund the user the gas costs, but `assert` does not.
:::

- Events can be use as cheaper storage. But events cannot be read from the contract itself. Only the app frontend can read them.

## Randomization

- The user can choose to not public the transaction, and run it indefinitely until they won the randomization, and publish that transaction to their own node and solve the next block

  - There are many other nodes, so the chance of solving next block is extremely low. But if the reward were high enough, it's worth to give a try

- Unless the randomization involes a lot of money, it is safe to use (using `keccak256`)

## Tokens

- ERC20, ERC721, ... tokens

- Tokens on Ethereum share the same interface.

  - `transferFrom(address _from, address _to, uint256 _tokenId)`, `balanceOf(address _owner)`
  - Can be intracted with in the same ways

- Basically is a contract that keeps track of who owns how much of that token

## Web3.js

- Web3 client will communicate with a blockchain Node

  - Host own Node
  - Use a provider
    - Infura (sets of Ethereum nodes)
    - Metamask (use Infura underhood)

- Cryptographic keys to sign the transaction (asymmetric encryption)

## Testing

- Ganache (local Ethereum network) + Truffle (Mocha)
  - Ganache gives 10 accounts and 100 ETH each account.
- contract call is asynchronous
  - `result`: `.logs[i].args.propertyName`, `.hash`, `.receipt`
- Time travelling: `evm_increaseTime`, `evm_mine`

:::note
Need to practice these functions
:::

## External API calls

- ie: Call Binance API to get current ETH price

- Cannot perform directly from the contract

- Flow:

  1. Contract function has been called
  2. Emit the RequestApi event
  3. A server which listen for Contract events (ie: NodeJS) receive the event
  4. NodeJS server request the API
  5. NodeJS server call contract function which will handle the API response
  6. The contract handle the response

- Use BN.js to handle number
  - Solidity support floating-point numbers.

:::tip The state are changes continuously, how all Blockchain nodes can read the same result?
Because the Contract itself, and the data is in the blockchain.

As long as the new contract (contains the new state that set by the oracle) has not been mined (writed to the blockchain), all the node will read the current state which are writed to the blockchain.
:::

- Use multiple oracles, with a thresold that describe how many success oracles is enough to execute the function.
  - avg the result, but vulnerable to attack if an oracle is trying to alter the result
  - be careful with overflow (use SafeMath)

:::tip
Use quartiles and interquartile ranges
https://www.mathsisfun.com/data/quartiles.html
:::

## Binance Chain

- BNB tokens, fee are paid in BNB
- Issue BEP-2 token cost 500 BNB tokens
- Binance chain does not support smart contracts
- Burning is a way to irrevocably destroy tokens.
  - It send the tokens to address 0x0 (kinda of blackhole)
  - Burn, Freeze, Unfreeze are native functions

## zkSync

- Gas costs for transaction is expensive. zkSync can reduce the cost

- zk-SNARKs (Zero-knowledge succinct non-interactive arguments of knowledge)

  - With zk-SNARKs Bob learns that Alice has more than 0.5ETH in her account, but Bob cannot extract any other knowledge from the proof that Alice present

- Rely on a smart contract deployed to the Ethereum network, most computation are performed off-chain

- SNARKs verifcation is significantly cheaper than storing in EVM

- Ethereum wallet -> create zkSync wallet -> deposite from Ethereum to zkSync -> register zkSync wallet address

:::note
Learn about zkSync
:::
