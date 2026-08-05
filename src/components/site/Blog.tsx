import { Reveal, SectionHeading } from "./Reveal";
import { ArrowLeft, CalendarDays } from "lucide-react";
import hero from "@/assets/hero-office.jpg";

const posts = [
  {
    title: "خمس نقاط أساسية قبل توقيع أي عقد تجاري",
    date: "١٤٤٧/٠١/١٥",
    excerpt: "مراجعة سريعة لأهم البنود التي يغفل عنها الأطراف عند إبرام العقود التجارية.",
  },
  {
    title: "كيف تُحسب مستحقات نهاية الخدمة نظامًا؟",
    date: "١٤٤٧/٠١/٠٨",
    excerpt: "شرح مبسط لآلية الحساب والحالات التي يختلف فيها الاستحقاق.",
  },
  {
    title: "متى يمكن اللجوء إلى التحكيم بدلًا من المحكمة؟",
    date: "١٤٤٦/١٢/٢٨",
    excerpt: "مقارنة عملية بين التحكيم والتقاضي من حيث الوقت والسرية والتنفيذ.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-secondary py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="المدونة القانونية"
          title="مقالات ومعلومات قانونية"
          subtitle="محتوى تعريفي عام لا يُعد رأيًا قانونيًا لحالة بعينها. (مقالات تجريبية قابلة للتعديل من لوحة التحكم.)"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="overflow-hidden">
                  <img
                    src={hero}
                    alt={p.title}
                    width={1920}
                    height={1280}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays size={13} /> {p.date}
                  </p>
                  <h3 className="mt-3 text-base font-semibold leading-8 text-primary">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{p.excerpt}</p>
                  <a
                    href="#consult"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-primary transition group-hover:gap-3"
                  >
                    قراءة المزيد <ArrowLeft size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
