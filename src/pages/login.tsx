import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TLoginSchema } from "@/types/types";
import { Link } from "react-router-dom";

export const Login = () => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: TLoginSchema) => {
    console.log(values);
  };

  return (
    <main className="container flex flex-col items-center my-10">
      <Logo fill="black" />
      <div className="max-w-96 border rounded p-4 mt-5 w-full space-y-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter an email" {...field} />
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
                    <Input placeholder="Enter a password" type="password" {...field} />
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
            <Link to="/login/vendor" className="text-blue-500 hover:text-orange-400 transition-colors">
              Shop on Amazon Business
            </Link>
          </div>
        </Form>
      </div>
      <div className="mt-5 text-center space-y-2">
        <p className="text-sm text-muted-foreground">New to amazon?</p>
        <Button variant="outline" asChild>
          <Link to="/register">Create your Amazon account</Link>
        </Button>
      </div>
    </main>
  );
};
