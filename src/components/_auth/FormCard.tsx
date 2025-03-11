import * as React from "react";
import Link from "next/link";
import Separator from "~components/core/separator";
import OAuths from "~components/auth/OAuths";

interface FormCardProps {
  title: string;
  description: string;
  form: React.ReactNode;
  prompt: string;
  label: string;
  href: string;
}

export default function FormCard(props: FormCardProps) {
  const { title, description, form, prompt, href, label } = props;

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="flex flex-col items-center gap-1 pb-4 text-center">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <OAuths />
      <Separator>or</Separator>
      {form}
      <div className="self-center">
        <p className="text-sm">
          <span>{prompt}</span>{" "}
          <Link href={href} className="font-medium">
            {label}
          </Link>
        </p>
      </div>
    </div>
  );
}
