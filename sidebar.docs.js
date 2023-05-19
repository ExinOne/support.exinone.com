module.exports = {
  docs: [
    "introduction",
    "FAQs",
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'Features/TradingAccount',
        'Features/Savings',
        'Features/Affiliate',
        'Features/EPC',
        'Features/One-Click-to-Light-Up-Icons',
        'Features/AutoInvest'
      ],
    },    
    {
      type: 'category',
      label: 'Instructions',
      collapsed: false,
      items: [
        'Instructions/DelayedRelease',
        'Instructions/TradingModel'
      ],
    },        
    {
      type: 'category',
      label: 'AboutUs',
      collapsed: false,
      items: [
        'About-Us/Contact-us',
        {
          label: 'User-Agreement',
          type: 'category',
          items: [
            'About-Us/User-Agreement/EPC-User-Use-Agreement',
            'About-Us/User-Agreement/ExinOne-Loans-Service-Agreement',
            'About-Us/User-Agreement/ExinOne-Privacy-Agreement',
            'About-Us/User-Agreement/ExinOne-Service-Agreement',
            'About-Us/User-Agreement/Liquidity-Digital-Asset-Custody-Agreement',
            'About-Us/User-Agreement/Savings-Service-Agreement',
          ]
        },
        'About-Us/Pricing',
      ],
    },   
  ],
};


