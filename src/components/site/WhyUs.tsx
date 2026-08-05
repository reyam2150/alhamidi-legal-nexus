import { Reveal, SectionHeading } from "./Reveal";
import { Check } from "lucide-react";

const points = [
  "خبرة قانونية متخصصة",
  "اهتمام شخصي بكل قضية",
  "سرية وخصوصية كاملة",
  "تواصل مباشر مع المحامي",
  "متابعة دقيقة للإجراءات",
  "حلول قانونية عملية",
  "احترافية في التعامل",
  "الالتزام بالمواعيد",
];

export function WhyUs() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="لماذا نحن"
          title="لماذا تختار مكتب الحميدي؟"
          subtitle="لأن قضيتك تُدار من محامٍ يعرف تفاصيلها، لا من ملف يتنقل بين المكاتب."
          tone="dark"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p} delay={(i % 4) * 0.06}>
              <div className="flex h-full items-center gap-4 bg-primary p-7 transition-colors hover:bg-primary-foreground/5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground">
                  <Check size={14} />
                </span>
                <p className="text-sm font-medium text-primary-foreground/90">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
