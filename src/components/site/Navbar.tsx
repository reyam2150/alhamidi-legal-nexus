import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-ah.png";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "الخدمات" },
  { href: "#lawyer", label: "نبذة عن المحامي" },
  { href: "#blog", label: "المدونة القانونية" },
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
      <nav className="container-luxe flex h-20 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="شعار مكتب الحميدي للمحاماة"
            width={40}
            height={40}
            className={`h-10 w-10 object-contain transition ${scrolled ? "" : "brightness-0 invert"}`}
          />
          <span
            className={`hidden text-sm font-semibold leading-tight sm:block ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            الحميدي للمحاماة
            <span className="block text-[11px] font-normal opacity-70">
              والاستشارات القانونية
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
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
          <a
            href="#consult"
            className={`hidden rounded-sm px-5 py-2.5 text-sm font-medium transition sm:inline-flex ${
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            }`}
          >
            احجز استشارة قانونية
          </a>
          <button
            aria-label="القائمة"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
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
