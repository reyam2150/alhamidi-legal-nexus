import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Paperclip } from "lucide-react";
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
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (name.length < 3 || name.length > 100) return setError("يرجى إدخال الاسم الكامل بشكل صحيح.");
    if (!/^[0-9+\s-]{9,20}$/.test(phone)) return setError("يرجى إدخال رقم جوال صحيح.");
    if (details.length < 10 || details.length > 1000)
      return setError("يرجى كتابة وصف مختصر للحالة (١٠ أحرف على الأقل).");

    setError("");
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
              <h3 className="mt-6 text-xl font-semibold text-primary">تم إرسال طلبك بنجاح</h3>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                شكرًا لثقتك بمكتب الحميدي. سيتم مراجعة طلبك والتواصل معك لتحديد موعد الاستشارة.
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
                <label className="mb-2 block text-xs text-muted-foreground">الاسم الكامل</label>
                <input name="name" maxLength={100} className={field} placeholder="الاسم الكامل" />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted-foreground">رقم الجوال</label>
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
                <label className="mb-2 block text-xs text-muted-foreground">نوع الخدمة</label>
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
                  وصف مختصر للحالة
                </label>
                <textarea
                  name="details"
                  rows={5}
                  maxLength={1000}
                  className={field}
                  placeholder="اكتب ملخصًا موجزًا لحالتك..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-sm border border-dashed border-input px-4 py-4 text-sm text-muted-foreground transition hover:border-primary">
                  <span className="flex items-center gap-2">
                    <Paperclip size={16} />
                    {fileName || "رفع ملفات (اختياري)"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                  <span className="text-xs text-primary">استعراض</span>
                </label>
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
                  جميع البيانات تُعامل بسرية تامة.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
