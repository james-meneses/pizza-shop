import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Enviamos um link de autenticação para seu e-mail.",
      variant: "success",
      action: (
        <ToastAction
          className="border-none bg-green-900 text-background hover:bg-green-800"
          onClick={() => handleSignIn(data)}
          altText="Reenviar"
        >
          Reenviar
        </ToastAction>
      ),
    });
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="">
            Criar conta
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="submit w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
