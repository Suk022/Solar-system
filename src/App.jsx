import { lazy, Suspense } from 'react';
import Home from "./Home";

const SpeedInsightsWrapper = lazy(() => import('./components/SpeedInsightsWrapper'));
const Analytics = lazy(() => import('@vercel/analytics/react').then(module => ({ default: module.Analytics })));

const App = () => (
  <>
    <Home />
    <Suspense fallback={null}>
      <SpeedInsightsWrapper />
    </Suspense>
    <Suspense fallback={null}>
      <Analytics />
    </Suspense>
  </>
);

export default App; 