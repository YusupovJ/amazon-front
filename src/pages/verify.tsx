import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { verifySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { TVerifySchema } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { useVerify } from "@/hooks/useAuth";
import { delLocalStorage, getLocalStorage, onError, setLocalStorage } from "@/lib/utils";
import { toast } from "sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const Verify = () => {
  const { mutate } = useVerify();
  const navigate = useNavigate();
  const form = useForm<TVerifySchema>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      otp: 0,
    },
  });
  const email = getLocalStorage("email") || "";

  const onSubmit = (values: TVerifySchema) => {
    if (email) {
      mutate(
        { ...values, email },
        {
          onSuccess(data) {
            setLocalStorage("accessToken", data.accessToken);
            setLocalStorage("refreshToken", data.refreshToken);

            toast.success("You successfully verified your account");
            navigate("/");
          },
          onError,
          onSettled() {
            delLocalStorage("email");
          },
        },
      );
    }
  };

  return (
    <main className="container flex flex-col items-center my-10">
      <Logo fill="black" />
      <div className="max-w-96 border rounded p-4 mt-5 w-full space-y-4">
        <h1 className="text-2xl font-bold">Account verification</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} onChange={(value) => field.onChange(+value)}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>
                    </InputOTP>
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
