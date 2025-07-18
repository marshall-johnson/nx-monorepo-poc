import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  InputText,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';

const createSchema = z.object({
  email: z.string().email({ message: 'Invalid Email' }),
  name: z.string().min(6, { message: 'Name at least 6 characters' }),
});

type CreateFormData = z.infer<typeof createSchema>;

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(createSchema),
  });
  const onSubmit = (data: CreateFormData) => {
    console.log('data', data);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[500px] max-w-[500px]">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Add connection</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 mx-auto flex flex-col gap-1"
            >
              <InputText
                label="Email"
                register={register}
                name="email"
                errors={errors}
                className="!max-w-full"
              />
              <InputText
                label="Name"
                register={register}
                name="name"
                errors={errors}
                className="!max-w-full"
              />
              <div className="mt-3 flex justify-center">
                <Button type="submit" variant="default">
                  Create
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
