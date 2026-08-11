import { Reveal } from "./Reveal";
import { Mail, Phone, MessageCircle } from "lucide-react";
import portraitAsset from "@/assets/lawyer-humaidi.jpeg.asset.json";

const qualifications = [
  "بكالوريوس قانون",
  "مرخص من الهيئة السعودية للمحامين",
  "حاصل على دورات متخصصة في المجال القانوني من بريطانيا",
  "إتقان اللغة الإنجليزية من خلال دراسة اللغة في المملكة المتحدة، مما يعزز القدرة على التعامل مع القضايا والمستندات القانونية باللغة الإنجليزية",
  "عضوية في جهات قانونية مهنية",
];

const specialties = [
  "القضايا التجارية",
  "العقود والاتفاقيات",
  "القضايا العمالية",
  "قضايا التنفيذ",
];

export function Lawyer() {
  return (
    <section id="lawyer" className="bg-background py-24 md:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-sm border border-primary/20 sm:block" />
            <img
              src={portraitAsset.url}
              alt="المحامي والمستشار القانوني في مكتب الحميدي"
              width={1109}
              height={1280}
              loading="lazy"
              className="relative w-full rounded-sm object-cover shadow-luxe"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">نبذة عن المحامي</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            الحميدي
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">محامٍ ومستشار قانوني</p>
          <div className="hairline my-7 max-w-[8rem]" />
          <p className="text-sm leading-9 text-muted-foreground">
            محامٍ ومستشار قانوني يعمل على تقديم خدمة قانونية دقيقة تبدأ من الاستماع للحالة، ثم
            دراستها نظاميًا، وتقديم الرأي المناسب أو مباشرة الإجراءات. يتابع القضايا بنفسه، ويحرص
            على وضوح التواصل مع العميل في كل مرحلة.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-primary">المؤهلات</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {qualifications.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">مجالات التخصص</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {specialties.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#consult"
              className="rounded-sm bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              احجز استشارة
            </a>
            <div className="flex gap-2">
              {[
                { icon: Phone, href: "tel:+966506007896", label: "اتصال" },
                { icon: MessageCircle, href: "https://wa.me/966506007896", label: "واتساب" },
                { icon: Mail, href: "mailto:humidilawyer@gmail.com", label: "البريد" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  aria-label={c.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <c.icon size={17} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
