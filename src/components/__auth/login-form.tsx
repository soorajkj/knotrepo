"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas/login";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Typography from "@/components/core/typography";

type LoginFormFields = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });

  const processForm = (_formData: LoginFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(processForm)}>
        <Form.FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input.InputField
                  type="text"
                  placeholder="sooraj"
                  autoComplete="off"
                  disabled
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <div className="flex items-center justify-between">
                <Form.FormLabel>Password</Form.FormLabel>
                <Typography.Text variant="sm/normal">
                  <Link href="/auth/forgot-password">Forgot password</Link>
                </Typography.Text>
              </div>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input.InputField
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="off"
                  disabled
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button type="submit" block disabled className="!mt-12">
          <span>Sign in</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
