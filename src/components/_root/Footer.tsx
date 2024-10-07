import Link from "next/link";
import Container from "@/components/core/container";

export default function Footer() {
  return (
    <footer className="bg-alternative text-foreground-lighter">
      <Container className="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-neutral-500/20">
        <div className="flex h-24 items-center justify-between py-4 font-medium">
          <p className="text-sm">© 2024 Supabase, inc. All rights reserved.</p>
          <ul className="flex items-end space-x-4 text-sm">
            <li>
              <Link href="/">Privay Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Servcie</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
