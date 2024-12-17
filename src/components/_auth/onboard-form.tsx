"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

const OnboardSchema = z.object({
  username: z.string().min(2).max(20),
});

export type OnboardFormFields = z.infer<typeof OnboardSchema>;

export default function OnboardForm() {
  const router = useRouter();
  const form = useForm<OnboardFormFields>({
    resolver: zodResolver(OnboardSchema),
    mode: "all",
    defaultValues: { username: "" },
  });

  const handleFormSubmit = async (formData: OnboardFormFields) => {
    const { username } = formData;
    await authClient.updateUser(
      { username },
      {
        onRequest: () => {},
        onSuccess: () => {
          form.reset();
          router.push("/dashboard");
        },
        onError: () => {},
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
          name="username"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="text"
                  placeholder="Select a username"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid} block={true}>
          <span>Sign in</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
