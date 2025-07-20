import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import { Suspense, lazy } from 'react';
import DashBoardPage from '../pages/dashboard';
import LoginPage from '../pages/auth/login';
import { SkeletonCreateConnectionForm } from '../components/skeletons';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const ConnectionsRemote = lazy(() => import('connections_remote/Module'));

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
              element: <DashBoardPage />,
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
