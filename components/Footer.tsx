import Container from "@/components/core/Container";
import ThemeToggler from "@/components/ThemeToggler";

export default function Footer() {
  return (
    <footer className="bt-footer border-slate-800">
      <Container>
        <div className="flex items-end justify-between py-4">
          <p className="text-sm leading-none">
            &copy; {new Date().getFullYear()} All rights reserved Untitled
            Project
          </p>
          <ThemeToggler />
        </div>
      </Container>
    </footer>
  );
}
