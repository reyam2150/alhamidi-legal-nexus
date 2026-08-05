import { Reveal, SectionHeading } from "./Reveal";
import { Building2, Eye, Send, Gem, Target } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "نبذة عن المكتب",
    text: "مكتب متخصص في المحاماة والاستشارات القانونية، يديره محامٍ ومستشار قانوني يتابع كل قضية بنفسه، بأسلوب مهني يعتمد على الدراسة الدقيقة والحلول العملية.",
  },
  {
    icon: Eye,
    title: "الرؤية",
    text: "أن نكون المرجع القانوني الموثوق للأفراد والشركات، عبر خدمة تجمع بين الاحترافية والوضوح والالتزام.",
  },
  {
    icon: Send,
    title: "الرسالة",
    text: "تقديم خدمات قانونية عالية الجودة تحفظ حقوق عملائنا، وتُبنى على الفهم العميق للأنظمة والتواصل المباشر.",
  },
  {
    icon: Gem,
    title: "القيم",
    text: "السرية، الأمانة، الدقة، الشفافية، واحترام المواعيد في كل تعامل ومرحلة من مراحل العمل.",
  },
  {
    icon: Target,
    title: "أهداف المكتب",
    text: "تمكين العميل من قرار قانوني واضح، وتقليل المخاطر النظامية، وتحقيق أفضل نتيجة ممكنة في أقصر وقت.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="من نحن"
          title="مكتب يقوم على الثقة والاختصاص"
          subtitle="نؤمن أن العمل القانوني الجيد يبدأ من الاستماع الجيد، ثم الدراسة، ثم الحل."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <article className="group h-full rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-primary">{it.title}</h3>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
