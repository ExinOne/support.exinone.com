---
title: ExinOne Trading Model
---

ExinOne is the trading tool you've come to know within Mixin, offering you the security, privacy and convenience of trading tokens that are live on all major exchanges.

- Security: Tokens such as BTC, ETH, MOB, BOX, etc., are credited directly to your Mixin wallet upon transaction completion; ExinOne does not hold your assets in escrow.

- Privacy: There is no KYC required to use ExinOne, no need to provide a cell phone number, and you don't even need to be logged in to trade with ExinOne.
  - You can give ExinOne authorization to access additional services: 
    - Personal information, including Mixin ID, nickname, avatar, etc., used to associate you with trading accounts, current accounts, etc. and related configuration & order information.
    - (optional) Wallet Balance: Transactions and built-in Mixin wallet to show you your wallet assets balance.
    - (optional) Wallet Flow: for displaying your wallet flow on ExinOne's built-in Mixin wallet.

- Convenience: Using ExinOne is equivalent to registering an account with Binance, OKX, Gateio, Bybit, etc. You can trade tokens from the relevant exchanges directly on ExinOne, without having to go to each exchange to register an account, KYC, charge and withdraw coins, etc.

- Reasonable price: ExinOne connects to the best exchanges in the market with deep trading depth, providing you with competitive trading prices.

We would like to introduce you to the ExinOne business model.

## Terminology Introduction

**Trading Depth**

A good trading depth means lower price impact, as an example for the case of MOB's [trading depth](https://coinmarketcap.com/currencies/mobilecoin/#Markets):

![mobmarket](./mob.png)

As you can see, if you trade MOB on Binance, it takes about $20,000 to raise or lower the price of MOB by 2%, but if you trade on Bitfinex, it only takes about $1,000.

So, if you want a stable price without losing money, trading MOB with Binance will give you a better price than with Bitfinex.

**Funding Pool**: ExinOne offers trading and other services held by the capital situation. ExinOne needs to create pools on each exchange, Mixin, and on chain to keep the business running properly.

**On-chain Coin Deposit and Withdrawal**: Since the pool of funds is not unlimited (to ensure security, not all funds can be used for business), it is necessary to transfer between platforms from time to time, which will involve on-chain coin charging and withdrawing operations on the blockchain, which will incur certain fees, which may range from a few dollars to tens of dollars, and have a certain arrival time, which may be a few minutes to tens of hours (It can be simply analogized to express delivery).

**Liquidity**: This is also a concept related to the ExinOne pool, which refers to the ability of a token to maintain daily operations. With good liquidity, the relevant tokens can circulate freely without any restrictions, while with bad liquidity, the relevant tokens will have certain restrictions, such as the credit only supports crediting to Mixin accounts.

## Funding Pool transfer details

Take BTC, ETH, USDT as an example:

ExinOne needs to store a certain amount of BTC, ETH and USDT in the exchange and Mixin respectively, assuming 20 BTC, 40 ETH and 600,000 USDT respectively.

The initial pool of funds is assumed to be

| Token | Mixin   | Exchange |
| ----- | ------- | -------- |
| BTC   | 10      | 10       |
| ETH   | 20      | 20       |
| USDT  | 300,000 | 300,000  |

For the sake of calculation, suppose the price of BTC is $30,000 and the price of ETH is $2,000



At this point, user A pays 30,000 USDT to buy 1 BTC and user B sells 15 ETH to get 30,000 USDT, then

Since user A bought BTC, ExinOne's USDT in Mixin increased by 30,000 and BTC decreased by 1. At the same time, USDT spent 30,000 to buy 1 BTC in the exchange account.

Since B user sold ETH, ExinOne had 15 more ETH and paid 30,000 USD to the user. At the same time, ExinOne goes to the exchange and sells 15 ETH, getting 30,000 USDT

So the pool situation at this point becomes:

| Token | Mixin   | Exchange |
| ----- | ------- | -------- |
| BTC   | 9       | 11       |
| ETH   | 35      | 5        |
| USDT  | 300,000 | 300,000  |

After the user has traded two orders, ExinOne's BTC on Mixin is not much less and USDT happens to be unchanged, but there are 15 more ETH and only five more ETH left on the exchange. If another user sells ETH, ExinOne may not have enough ETH on the exchange to sell, so it needs to withdraw coins to replenish the pool of ETH on the exchange.

ExinOne needs to withdraw a certain amount of ETH from Mixin to the exchange in order to ensure that users can still sell ETH through ExinOne without any problems.

The above is a daily pool transfer, and since ExinOne can set a certain warning threshold, it is possible to fill and withdraw coins in advance, which is not a problem at the user level. But what happens if the market happens to be extreme?

## Response to extreme quotes

The extreme market here may be a one-sided market that spikes or plummets, and generally has the following pattern

- When there is a spike: more users choose to sell their coins - converting various tokens to stable coins USDT.
- When there is a crash: more users choose to "bottom out" - buying tokens with USDT.

**When there is a spike**

When there is a spike, there is a higher demand for users to sell their tokens, so the following scenarios may occur:

1. the relevant tokens on the exchange are sold short and need to wait for the exchange to replenish the relevant tokens before continuing trading
2. ExinOne's USDTs are sold short (they are transferred to users), there will be a delay in releasing the tokens, and you will be able to receive the USDTs after they are replenished.


**When there is a crash**

During a crash, people take a plunge and the following situations may occur:

1. The coins associated with ExinOne may be bought out, you will be prompted to "delay coin release" and will be automatically transferred to you when the assets are replenished.
2. If the USDT on the exchange is depleted, you will need to wait for the assets to be transferred, and then you can continue to plunge when the transfer is completed.


Therefore, under certain conditions, you may experience a [DelayedRelease](. /DelayedRelease), please be patient, coin withdrawals are on the way.



:::info Tips 

If you are trading a token and ExinOne prompts you that the pool is insufficient and you need to delay the release of the token, and you agree and are waiting, you can check through the bot 7000103056, you will usually see a certain number of top-ups for the relevant coin on the "Top-up" page, this top-up may be ExinOne replenishing the pool, after the top-ups arrive, you will receive the token you purchased .

Also, this bot allows you to check the time when the recharge arrives. If you find that there is no recharge for a long time, you can also consult us for details. 

:::info



## Reasons for "Deposit to trading account only" support

As we all know, Mixin Wallet is a secure decentralized wallet and people are very willing to deposit their assets into Mixin Wallet to store their assets safely, while ExinOne provides a trading account which is a centralized account managed by ExinOne, users naturally worry whether their assets are safe to be stored in the trading account.

Speaking of which, first we need to understand the specifics of trading accounts, see [this article](/docs/Features/TradingAccount), which describes the role of trading accounts:

1. pledge assets to obtain borrowing credits;
2. provide liquidity to ExinOne;
3. to facilitate trading within Mixin of tokens that are live on major exchanges.


As you can see, the trading account essentially provides three functions, which are used as follows:

**Pledge Borrowing**

ExinOne offers a pledged coin lending service where you can earn a certain amount of "asset points" by pledging assets to your trading account on ExinOne, to your current account, or by participating in ExinPool's node finance, where you can lend up to the same amount of USDT as your asset points.

The assets you pledge to ExinOne will be kept safe by ExinOne, such as BTC. In fact, most of the BTC in ExinOne is kept safe through multi-signature wallets, and only a small amount of BTC is kept in the exchange and Mixin to maintain basic exchange needs. Multi-signature safekeeping.

**Providing Liquidity**

The trading account was formerly known as the "liquidity pool", which is where the name comes from.

As mentioned above, ExinOne needs to establish a pool of funds between platforms and needs a large pool of funds to maintain the normal operation of the business, for this reason, ExinOne launched the "liquidity pool" function, users can deposit their assets into the liquidity pool, you can get a certain amount of lending, and at the same time, the higher contribution will also get a certain amount of Based on the trust of users and ExinOne's own development, ExinOne's liquidity needs for mainstream coins have been met, and the current concern is the safety of assets deposited into trading accounts by users. The vast majority of assets are held in a more secure and reliable manner through multiple signatures and other forms.

For some of the recently launched tokens, due to business adjustments, liquidity is no longer needed to support the normal operation of the business, and if there is sufficient liquidity, ExinOne can open the relevant tokens to withdraw coins to the Mixin wallet, which is more flexible overall.

**Providing Trading Services**

As you can see above, you have a general understanding of how ExinOne offers transactions, but if ExinOne has to transfer tokens to your Mixin wallet for every transaction, there are a number of limitations:

- What happens if the token in question is illiquid?
- What if Mixin does not support this public chain token?

This is the problem that "[Trading Account](/docs/Features/TradingAccount)" addresses:

- Restrict some tokens to be credited to the trading account only, so there is no need to withdraw all coins to Mixin, and users can trade the relevant tokens directly;
- Solve the problem of trading tokens of public chains that are not supported by Mixin and can be traded freely;
- Solves the problem that some tokens take too long to fill and withdraw: they can be traded in the trading account;
- It is even possible that some tokens involve contract swap, airdropping new coins and invalidating the old ones, Mixin itself does not support airdropping, so you can complete this operation through your trading account.

The rationale behind the "credit to trading account only" trading operation is that some (such as ETH, which has been on-chain for too long) or all (such as what you see in your trading account, which is a relatively low value user purchase) of your tokens are stored on the relevant exchange, and ExinOne promises that the assets you purchase that are stored on the relevant exchange will be used for other purposes, but ExinOne cannot guarantee that the assets on the exchange are 100% safe and secure and free of risk.

## Security of the Exchange?

Now that you have a basic understanding of the business model between ExinOne and the Exchange, you can now judge the risks involved for yourself.

Generally speaking before a serious incident (lightning) occurs on an exchange, there will be some news related to the withdrawal of coins and the strategies that ExinOne can respond to are

- Appropriate downgrading of assets present within the relevant exchange;

- migration of trading pairs to other platforms;

However, in order to maintain the stability of transactions, ExinOne cannot transfer all assets completely, so please be aware that the impact can be considered inevitable.

In case of extreme situations, ExinOne will take appropriate countermeasures in a timely manner, but please keep yourself informed and, if necessary, sell the relevant assets to ensure the safety of your assets.





