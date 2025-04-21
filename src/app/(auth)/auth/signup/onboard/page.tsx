import React from "react";
import FormCard from "~components/auth/form-card";
import OnboardForm from "~components/auth/onboard-form";

export default function Page() {
  return (
    <React.Fragment>
      <FormCard
        title="Create an account"
        description="Start your 30-day free trial."
        form={<OnboardForm />}
        prompt="Already have an account ?"
        href="/auth/signin"
        label="Log in"
        socialproviders={false}
      />
    </React.Fragment>
  );
}
