import * as React from "react";
import * as Email from "@react-email/components";

interface VerificationEmailProps {
  url: string;
}

export default function VerificationEmail(props: VerificationEmailProps) {
  const { url } = props;

  return (
    <Email.Html lang="en">
      <Email.Body>
        <Email.Container>
          <Email.Heading>🪄 Your magic link</Email.Heading>
          <Email.Section>
            <Email.Text>
              <Email.Link href={url}>👉 Click here to sign in 👈</Email.Link>
            </Email.Text>
            <Email.Text>
              If you didn&apos;t request this, please ignore this email.
            </Email.Text>
          </Email.Section>
          <Email.Text>
            Best,
            <br />- Raycast Team
          </Email.Text>
          <Email.Text>Raycast Technologies Inc.</Email.Text>
          <Email.Text>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Email.Text>
        </Email.Container>
      </Email.Body>
    </Email.Html>
  );
}
