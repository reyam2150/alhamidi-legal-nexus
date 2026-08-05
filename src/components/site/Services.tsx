import { Reveal, SectionHeading } from "./Reveal";
import {
  Scale,
  Briefcase,
  Building,
  FileSignature,
  HardHat,
  Users,
  Home,
  Gavel,
  Handshake,
  Lightbulb,
  ShieldAlert,
  ScrollText,
  ArrowLeft,
} from "lucide-react";

const services = [
  { icon: Scale, title: "الاستشارات القانونية", text: "رأي قانوني مكتوب أو شفهي بعد دراسة الحالة ومستنداتها." },
  { icon: Briefcase, title: "القضايا التجارية", text: "تمثيل ومتابعة النزاعات التجارية أمام الجهات المختصة." },
  { icon: Building, title: "تأسيس الشركات", text: "اختيار الشكل النظامي وإعداد العقود والإجراءات." },
  { icon: FileSignature, title: "العقود والاتفاقيات", text: "صياغة ومراجعة العقود بما يحفظ الحقوق ويقلل المخاطر." },
  { icon: HardHat, title: "القضايا العمالية", text: "نزاعات العمل للأفراد وجهات العمل ومتابعتها نظاميًا." },
  { icon: Users, title: "الأحوال الشخصية", text: "معالجة قضايا الأسرة بخصوصية عالية واحترافية." },
  { icon: Home, title: "القضايا العقارية", text: "الملكية، الإيجار، والقسمة والنزاعات العقارية." },
  { icon: Gavel, title: "التنفيذ", text: "طلبات التنفيذ ومتابعة إجراءاتها حتى استيفاء الحق." },
  { icon: Handshake, title: "التحكيم", text: "تمثيل الأطراف وإعداد مذكرات التحكيم." },
  { icon: Lightbulb, title: "الملكية الفكرية", text: "حماية العلامات والحقوق ومعالجة التعديات." },
  { icon: ShieldAlert, title: "الجرائم المعلوماتية", text: "الشكاوى والدفاع في القضايا المعلوماتية." },
  { icon: ScrollText, title: "التركات والوصايا", text: "حصر التركات، القسمة، وإفراغ الحقوق." },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="الخدمات"
          title="خدمات قانونية شاملة"
          subtitle="خدمات مصممة للأفراد والشركات، بمتابعة مباشرة من المحامي المختص."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <s.icon className="text-primary" size={24} strokeWidth={1.4} />
                <h3 className="mt-5 text-base font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{s.text}</p>
                <a
                  href="#consult"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-primary transition group-hover:gap-3"
                >
                  اعرف المزيد
                  <ArrowLeft size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
