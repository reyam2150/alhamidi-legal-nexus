import { Reveal, SectionHeading } from "./Reveal";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const info = [
  { icon: Phone, label: "رقم الهاتف", value: "+966 50 600 7896", href: "tel:+966506007896" },
  { icon: MessageCircle, label: "واتساب", value: "+966 50 600 7896", href: "https://wa.me/966506007896" },
  { icon: Mail, label: "البريد الإلكتروني", value: "humidilawyer@gmail.com", href: "mailto:humidilawyer@gmail.com" },
  { icon: MapPin, label: "عنوان المكتب", value: "حي البلدية، حفر الباطن، المملكة العربية السعودية" },
  { icon: Clock, label: "ساعات العمل", value: "السبت - الخميس: ٨:٠٠ ص - ١٠:٠٠ م" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="نحن هنا للإجابة على استفساراتك"
          subtitle="اختر الوسيلة الأنسب لك، أو أرسل رسالة سريعة وسنعود إليك."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ul className="divide-y divide-border rounded-sm border border-border">
              {info.map((c) => (
                <li key={c.label} className="flex items-center gap-4 p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary">
                    <c.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-medium text-primary transition hover:opacity-70"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-sm border border-border">
              <iframe
                title="موقع المكتب على خريطة جوجل"
                src="https://www.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D9%8A%D8%A9%D8%8C%20%D8%AD%D9%81%D8%B1%20%D8%A7%D9%84%D8%A8%D8%A7%D8%B7%D9%86&output=embed"
                loading="lazy"
                className="h-full min-h-[380px] w-full"
              />
              <a
                href="https://maps.app.goo.gl/NLEH7PjGBw1w7adg7?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-border bg-secondary px-6 py-4 text-center text-sm font-medium text-primary transition hover:opacity-70"
              >
                فتح الموقع في خرائط جوجل
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
