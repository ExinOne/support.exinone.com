module.exports = {
  docs: [
    "introduction",
    "FAQs",
    {
      type: 'category',
      label: 'Instructions',
      collapsed: false,
      items: [
        'Instructions/Userguides',
        'Instructions/DelayedRelease',
        'Instructions/About-BOX-Trading',
        'Instructions/TradingDepth',
        'Instructions/faq',
        'Instructions/AutoInvest',
        'Instructions/InvestData',
      ],
    },  
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'Features/TradingAccount',
        'Features/Savings',
        'Features/Affiliate',
        'Features/EPC',
        'Features/Loans',
        'Features/AutoInvest',
        'Features/Addassets',
        'Features/SmallAmountWithdraw',
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
            'About-Us/User-Agreement/Trading-Account-Agreement',
            'About-Us/User-Agreement/Savings-Service-Agreement',
          ]
        },
        'About-Us/Pricing',
      ],
    },   
  ],
};


