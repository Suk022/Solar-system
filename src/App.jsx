import Home from "./Home";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Home />
      {import.meta.env.PROD && <SpeedInsights />}
      {import.meta.env.PROD && <Analytics />}
    </>
  );
};


export default App; 