import React, { useEffect, useRef } from 'react';
import './TradingViewTickerWidget.css'

const TradingViewTickerWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NASDAQ:AAPL', title: 'Apple' },
        { proName: 'NASDAQ:GOOGL', title: 'Google' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { proName: 'NASDAQ:TSLA', title: 'Tesla' },

        // Add more symbols as needed

      ],
      showSymbolLogo: true, // Display company logos
      colorTheme: 'dark',
      isTransparent: false, // Make the background transparent
      displayMode: 'adaptive',
      locale: 'en',
    });

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={widgetRef} className="tradingview-widget-container"></div>;
};

export default TradingViewTickerWidget;
