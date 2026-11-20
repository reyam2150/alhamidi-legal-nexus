import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "الخدمات" },
  { href: "#lawyer", label: "نبذة عن المحامي" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-luxe flex h-20 items-center justify-between gap-3 xl:gap-6">
        <a href="#home" className="flex min-w-0 shrink-0 items-center">
          <Logo light={!scrolled} className="h-auto w-52 max-w-[65vw] transition xl:w-60" />
        </a>

        <ul className="hidden items-center gap-5 text-sm xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors ${
                  scrolled
                    ? "text-ink/75 hover:text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost"
            className={`hidden h-auto rounded-sm px-5 py-2.5 text-sm font-medium transition sm:inline-flex ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            }`}
          >
          <a href="#consult">
            احجز استشارة قانونية
          </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="القائمة"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm xl:hidden ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background xl:hidden">
          <ul className="container-luxe flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#consult"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-sm bg-primary px-5 py-3 text-center text-sm text-primary-foreground"
              >
                احجز استشارة قانونية
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
