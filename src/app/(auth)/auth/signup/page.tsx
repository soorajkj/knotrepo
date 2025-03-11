import * as React from "react";
import FormCard from "~components/auth/FormCard";
import SignupForm from "~components/auth/SignupForm";

export default function Page() {
  return (
    <React.Fragment>
      <FormCard
        title="Create an account"
        description="Start your 30-day free trial."
        form={<SignupForm />}
        prompt="Already have an account ?"
        href="/auth/signin"
        label="Log in"
      />
    </React.Fragment>
  );
}
