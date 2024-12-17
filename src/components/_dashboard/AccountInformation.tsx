"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Collapsible from "@/components/core/collapsible";
import Form from "@/components/core/form";
import Icon from "@/components/core/icon";
import Input from "@/components/core/input";
import Panel from "@/components/dashboard/Panel";

const FormSchema = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
});

type FormFields = z.infer<typeof FormSchema>;

export default function AccountInformation() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const handleFormSubmit = (_formData: FormFields) => {};

  return (
    <Panel.PanelRoot>
      <Panel.PanelHeader>
        <Panel.PanelTitle>Account Information</Panel.PanelTitle>
      </Panel.PanelHeader>
      <Panel.PanelContent>
        <Form.FormRoot {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <Form.FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <Form.FormItem className="grid grid-cols-12 gap-2 space-y-0 md:gap-6">
                  <div className="col-span-12 flex md:col-span-4">
                    <Form.FormLabel>Username</Form.FormLabel>
                  </div>
                  <div className="col-span-12 space-y-1 md:col-span-8">
                    <Form.FormControl>
                      <Input
                        type="text"
                        autoComplete="off"
                        disabled={true}
                        readOnly={true}
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
              name="email"
              render={({ field }) => (
                <Form.FormItem className="grid grid-cols-12 gap-2 space-y-0 md:gap-6">
                  <div className="col-span-12 flex md:col-span-4">
                    <Form.FormLabel>Email</Form.FormLabel>
                  </div>
                  <div className="col-span-12 space-y-1 md:col-span-8">
                    <Form.FormControl>
                      <Input
                        type="text"
                        autoComplete="off"
                        disabled={true}
                        readOnly={true}
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
        <div className="mt-4 grid grid-cols-12 gap-6">
          <Collapsible.CollapsibleRoot className="col-start-1 col-end-13 md:col-start-5 md:col-end-13">
            <Collapsible.CollapsibleTrigger className="group p-0 [&[data-state=open]>div>svg]:!-rotate-180">
              <div className="flex w-full items-center gap-x-2">
                <p className="text-left text-xs transition group-hover:text-foreground">
                  How can I change my email?
                </p>
                <Icon icon="ChevronDown" className="size-3.5" />
              </div>
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent className="mt-2 rounded-lg px-4 py-4">
              <ol className="ml-4 list-decimal text-xs">
                <li>Create a new account with the new email</li>
                <li>Invite this email to be an owner of the Org</li>
                <li>Join the Org</li>
                <li>Remove the old email from the Org</li>
                <li>Email Supabase Support to delete the old email</li>
              </ol>
            </Collapsible.CollapsibleContent>
          </Collapsible.CollapsibleRoot>
        </div>
      </Panel.PanelContent>
    </Panel.PanelRoot>
  );
}
