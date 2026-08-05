import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "كيف أحصل على استشارة قانونية؟",
    a: "يمكنك تعبئة نموذج طلب الاستشارة في الموقع مع وصف موجز للحالة، وسيتم التواصل معك لتحديد الموعد المناسب.",
  },
  {
    q: "هل تُعامل معلوماتي بسرية؟",
    a: "نعم، جميع المعلومات والمستندات تُعامل بسرية تامة ولا يتم مشاركتها مع أي طرف.",
  },
  {
    q: "هل تقدمون خدماتكم للشركات؟",
    a: "نقدم خدماتنا للأفراد والشركات، بما يشمل العقود، النزاعات، والاستشارات المستمرة.",
  },
  {
    q: "هل الاستشارة تكون حضورية فقط؟",
    a: "يمكن تقديم الاستشارة حضوريًا أو عن بُعد عبر الهاتف أو الاتصال المرئي حسب طبيعة الحالة.",
  },
  {
    q: "ما المستندات المطلوبة عند طلب الاستشارة؟",
    a: "يُفضّل إرفاق العقود أو المستندات المتعلقة بالحالة لتكون الدراسة أدق وأسرع.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="container-luxe grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="أسئلة يتكرر طرحها"
          subtitle="إن لم تجد إجابتك، يسعدنا تواصلك معنا مباشرة."
          align="start"
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i-${i}`} className="border-border">
                <AccordionTrigger className="text-right text-sm font-medium text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-8 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
