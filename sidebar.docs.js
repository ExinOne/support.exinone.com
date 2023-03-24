module.exports = {
  docs: [
    "introduction",
    {
      type: 'category',
      label: 'Mainnet',
      collapsed: false,
      items: [
        'mainnet/overview',
        {
          label: 'Concepts',
          type: 'category',
          items: [
            'mainnet/concepts/how-it-works',
            'mainnet/concepts/xin',
            'mainnet/concepts/full-node',
            'mainnet/concepts/tip',
            'mainnet/concepts/multisig',
            'mainnet/concepts/chain',
            'mainnet/concepts/price',
          ]
        },
        {
          label: 'MTG',
          type: 'category',
          items: [
            'mainnet/mtg/overview',
            'mainnet/mtg/chains',
            'mainnet/mtg/lend',
            'mainnet/mtg/exchange',
            'mainnet/mtg/amm',
            'mainnet/mtg/stablecoin',
            'mainnet/mtg/wappercoin',
          ]
        },
      ],
    },
  ],
};
