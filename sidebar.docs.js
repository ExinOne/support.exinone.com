module.exports = {
  docs: [
    "introduction",
    {
      type: 'category',
      label: 'Functions',
      collapsed: false,
      items: [
        'functions/TradingAccount',
        'functions/Savings',
        'functions/EPC',
        'functions/One-Click-to-Light-Up-Icons',
        'functions/AutoInvest'
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


