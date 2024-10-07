"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas/login";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

type LoginFormFields = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
    defaultValues: { email: "", password: "" },
  });

  const handleFormSubmit = (_formData: LoginFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col-reverse">
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input
                  type="text"
                  placeholder="yourmail@gmail.com"
                  autoComplete="off"
                  disabled={true}
                  {...field}
                />
              </Form.FormControl>
              <Form.FormLabel>Email</Form.FormLabel>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col-reverse">
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="off"
                  disabled={true}
                  {...field}
                />
              </Form.FormControl>
              <Form.FormLabel>Password</Form.FormLabel>
            </Form.FormItem>
          )}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!form.formState.isValid}
          block={true}
          className="!mt-12"
        >
          <span>Sign in</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
