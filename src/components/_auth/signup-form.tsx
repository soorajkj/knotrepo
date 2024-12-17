"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignupSchema } from "@/schemas/signup";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

export type SignupFormFields = z.infer<typeof SignupSchema>;

export default function SignupForm() {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<SignupFormFields>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (formData: SignupFormFields) => {
    const { email, password } = formData;
    await authClient.signUp.email(
      {
        email,
        name: "Test User",
        password,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          form.reset();
          alert("User created succesfuly");
        },
        onError: (context) => {
          setLoading(false);
          alert(context.error.message);
        },
      }
    );
  };

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="Create a password"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid} block={true}>
          {loading ? "Submitting..." : "Get started"}
        </Button>
      </form>
    </Form.FormRoot>
  );
}
