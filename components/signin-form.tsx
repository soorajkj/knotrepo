"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema } from "@/lib/validations";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Typography from "@/components/core/typography";

type SigninFormFields = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const form = useForm<SigninFormFields>({
    resolver: zodResolver(signinSchema),
    defaultValues: { username: "", password: "" },
  });

  const processForm = async (_formData: SigninFormFields) => {};

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
                <Input
                  type="text"
                  placeholder="sooraj"
                  autoComplete="off"
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
                  <Link href="/">Forgot password</Link>
                </Typography.Text>
              </div>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button type="submit" block className="!mt-12">
          <span>Sign in</span>
        </Button>
      </form>
    </Form.FormRoot>
  );
}
