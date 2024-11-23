import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TRegisterSchema } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks/useAuth";
import { onError, setLocalStorage } from "@/lib/utils";
import { toast } from "sonner";

export const Register = () => {
  const navigate = useNavigate();
  const { mutate } = useRegister();
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (values: TRegisterSchema) => {
    mutate(values, {
      onSuccess() {
        navigate("/verify");
        toast.info("Verify the account");
        setLocalStorage("email", values.email);
      },
      onError,
    });
  };

  return (
    <main className="container flex flex-col items-center my-10">
      <Logo fill="black" />
      <div className="max-w-96 border rounded p-4 mt-5 w-full space-y-4">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your first name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="At least 8 character" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Continue
            </Button>
          </form>

          <hr />

          <div className="mt-4">
            <h4 className="font-semibold text-sm mb-1">Buying for a work?</h4>
            <Link to="/register/vendor" className="text-blue-500 hover:text-orange-400 transition-colors">
              Create a free Amazon Business
            </Link>
          </div>
        </Form>
      </div>
      <div className="mt-5 text-center space-y-2">
        <p className="text-sm text-muted-foreground">Have an account?</p>
        <Button variant="outline" asChild>
          <Link to="/login">Login with your Amazon account</Link>
        </Button>
      </div>
    </main>
  );
};
