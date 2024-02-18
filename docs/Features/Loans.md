---
title: Loans
---

ExinOne offers a pledge lending service, where you pledge your assets to ExinOne to obtain a pledge limit, and then you can lend out assets according to that limit.



**Accounts that support pledging**

- Trading Accounts
- Savings
- ExinPool (assets already in the node)
- Multi-sign accounts (to be supported soon)

In addition to the above accounts, assets in other accounts, such as Mixin Wallet, Auto-Invest Accounts, Delegated Accounts, etc., are not counted as pledged assets.



**Rates**: As shown on the ExinOne page.

Borrowing Time Limit: Daily interest, repayment as you borrow, the default period is 3650 days, partial repayment or full repayment is supported.



**Closed Position**

- Closed Position Warning Line: 120%.
- Close-out line: 110%.
- Closed Position Ratio = Pledged Asset Value / (Borrowing Amount + Interest).
- When the close-out ratio ≤ close-out warning line, the platform will send a close-out warning notice to the user.
- When the closing ratio ≤ closing line, the system will be forced to close the position.
- Closed position: the assets pledged by the user in the relevant pledge account will be taken out and sold to repay the borrowed currency and interest.



**Late Payment**

Failure to repay on the repayment date is considered overdue, and the rate will be rate * 8 per day until the position is automatically closed, so please avoid overdue.



**Sell Pledged Objects**

During the borrowing period, the pledged assets may not be traded. If you need to make the repayment, you can sell the assets to repay the borrowed currency through the "Sell Pledge" feature.



**Available assets are categorized as negative.**

Negative assets will not have any practical effect, and you can't borrow coins. Negative assets will not directly cause the position to burst. The position to burst is related to the value of the pledged assets.

If you want to continue borrowing coins, please pledge more assets to make the available assets score positive.



