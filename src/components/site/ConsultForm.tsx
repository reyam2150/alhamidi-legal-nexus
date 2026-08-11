import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const serviceOptions = [
  "استشارة قانونية",
  "قضية تجارية",
  "تأسيس شركة",
  "عقود واتفاقيات",
  "قضية عمالية",
  "أحوال شخصية",
  "قضية عقارية",
  "تنفيذ",
  "تحكيم",
  "ملكية فكرية",
  "جرائم معلوماتية",
  "تركات ووصايا",
];

export function ConsultForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    if (String(data.get("company_hp") ?? "")) return;

    if (name.length < 3 || name.length > 100) return setError("يرجى إدخال الاسم الكامل بشكل صحيح.");
    if (!/^[0-9+\s-]{9,20}$/.test(phone)) return setError("يرجى إدخال رقم جوال صحيح.");
    if (details.length < 10 || details.length > 1000)
      return setError("يرجى كتابة وصف مختصر للحالة (١٠ أحرف على الأقل).");

    setError("");

    const message = [
      "طلب استشارة قانونية - موقع الحميدي للمحاماة",
      "",
      `الاسم: ${name}`,
      `الجوال: ${phone}`,
      email ? `البريد: ${email}` : "",
      `نوع الخدمة: ${service}`,
      "",
      `تفاصيل الحالة: ${details}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/966506007896?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setSent(true);
  }

  const field =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary";

  return (
    <section id="consult" className="bg-primary py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="طلب استشارة"
          title="اطلب استشارتك القانونية"
          subtitle="أخبرنا بتفاصيل حالتك بشكل موجز، وسنتواصل معك في أقرب وقت."
          tone="dark"
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-sm bg-background p-12 text-center shadow-luxe"
            >
              <CheckCircle2 className="mx-auto text-primary" size={44} strokeWidth={1.3} />
              <h3 className="mt-6 text-xl font-semibold text-primary">تم تحويل طلبك إلى واتساب</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                اضغط زر الإرسال داخل واتساب لإتمام الطلب. إن لم تُفتح النافذة تلقائيًا، يمكنك التواصل
                مباشرة على الرقم ٠٥٠٦٠٠٧٨٩٦.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-7 rounded-sm border border-border px-6 py-3 text-sm text-primary transition hover:bg-secondary"
              >
                إرسال طلب آخر
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-5 rounded-sm bg-background p-8 shadow-luxe md:grid-cols-2 md:p-10"
            >
              <div>
                <label className="mb-2 block text-xs text-muted-foreground">
                  الاسم الكامل <span className="text-destructive">*</span>
                </label>
                <input name="name" maxLength={100} className={field} placeholder="الاسم الكامل" />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-foreground">
                  رقم الجوال <span className="text-destructive">*</span>
                </label>
                <input
                  name="phone"
                  inputMode="tel"
                  maxLength={20}
                  className={field}
                  placeholder="05xxxxxxxx"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-foreground">البريد الإلكتروني</label>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  className={field}
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-foreground">
                  نوع الخدمة <span className="text-destructive">*</span>
                </label>
                <select name="service" className={field} defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs text-muted-foreground">
                  وصف مختصر للحالة <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="details"
                  rows={5}
                  maxLength={1000}
                  className={field}
                  placeholder="اكتب ملخصًا موجزًا لحالتك..."
                />
              </div>
              {/* حماية بسيطة من الرسائل المزعجة */}
              <input
                type="text"
                name="company_hp"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {error && (
                <p className="text-sm text-destructive md:col-span-2" role="alert">
                  {error}
                </p>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  إرسال الطلب
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  سيتم تحويلك إلى واتساب لإكمال الإرسال. جميع البيانات تُعامل بسرية تامة.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
