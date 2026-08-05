import { motion } from "motion/react";
import { ShieldCheck, Scale, FileSignature, Users } from "lucide-react";
import hero from "@/assets/hero-office.jpg";

const cards = [
  { icon: Scale, title: "استشارات قانونية", text: "رأي قانوني دقيق مبني على الأنظمة." },
  { icon: Users, title: "خدمة الأفراد والشركات", text: "حلول تناسب كل حالة على حدة." },
  { icon: FileSignature, title: "صياغة ومراجعة العقود", text: "صياغة تحفظ حقوقك بوضوح." },
  { icon: ShieldCheck, title: "سرية وخصوصية تامة", text: "التزام كامل بسرية المعلومات." },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="مكتب محاماة فاخر بإضاءة هادئة"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/60 to-primary/70" />

      <div className="container-luxe pb-20 pt-40 md:pb-28 md:pt-52">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-primary-foreground/60">مكتب قانوني سعودي</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.25] tracking-tight text-primary-foreground md:text-6xl">
            الحميدي للمحاماة والاستشارات القانونية
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-9 text-primary-foreground/75 md:text-lg">
            نقدم خدمات واستشارات قانونية باحترافية وموثوقية، مع الالتزام بالسرية، والدقة،
            والاهتمام بكافة تفاصيل القضايا، لنكون شريككم القانوني الذي يمكن الاعتماد عليه.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#consult"
              className="rounded-sm bg-primary-foreground px-7 py-3.5 text-sm font-medium text-primary transition hover:opacity-90"
            >
              احجز استشارة
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-primary/60 p-7 backdrop-blur-sm transition-colors hover:bg-primary/40"
            >
              <c.icon className="text-primary-foreground/80" size={22} strokeWidth={1.5} />
              <h3 className="mt-5 text-sm font-semibold text-primary-foreground">{c.title}</h3>
              <p className="mt-2 text-xs leading-6 text-primary-foreground/60">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
