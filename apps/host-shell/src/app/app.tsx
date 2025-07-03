import { Suspense, lazy } from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@shared/ui';

const ConnectionsRemote = lazy(() => import('connections_remote/Module'));

export function App() {
  return (
    <Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/connections">ConnectionsRemote1</Link>
        </li>
      </ul>
      <div className="text-lg">
        <Button variant="destructive">Default Button</Button>
      </div>
      <Routes>
        {/* <Route path="/" element={<NxWelcome title="host-shell" />} /> */}
        <Route path="/" element={<div className="text-lg">Home page</div>} />
        <Route
          path="/connections"
          element={
            <Suspense fallback={<div>Loading Auth...</div>}>
              <ConnectionsRemote />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
