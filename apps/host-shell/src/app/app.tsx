import { Suspense } from 'react';
import AppRouter from '../routers';

export function App() {
  return (
    <Suspense fallback={null}>
      <div className="blue:bg-blue-bg h-screen">
        <AppRouter />
      </div>
    </Suspense>
  );
}

export default App;
