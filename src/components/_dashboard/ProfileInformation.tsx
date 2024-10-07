"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Textarea from "@/components/core/textarea";
import Panel from "@/components/dashboard/Panel";

const FormSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  about: z.string().optional(),
});

type FormFields = z.infer<typeof FormSchema>;

const formId = "profile-information";

export default function ProfileInformation() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      firstname: "",
      lastname: "",
      about: "",
    },
  });

  const handleFormSubmit = (_formData: FormFields) => {};

  return (
    <Panel.PanelRoot>
      <Panel.PanelHeader>
        <Panel.PanelTitle>Profile Information</Panel.PanelTitle>
      </Panel.PanelHeader>
      <Panel.PanelContent>
        <Form.FormRoot {...form}>
          <form
            id={formId}
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <Form.FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <Form.FormItem className="grid grid-cols-12 gap-6 space-y-0">
                  <div className="col-span-4">
                    <Form.FormLabel>First Name</Form.FormLabel>
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
                <Form.FormItem className="grid grid-cols-12 gap-6 space-y-0">
                  <div className="col-span-4">
                    <Form.FormLabel>Last Name</Form.FormLabel>
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
                <Form.FormItem className="grid grid-cols-12 gap-6 space-y-0">
                  <div className="col-span-4">
                    <Form.FormLabel>About</Form.FormLabel>
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
      </Panel.PanelContent>
      <Panel.PanelFooter className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button
            type="reset"
            variant="default"
            size="tiny"
            form={formId}
            onClick={() => form.reset()}
            disabled={!form.formState.isDirty}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="tiny"
            form={formId}
            disabled={!form.formState.isDirty}
          >
            Save
          </Button>
        </div>
      </Panel.PanelFooter>
    </Panel.PanelRoot>
  );
}
