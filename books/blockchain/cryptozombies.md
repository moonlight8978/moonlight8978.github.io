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

## Randomization

- The user can choose to not public the transaction, and run it indefinitely until they won the randomization, and publish that transaction to their own node and solve the next block

  - There are many other nodes, so the chance of solving next block is extremely low. But if the reward were high enough, it's worth to give a try

- Unless the randomization involes a lot of money, it is safe to use (using `keccak256`)
