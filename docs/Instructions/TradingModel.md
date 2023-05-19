---
title: ExinOne Trading Model
---



ExinOne brings together the exchanges with the best trading depth in the market to provide trading services for users in Mixin, such as Binance, OKX, Gateio, etc., so that you can enjoy the best trading depth on ExinOne, and now we introduce you to the ExinOne trading business model:



## Terminology Introduction

- Pool: In order to provide transactions, ExinOne needs to have a certain reserve of tokens for you to buy/sell (goods)
- On-chain coin withdrawal: Refers to coin withdrawals that occur within the exchange and Mixin, due to the time required for blockchain coin withdrawals to be confirmed.

- Delayed Coin Release: In some cases (described below), the coins cannot be transferred to the user's Mixin wallet immediately, so the transfer needs to be delayed for a while, i.e. delayed coin release
- Liquidity: refers to the situation where ExinOne's pool of funds supports the user's transactions



## Case description

Take BTC, ETH, and USDT as an example:

ExinOne needs to store a certain amount of BTC, ETH, and USDT in the exchange and Mixin, respectively, assuming 100 BTC, 1000 ETH, and 1000000 USDT, respectively

So the initial pool of funds is

| Token | ExinOne | Exchange |
| ----- | ------- | -------- |
| BTC   | 50      | 50       |
| ETH   | 100     | 100      |
| USDT  | 500000  | 500000   |



With these assets, transactions can be offered. Suppose a user now pays 30,000 USDT to ExinOne for 1 BTC, and ExinOne's assets change to:

| Token | ExinOne | Exchange |
| ----- | ------- | -------- |
| BTC   | 49      | 51       |
| ETH   | 100     | 100      |
| USDT  | 530000  | 470000   |

As you can see, the amount of BTC and USDT on ExinOne and on the exchange has changed:

USDT in ExinOne increased (because users paid 30,000 USDT to ExinOne) and BTC decreased (because ExinOne transferred 1 BTC to a user)

At the same time, the USDT and BTC on the exchange are the opposite of ExinOne - ExinOne bought coins on the exchange for its users.



Suppose the current cryptocurrency price fluctuates and plunges, and users start to "bottom out", then ExinOne's USDT will increase and buy BTC, ETH and other tokens, suppose at this time users pay 400,000 USDT for BTC and ETH, after the purchase is completed, as shown below, ExinOne's USDT will reach 930,000, while the exchange's USDT will only be 70,000



| Token | ExinOne | Exchange |
| ----- | ------- | -------- |
| BTC   | -       | -        |
| ETH   | -       | -        |
| USDT  | 930000  | 70000    |

This means that users can't buy another 70,000 coins, because the exchange's USDT is depleted.

In this case, it is necessary to "balance the pool": some of the USDT on ExinOne will be transferred to the exchange, thus maintaining the stability of the pool.

If the user buys a lot of BTC and the BTC in ExinOne is depleted, ExinOne cannot transfer the coins to the user's Mixin wallet temporarily, then the BTC will be withdrawn from the exchange to Mixin to release the coins, but since it takes time to transfer the coins on the chain, the user may see a "delayed release of coins ", which varies from coin to coin and can take anywhere from a few minutes to a few hours.



## Extension

Based on the introduction of the business model above, please think: why some coins can only be credited to a trading account?

The following is the answer:

As mentioned above, all tokens that can provide transactions need to be backed up by liquidity. Under the previous business model, it is necessary to build a pool of funds both within Mixin and on the exchange, otherwise frequent coin withdrawals are needed to maintain the balance of the pool, and here are some problems:

1. the cost of withdrawing coins is very high
2. if the transaction volume of a single coin is insufficient, it cannot cover the withdrawal cost
3. If Mixin does not support a public chain, ExinOne will not be able to provide trading services for the relevant tokens


In order to solve this problem, ExinOne has set some of the coins in the trading account to be "credited to the trading account only", so that all the coins purchased by users are stored in the corresponding exchange and ExinOne does not use the tokens for other purposes, so Users can buy and sell freely at any time.

As a result, ExinOne can support more trading pairs.



