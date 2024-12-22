"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema } from "@/schemas/signin";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Checkbox from "@/components/core/checkbox";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Typography from "@/components/core/typography";

export type SigninFormFields = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<SigninFormFields>({
    resolver: zodResolver(signinSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmit = async (formData: SigninFormFields) => {
    const { email, password, rememberMe } = formData;
    await authClient.signIn.email(
      { email, password, rememberMe, callbackURL: "/dashboard" },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          form.reset();
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex flex-col gap-4"
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
                  type="text"
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
                  placeholder="●●●●●●●●"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-4">
          <Form.FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <Form.FormItem className="flex flex-row-reverse items-center">
                <Form.FormLabel>Remember for 30 days</Form.FormLabel>
                <Form.FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Typography.Text variant="sm/normal">
            <Link
              href="/auth/forgot-password"
              className="font-semibold text-primary"
            >
              Forgot password
            </Link>
          </Typography.Text>
        </div>
        <Button type="submit" disabled={loading} block={true} className="mt-4">
          Sign in
        </Button>
      </form>
    </Form.FormRoot>
  );
}
