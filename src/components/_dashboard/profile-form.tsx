"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileSchema } from "~schemas/profile";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Input from "~components/core/input";
import Textarea from "~components/core/textarea";

export type ProfileFormFields = z.infer<typeof profileSchema>;

export default function ProfileForm() {
  const form = useForm<ProfileFormFields>({
    resolver: zodResolver(profileSchema),
    mode: "all",
    defaultValues: {
      fullname: "",
      biography: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const handleFormSubmit = (_formData: ProfileFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex w-full flex-col"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Form.FormLabel>Name</Form.FormLabel>
                <p className="text-sm">
                  Write a short description about yourself.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input
                    placeholder="This will displayed in website"
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
          name="biography"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Form.FormLabel>About</Form.FormLabel>
                <p className="text-sm">
                  Write a short description about yourself.
                </p>
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
          name="email"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Form.FormLabel>Email</Form.FormLabel>
                <p className="text-sm">
                  This will be displayed as your contact email.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input
                    type="text"
                    placeholder="chris.martin@gmail.com"
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
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Form.FormLabel>Phone</Form.FormLabel>
                <p className="text-sm">Your contact number (optional).</p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl className="flex">
                  <Input
                    type="tel"
                    placeholder="+1 416 555 0198"
                    disabled
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
          name="website"
          render={({ field }) => (
            <Form.FormItem className="grid gap-x-8 gap-y-6 py-10 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Form.FormLabel>Website</Form.FormLabel>
                <p className="text-sm">
                  Add a link to your personal or business website.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Form.FormControl>
                  <Input
                    type="text"
                    placeholder="www.chrismartin.com"
                    {...field}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <div className="flex flex-1 items-center justify-end py-12">
          <div className="flex items-center gap-3">
            <Button
              type="reset"
              variant="destructive"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button variant="outline" type="submit">
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </Form.FormRoot>
  );
}
