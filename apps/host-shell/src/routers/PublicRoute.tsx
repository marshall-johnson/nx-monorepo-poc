import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@shared/auth';

export default function PublicRoute() {
  const { isLogin } = useAuth() || {};
  return isLogin ? <Navigate to="/" /> : <Outlet />;
}
