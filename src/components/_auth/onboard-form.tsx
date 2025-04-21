"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { signupSchema } from "~schemas/signup";
import { authClient } from "~lib/auth-client";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Input from "~components/core/input";

const onboardSchema = signupSchema.pick({ username: true });
type OnboardSchemaType = z.infer<typeof onboardSchema>;

export default function OnboardForm() {
  const router = useRouter();
  const form = useForm<OnboardSchemaType>({
    resolver: zodResolver(onboardSchema),
    mode: "all",
    defaultValues: {
      username: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (formData: OnboardSchemaType) => {
      await authClient.updateUser(formData, {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError(context) {
          toast.error(context.error.message);
        },
      });
    },
  });

  const handleFormSubmit = async (formData: OnboardSchemaType) => {
    await mutateAsync(formData);
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
        <Button type="submit" variant="primary" disabled={isPending}>
          Get started
        </Button>
      </form>
    </Form.FormRoot>
  );
}
