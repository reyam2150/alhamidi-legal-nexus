import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { n: "٠١", title: "إرسال طلب الاستشارة", text: "تعبئة النموذج مع وصف موجز للحالة والمستندات." },
  { n: "٠٢", title: "دراسة الحالة", text: "مراجعة المستندات وتحديد الموقف النظامي." },
  { n: "٠٣", title: "تقديم الرأي أو الحل القانوني", text: "رأي واضح مع الخيارات المتاحة." },
  { n: "٠٤", title: "بدء الإجراءات النظامية", text: "إعداد اللوائح ومباشرة الجهات المختصة." },
  { n: "٠٥", title: "متابعة القضية حتى الانتهاء", text: "تحديث مستمر حتى صدور النتيجة النهائية." },
];

export function Process() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading eyebrow="آلية العمل" title="كيف نعمل على قضيتك" />
        <div className="relative mt-14">
          <div className="absolute inset-y-0 right-[15px] w-px bg-border md:right-1/2" />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <li
                  className={`relative flex flex-col gap-4 pr-12 md:w-1/2 md:pr-0 ${
                    i % 2 === 0 ? "md:mr-auto md:pl-12 md:text-left" : "md:ml-auto md:pr-12"
                  }`}
                >
                  <span
                    className={`absolute right-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background text-[11px] font-semibold text-primary md:right-auto ${
                      i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-8 text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
