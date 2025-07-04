import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/dashboard';
import { SkeletonCreateConnectionForm } from '../components/skeletons';

const ConnectionsRemote = lazy(() => import('connections_remote/Module'));

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route
          path="/connections"
          element={
            <Suspense fallback={<SkeletonCreateConnectionForm />}>
              <ConnectionsRemote />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
