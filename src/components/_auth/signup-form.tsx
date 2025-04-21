"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "~schemas/signup";
import { authClient } from "~lib/auth-client";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Icon from "~components/core/icon";
import Input from "~components/core/input";

const stepOne = signupSchema.pick({ email: true, password: true, name: true });
type StepOne = z.infer<typeof stepOne>;

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const form = useForm<z.infer<typeof stepOne>>({
    resolver: zodResolver(stepOne),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (formData: StepOne) => {
      await authClient.signUp.email({
        ...formData,
        fetchOptions: {
          onSuccess() {
            router.push("/auth/signup/onboard");
          },
        },
      });
    },
  });

  const handleFormSubmit = async (formData: StepOne) => {
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
          name="name"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Full Name</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="text"
                  placeholder="Enter your name"
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
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="off"
                  rightAdddon={
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword((pre) => !pre)}
                      iconOnly
                    >
                      <Icon
                        icon={showPassword ? "Eye" : "EyeOff"}
                        className="size-4"
                      />
                    </Button>
                  }
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isPending}
          className="mt-4"
        >
          Get started
        </Button>
      </form>
    </Form.FormRoot>
  );
}
