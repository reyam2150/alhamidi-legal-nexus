import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {show && (
        <button
          aria-label="العودة لأعلى الصفحة"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-luxe transition hover:opacity-90"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-luxe transition hover:opacity-90"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
