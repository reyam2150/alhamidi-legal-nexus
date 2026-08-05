import { Reveal, SectionHeading } from "./Reveal";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const info = [
  { icon: Phone, label: "رقم الهاتف", value: "+966 50 000 0000", href: "tel:+966500000000" },
  { icon: MessageCircle, label: "واتساب", value: "+966 50 000 0000", href: "https://wa.me/966500000000" },
  { icon: Mail, label: "البريد الإلكتروني", value: "info@alhumaidi-law.sa", href: "mailto:info@alhumaidi-law.sa" },
  { icon: MapPin, label: "عنوان المكتب", value: "الرياض، المملكة العربية السعودية" },
  { icon: Clock, label: "ساعات العمل", value: "الأحد - الخميس: ٩:٠٠ ص - ٥:٠٠ م" },
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
            <div className="h-full overflow-hidden rounded-sm border border-border">
              <iframe
                title="موقع المكتب على خريطة جوجل"
                src="https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&output=embed"
                loading="lazy"
                className="h-full min-h-[420px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
