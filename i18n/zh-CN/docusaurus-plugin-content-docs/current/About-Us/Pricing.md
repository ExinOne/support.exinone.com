---
title: 定价规则
---

ExinOne 采用 One-Step 服务，调用全网深度、流动性最好的交易所 API 直接吃单成交。

## 费用

- 针对各币种的版本兑换：免费；
    - 举例：MATIC(Polygon)/MATIC(ERC20), BNB(BEP2)/BNB(BEP20), USDT 的不同版本兑换。
- 针对稳定币间的兑换：收取 0.05% 手续费，手续费可以被 EPC 抵扣；
    - 举例：USDC/USDT 交易对，收取 0.05% 手续费，手续费可以被 EPC 抵扣。
- 针对绝大多数的币币交易：0.2% 手续费，手续费可以被 EPC 抵扣；
    - 举例：ETH/USDT 交易对，交易手续费是交易额的 0.2%，手续费可以被 EPC 抵扣。
- 对于 BOX 的交易，交易费率不高于 1%，请以页面展示为准；
    - 当前，买入 BOX 收取 0.2% 手续费，手续费可以被 EPC 抵扣；
    - 卖出 BOX 收取 0.5% 手续费，手续费不可以被 EPC 抵扣；
- 闪兑多步交易只收取一次手续费；
    - 收取原则：以最高手续费为准，如果其中一个路径不支持 EPC 抵扣，则整个路径不支持 EPC 抵扣。
    - 举例：将 BOX 卖出为 USDC，交易路径是：BOX → USDT → USDC
        - 其中 BOX → USDT 交易对收取 0.5% 手续费，不支持 EPC 抵扣手续费， USDT → USDC 交易对收取 0.05% 手续费，支持 EPC 抵扣手续费；
        - 根据以上原则，此路径的实际手续费为 0.5%，不支持 EPC 抵扣手续费
- 币币交易市价单与现价单手续费一致，均为 0.2%，可以使用 EPC 抵扣手续费
- 定投的交易是通过闪兑完成的，定投功能本身不收费。

## EPC

- EPC 是 ExinOne 的手续费点卡，用以抵扣 ExinOne 上的交易手续费，100 EPC 可以抵扣价值 $1 的手续费。
- EPC 需要充值到 ExinOne 的 EPC 账户内才可抵扣。
- 更多关于 EPC 的介绍，请查看 EPC介绍

感谢您对 ExinOne 的支持，如果有任何疑问，可以随时与我们联系。