import * as React from "react";
import { auth } from "@/auth";
import Typography from "@/components/core/typography";
import OnboardForm from "@/components/auth/onboard-form";

export default async function Page() {
  const session = await auth();

  return (
    <React.Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">
          Choose your username
        </Typography.Title>
        <Typography.Text variant="sm/normal">
          Welcome back! Please enter your details.
        </Typography.Text>
      </div>
      <p className="whitespace-break-spaces">
        {JSON.stringify(session, null, 8)}
      </p>
      <OnboardForm />
    </React.Fragment>
  );
}
