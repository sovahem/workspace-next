"use client";

import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";

import { z } from "zod";
import { Button } from "../ui/button";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Form } from "../ui/form";
import { FormRowTextField } from "../ui/form-row-textfield";
import { Label } from "../ui/label";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type UserType = z.infer<typeof UserSchema>;

const UserState: UserType = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const submit = (values: UserType) => {
    console.log(values);
  };

  return (
    <Form
      zodSchema={UserSchema}
      initialData={UserState}
      handleSubmit={submit}
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Connexion
          </CardTitle>
          <CardDescription className="text-center">
            Entrez vos identifiants pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormRowTextField
            label={"Adresse e-mail"}
            name="email"
            placeholder="exemple@email.com"
            PrevIcon={MailIcon}
          />
          <FormRowTextField
            label="Mot de passe"
            name="password"
            type={showPassword ? "text" : "password"}
            PrevIcon={LockIcon}
            action={
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            }
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className={"font-normal"}>
              Se souvenir de moi
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Se connecter</Button>
          <div className="text-sm text-center">
            <a href="#" className="text-primary hover:underline">
              Mot de passe oublié ?
            </a>
          </div>
        </CardFooter>
      </Card>
    </Form>
  );

  return (
    <Form
      zodSchema={UserSchema}
      initialData={UserState}
      handleSubmit={submit}
      className="flex flex-col gap-4"
    >
      <FormRowTextField label={""} name={"email"} />
      <FormRowTextField label={""} name={"password"} />
      <Button type="submit">Sign in</Button>
    </Form>
  );
};
