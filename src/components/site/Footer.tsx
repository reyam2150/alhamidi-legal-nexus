import logo from "@/assets/logo-ah.png";

const quick = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#lawyer", label: "نبذة عن المحامي" },
  { href: "#blog", label: "المدونة القانونية" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

const services = [
  "الاستشارات القانونية",
  "القضايا التجارية",
  "العقود والاتفاقيات",
  "القضايا العمالية",
  "التنفيذ والتحكيم",
];

export function Footer() {
  return (
    <footer className="bg-primary pt-20 text-primary-foreground">
      <div className="container-luxe grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="شعار مكتب الحميدي للمحاماة"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 object-contain brightness-0 invert"
            />
            <span className="text-sm font-semibold leading-tight">
              الحميدي للمحاماة
              <span className="block text-[11px] font-normal opacity-70">
                والاستشارات القانونية
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-8 text-primary-foreground/60">
            مكتب متخصص في المحاماة والاستشارات القانونية للأفراد والشركات، بمتابعة مباشرة من
            المحامي والتزام كامل بالسرية.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">روابط سريعة</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">
            {quick.map((q) => (
              <li key={q.href}>
                <a href={q.href} className="transition hover:text-primary-foreground">
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">الخدمات</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="transition hover:text-primary-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">معلومات التواصل</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">
            <li>
              <a href="tel:+966506007896" className="transition hover:text-primary-foreground">
                +966 50 600 7896
              </a>
            </li>
            <li>
              <a
                href="mailto:humidilawyer@gmail.com"
                className="transition hover:text-primary-foreground"
              >
                humidilawyer@gmail.com
              </a>
            </li>
            <li>حي البلدية، حفر الباطن، المملكة العربية السعودية</li>
            <li>الأحد - الخميس: ٩:٠٠ ص - ٥:٠٠ م</li>
          </ul>
          <div className="mt-5 flex gap-3 text-sm text-primary-foreground/60">
            <a href="https://wa.me/966506007896" className="hover:text-primary-foreground">
              واتساب
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-primary-foreground">
              لينكدإن
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-primary-foreground">
              إكس
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row">
          <p>جميع الحقوق محفوظة © الحميدي للمحاماة والاستشارات القانونية</p>
          <div className="flex gap-5">
            <a href="#faq" className="hover:text-primary-foreground">
              سياسة الخصوصية
            </a>
            <a href="#faq" className="hover:text-primary-foreground">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
