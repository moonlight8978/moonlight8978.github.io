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
