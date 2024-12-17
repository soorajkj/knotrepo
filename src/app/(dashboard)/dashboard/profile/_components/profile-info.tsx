"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Textarea from "@/components/core/textarea";

const FormSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  photo: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  about: z.string().optional(),
  country: z.string().optional(),
});

type FormFields = z.infer<typeof FormSchema>;

const formId = "profile-information";

export default function ProfileInformation() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      firstname: "Sooraj",
      lastname: "Janardhanan",
      photo: "",
      email: "soorajkj@gmail.com",
      phone: "+3464563547",
      about: "",
      country: "India",
    },
  });

  const handleFormSubmit = (_formData: FormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <div className="mb-8 flex items-center justify-end gap-2">
        <Button
          type="reset"
          variant="outline"
          form={formId}
          onClick={() => form.reset()}
          disabled={!form.formState.isDirty}
        >
          Cancel
        </Button>
        <Button type="submit" form={formId} disabled={!form.formState.isDirty}>
          Save Changes
        </Button>
      </div>
      <form
        id={formId}
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <Form.FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  First Name
                </Form.FormLabel>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="text" autoComplete="off" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Last Name
                </Form.FormLabel>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="text" autoComplete="off" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Photo
                </Form.FormLabel>
                <p>This will be displayed on your profile</p>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="file" autoComplete="off" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Country
                </Form.FormLabel>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="text" autoComplete="off" {...field} />
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
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Email
                </Form.FormLabel>
                <p>
                  Where customers can contact you for support. Appears on
                  receipts and invoices.
                </p>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="text" autoComplete="off" {...field} />
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
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Phone
                </Form.FormLabel>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Input type="text" autoComplete="off" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </div>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <Form.FormItem className="grid grid-cols-12 gap-4 space-y-0">
              <div className="col-span-4">
                <Form.FormLabel className="font-medium text-wg-gray-900">
                  Biography
                </Form.FormLabel>
                <p>Write a short introduction</p>
              </div>
              <div className="col-span-8 space-y-1">
                <Form.FormControl>
                  <Textarea autoComplete="off" {...field} />
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
