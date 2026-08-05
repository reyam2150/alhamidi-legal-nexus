import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./Reveal";

const items = [
  {
    name: "عميل تجريبي",
    role: "قطاع الأعمال",
    text: "تعامل مهني وواضح من البداية، وشرح دقيق للخيارات النظامية قبل أي إجراء. (تقييم تجريبي قابل للتعديل من لوحة التحكم.)",
  },
  {
    name: "عميلة تجريبية",
    role: "أفراد",
    text: "متابعة منتظمة وسرية تامة في التعامل مع تفاصيل القضية. (تقييم تجريبي قابل للتعديل من لوحة التحكم.)",
  },
  {
    name: "شركة تجريبية",
    role: "عقود واتفاقيات",
    text: "مراجعة العقود كانت دقيقة وأوضحت مخاطر لم تكن ظاهرة لنا. (تقييم تجريبي قابل للتعديل من لوحة التحكم.)",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = items[i];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading eyebrow="آراء العملاء" title="ما يقوله عملاؤنا" />
        <div className="mx-auto mt-14 max-w-3xl rounded-sm border border-border bg-card p-9 shadow-card md:p-12">
          <Quote className="text-primary/25" size={40} strokeWidth={1.2} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <p className="text-base leading-9 text-ink/80 md:text-lg">{item.text}</p>
              <footer className="mt-7">
                <p className="text-sm font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-9 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`التقييم ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-7 bg-primary" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="السابق"
                onClick={() => setI((v) => (v + 1) % items.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary transition hover:bg-secondary"
              >
                <ChevronRight size={16} />
              </button>
              <button
                aria-label="التالي"
                onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary transition hover:bg-secondary"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
