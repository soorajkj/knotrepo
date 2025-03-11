"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Form from "~components/core/form";
import Input from "~components/core/input";
import Textarea from "~components/core/textarea";

export const profileSchema = z.object({
  biography: z
    .string()
    .max(500, "Biography must be at most 500 characters")
    .optional(),
  image: z.string().url("Invalid image URL").optional(),
  location: z
    .string()
    .max(100, "Location must be at most 100 characters")
    .optional(),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .optional(),
  website: z.string().url("Invalid website URL").optional(),
});

export type ProfileFormFields = z.infer<typeof profileSchema>;

export default function SigninForm() {
  // const [loading, setLoading] = React.useState(false);
  const form = useForm<ProfileFormFields>({
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
    defaultValues: {
      biography: "",
      image: "",
      location: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const handleFormSubmit = async (_formData: ProfileFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 dark:text-white sm:text-xl/8">
        Profile Informations
      </h1>
      <form
        className="flex w-full flex-col divide-y divide-zinc-950/10 dark:divide-white/10"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="biography"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-6 sm:grid-cols-2">
              <div>
                <Form.FormLabel>Biography</Form.FormLabel>
                <p>Write a short description about yourself.</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Textarea placeholder="Tell us about yourself" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-6 sm:grid-cols-2">
              <div>
                <Form.FormLabel>Location</Form.FormLabel>
                <p>Where are you based?</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input type="text" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-6 sm:grid-cols-2">
              <div>
                <Form.FormLabel>Email</Form.FormLabel>
                <p>This will be displayed as your contact email.</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    {...field}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-6 sm:grid-cols-2">
              <div>
                <Form.FormLabel>Phone</Form.FormLabel>
                <p>Your contact number (optional).</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl className="flex">
                  <Input type="tel" placeholder="+1234567890" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-6 sm:grid-cols-2">
              <div>
                <Form.FormLabel>Website</Form.FormLabel>
                <p>Add a link to your personal or business website.</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    {...field}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
      </form>
    </Form.FormRoot>
  );
}
