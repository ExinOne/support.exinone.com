---
title: ExinOne Pricing Rules
---

## Fees
- Exchange of versions for each currency: 0.05%
    - Examples: USDT version convert fee is 0.05%.
- For most coin transactions: 0.2% handling fee, which EPC can offset.
    - Example: For ETH/USDT pairs, the transaction fee is 0.2% of the transaction amount, which EPC can offset.
- For BOX transactions, the transaction fee rate is not higher than 1%, please refer to the page display.
    - Currently, 0.2% of the transaction amount is charged for buying BOX, and EPC can deduct the commission.
    - 1% handling fee for selling BOX will be charged, and EPC can not deduct the handling fee.
    - BOX selling fees are dynamically adjusted between 0.2% and 1% and ExinOne does not promise to provide BOX trading services forever.

- Convert multi-step transactions are only charged once.
    - Charging principle: the highest handling fee prevails. If one of the paths does not support EPC offset, the whole path does not support EPC offset.
    - Example: Sell BOX to USDC, the transaction path is: BOX → USDT → USDC
        - The BOX → USDT transaction pair charges a 1% handling fee and does not support the EPC deduction fee, and the USDT → USDC transaction pair charges a 0.05% handling fee and supports the EPC deduction fee.
        - According to the above principles, the actual handling fee for this path is 1% and does not support the EPC deduction fee.
- Spot market order and limit order fees are the same. Both are 0.2%, you can use EPC to offset the fees.
- The transaction of the Auto Invest Plan is completed through Convert, and the Auto Invest Plan feature does not charge.

## EPC
- EPC is the fee point card of ExinOne, which is used to offset the transaction fee on ExinOne.
- 100 EPC can offset the fee worth $1.
- EPC needs to be credited to your ExinOne EPC account to be credited.
- For more information about EPC, please see [EPC Introduction](/Features/EPC.md).



