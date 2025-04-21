"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { signinSchema } from "~schemas/signin";
import { authClient } from "~lib/auth-client";
import Button from "~components/core/button";
import Checkbox from "~components/core/checkbox";
import Form from "~components/core/form";
import Input from "~components/core/input";
import Typography from "~components/core/typography";

export type SigninFormFields = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const router = useRouter();
  const form = useForm<SigninFormFields>({
    resolver: zodResolver(signinSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (formData: SigninFormFields) => {
      await authClient.signIn.email(formData, {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (context) => {
          toast.error(context.error.message);
        },
      });
    },
  });

  const handleFormSubmit = async (formData: SigninFormFields) => {
    await mutateAsync(formData);
  };

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex w-full flex-col gap-4"
        autoComplete="off"
        onSubmit={form.handleSubmit(handleFormSubmit)}
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
                  placeholder="******"
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
          <Typography.Text variant="sm/normal">Forgot password</Typography.Text>
        </div>
        <Button type="submit" variant="primary" size="lg" disabled={isPending}>
          Sign in
        </Button>
      </form>
    </Form.FormRoot>
  );
}
