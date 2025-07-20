import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@shared/auth';

export default function ProtectedRoute() {
  const { isLogin } = useAuth() || {};
  return isLogin ? <Outlet /> : <Navigate to="auth/login" />;
}
