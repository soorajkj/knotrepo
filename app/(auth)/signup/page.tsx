import { Fragment } from "react";
import Link from "next/link";
import Separator from "@/components/core/Separator";
import Typography from "@/components/core/Typography";
import SignupForm from "@/components/SignupForm";
import SignupWithOAuth from "@/components/SignupWithOAuth";

export default function Page() {
  return (
    <Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">Create an account</Typography.Title>
        <Typography.Text variant="sm/normal">
          Sign up for free! Please enter your details.
        </Typography.Text>
      </div>
      <SignupForm />
      <div className="my-8">
        <Separator />
      </div>
      <SignupWithOAuth />
      <div className="mt-8 flex flex-col space-y-4 sm:mx-auto sm:max-w-sm sm:text-center">
        <Typography.Text variant="sm/normal">
          Already have an account? <Link href="/signin">Login</Link>
        </Typography.Text>
        <Typography.Text variant="xs/normal">
          By continuing, you agree to our Terms of Service and Privacy Policy,
          and to receive periodic emails with updates.
        </Typography.Text>
      </div>
    </Fragment>
  );
}
