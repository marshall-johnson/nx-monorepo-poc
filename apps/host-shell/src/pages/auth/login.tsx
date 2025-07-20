import { useAuth } from '@shared/auth';
import { Button } from '@shared/ui';

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = () => {
    login('mock-token');
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}
