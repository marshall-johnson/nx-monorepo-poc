import { useAuth } from '@shared/auth';
import { Logo } from '@shared/ui/icons';
import { Link } from 'react-router-dom';
import {
  InputText,
  Button,
  Card,
  CardContent,
  InputCheckbox,
} from '@shared/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  userName: z
    .string()
    .min(1, 'This field is required')
    .refine(
      (value) =>
        /^\w{3,20}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: 'Invalid email or username',
      }
    ),
  password: z.string().min(6, { message: 'Password at least 6 characters' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => {
    login(data.userName);
  };

  return (
    <div className="flex flex-1 items-center flex-col justify-center min-h-screen gap-9.5">
      <Logo />
      <Card className="w-full max-w-[550px]  py-[41px] px-[50px] mt-3.75">
        <CardContent className="p-0">
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-xl/[2] font-medium text-primary-foreground">
              Sign In To Your Account
            </h2>
            <InputText
              label="Username or email"
              register={register}
              errors={errors}
              name="userName"
            />
            <InputText
              label="password"
              name="password"
              errors={errors}
              register={register}
              type="password"
            />
            <div className="flex justify-between items-center">
              <InputCheckbox label="Remember Me" name="remember" />
              <Button type="submit" variant="outline" className="px-[21px]">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center gap-2 text-primary-foreground text-[13px] leading-4/[1.538]">
        <Link to="/auth/register" className="hover:underline">
          Sign Up
        </Link>
        <span>|</span>
        <Link to="/auth/forgot-password" className="hover:underline">
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
