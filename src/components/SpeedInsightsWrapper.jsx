import React from 'react';

const SpeedInsightsWrapper = () => {
  // Only render SpeedInsights in production
  if (import.meta.env.PROD) {
    try {
      const { SpeedInsights } = require('@vercel/speed-insights/vite');
      return <SpeedInsights />;
    } catch (error) {
      console.log('Choom, your analytica got flatlined :(');
      return null;3
    }
  }
  return null;
};

export default SpeedInsightsWrapper; 