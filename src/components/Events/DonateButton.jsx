import React, { useEffect } from 'react';

const DonateButton = () => {
  useEffect(() => {
    // Load the PayPal Donation button script
    const script = document.createElement('script');
    script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    script.charset = 'UTF-8';
    script.async = true;
    script.onload = initPayPalButton;
    document.getElementById('donate-button-container').appendChild(script);

    // Initialize the PayPal button
    function initPayPalButton() {
      PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'XT2ZT87GANXPJ',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
      }).render('#donate-button');
    }
  }, []);

  return (
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  );
};

export default DonateButton;
