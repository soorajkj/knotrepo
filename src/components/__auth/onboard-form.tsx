"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { z } from "zod";
import { OnboardSchema } from "@/schemas/onboard";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

type LoginFormFields = z.infer<typeof OnboardSchema>;

export default function OnboardForm() {
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(OnboardSchema),
    defaultValues: { username: "" },
    mode: "all",
  });

  const debouncedHandler = useDebouncedCallback(
    async (_username: string) => {},
    500
  );

  const handleCaptureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim();
    debouncedHandler(value);
  };

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
              <Form.FormControl className="relative">
                <Input.InputField
                  type="text"
                  placeholder="yourname"
                  autoComplete="off"
                  onChangeCapture={handleCaptureChange}
                  _prefix={"linkgram"}
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button type="submit" block>
          <span>Continue</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
