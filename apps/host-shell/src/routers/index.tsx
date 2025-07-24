import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import { JSX, Suspense, lazy } from 'react';
import DashboardPage from '../pages/dashboard';
import LoginPage from '../pages/auth/login';
import { SkeletonCreateConnectionForm } from '../components/skeletons';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
const HomePage = lazy(() => import('../pages/home'));

const ConnectionsRemote = lazy(() => import('connections_remote/Module'));

const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense
    fallback={
      <div className="text-foreground font-medium grid place-items-center h-screen w-full">
        Loading...
      </div>
    }
  >
    <Component />
  </Suspense>
);

export default function AppRouter() {
  return useRoutes([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: withSuspense(HomePage),
            },
            {
              path: '/missions',
              element: <DashboardPage />,
            },
            {
              path: '/connections',
              element: (
                <Suspense fallback={<SkeletonCreateConnectionForm />}>
                  <ConnectionsRemote />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/auth',
      element: <PublicRoute />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
      ],
    },
    {
      path: '*',
      element: <p>404 Not Found</p>,
    },
  ]);
}
