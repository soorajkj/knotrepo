import * as React from "react";
import Link from "next/link";
import Separator from "@/components/core/separator";
import Typography from "@/components/core/typography";
import ContinueOAuth from "@/components/auth/ContinueOAuth";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Page() {
  return (
    <React.Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">Create an account</Typography.Title>
        <Typography.Text variant="sm/normal">
          Sign up for free! Please enter your details.
        </Typography.Text>
      </div>
      <ContinueOAuth />
      <div className="my-8">
        <Separator>Or</Separator>
      </div>
      <RegisterForm />
      <div className="mt-8 flex flex-col space-y-4 sm:mx-auto sm:max-w-sm sm:text-center">
        <Typography.Text variant="sm/normal" className="text-foreground-light">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline hover:text-foreground">
            Login
          </Link>
        </Typography.Text>
        <Typography.Text
          variant="xs/normal"
          className="text-foreground-lighter"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy,
          and to receive periodic emails with updates.
        </Typography.Text>
      </div>
    </React.Fragment>
  );
}
