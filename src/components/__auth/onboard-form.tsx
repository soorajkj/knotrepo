"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDebounceCallback } from "usehooks-ts";
import { z } from "zod";
import { OnboardSchema } from "@/schemas/onboard";
import { cn } from "@/utils/cn";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Icon from "@/components/core/icon";
import Input from "@/components/core/input";

type LoginFormFields = z.infer<typeof OnboardSchema>;

export default function OnboardForm() {
  const [available, setAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [info, setInfo] = React.useState({ success: false, message: "" });
  const [interacted, setInteracted] = React.useState(false);
  const form = useForm<LoginFormFields>({
    resolver: zodResolver(OnboardSchema),
    defaultValues: { username: "" },
    mode: "onChange",
  });

  const debouncedHandler = useDebounceCallback(async (username: string) => {
    try {
      const response = await axios.post("/api/auth/onboard", { username });
      const { data } = response;
      setAvailable(data.success);
      setInfo({ success: data.success, message: data.message });
    } catch (error: any) {
      setInfo({ success: false, message: error.response.data.error });
    } finally {
      setLoading(false);
    }
  }, 500);

  const handleCaptureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setInteracted(true);
    const value = e.currentTarget.value;
    const validatedField = OnboardSchema.safeParse({ username: value });
    if (!validatedField.success) {
      setLoading(false);
      setInfo({ success: false, message: "" });
      return;
    }
    debouncedHandler(value);
  };

  const processForm = (_formData: LoginFormFields) => {};

  const renderSuffixIcon = () => {
    if (!interacted) return null;
    if (loading) {
      return <Icon icon="LoaderCircle" className="size-4 animate-spin" />;
    }
    const errorIcon = (
      <Icon icon="CircleAlert" className="size-4 text-red-600" />
    );
    if (form.formState.errors.username) return errorIcon;
    return available ? (
      <Icon icon="CircleCheck" className="size-4 text-green-600" />
    ) : (
      errorIcon
    );
  };

  const { formState } = form;
  const invalid = !!formState.errors.username || !available;

  return (
    <Form.FormRoot {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(processForm)}>
        <Form.FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormControl className="relative">
                <Input.InputField
                  type="text"
                  placeholder="yourname"
                  autoComplete="off"
                  _prefix="linktree"
                  _suffix={renderSuffixIcon()}
                  _suffixStyle={false}
                  onChangeCapture={handleCaptureChange}
                  invalid={interacted && invalid}
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage
                className={cn(info.success && "text-green-600")}
              >
                {info.message}
              </Form.FormMessage>
            </Form.FormItem>
          )}
        />
        <Button
          type="submit"
          block={true}
          disabled={!form.formState.isValid || loading || !available}
        >
          <span>Continue</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
