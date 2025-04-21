import * as React from "react";
import FormCard from "~components/auth/form-card";
import SignupForm from "~components/auth/signup-form";

export default function Page() {
  return (
    <FormCard
      title="Create an account"
      description="Start your 30-day free trial."
      form={<SignupForm />}
      prompt="Already have an account ?"
      href="/auth/signin"
      label="Log in"
    />
  );
}
