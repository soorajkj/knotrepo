import * as React from "react";
import Link from "next/link";
import Separator from "@/components/core/separator";
import Typography from "@/components/core/typography";
import ContinueOAuth from "@/components/auth/ContinueOAuth";
import LoginForm from "@/components/auth/LoginForm";

export default function page() {
  return (
    <React.Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">Welcome back!</Typography.Title>
        <Typography.Text variant="sm/normal">
          Sign in to your account
        </Typography.Text>
      </div>
      <ContinueOAuth />
      <div className="my-8">
        <Separator>Or</Separator>
      </div>
      <LoginForm />
      <div className="mt-8 flex flex-col space-y-4 sm:mx-auto sm:max-w-sm sm:text-center">
        <Typography.Text variant="sm/normal" className="text-foreground-light">
          <Link
            href="/auth/forgot-password"
            className="cursor-not-allowed text-foreground-muted underline"
          >
            Forgot password
          </Link>
        </Typography.Text>
        <Typography.Text variant="sm/normal" className="text-foreground-light">
          Dont&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="underline hover:text-foreground"
          >
            Signup
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
