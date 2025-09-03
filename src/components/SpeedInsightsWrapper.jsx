import React, { useState, useEffect } from 'react';

const SpeedInsightsWrapper = () => {
  const [SpeedInsights, setSpeedInsights] = useState(null);

  useEffect(() => {
    // Only load SpeedInsights in production
    if (import.meta.env.PROD) {
      import('@vercel/speed-insights/react')
        .then((module) => {
          setSpeedInsights(() => module.SpeedInsights);
        })
        .catch((error) => {
          console.log('SpeedInsights not available:', error);
        });
    }
  }, []);

  // Only render if SpeedInsights is loaded
  if (!SpeedInsights) return null;
  
  return <SpeedInsights />;
};

export default SpeedInsightsWrapper; 