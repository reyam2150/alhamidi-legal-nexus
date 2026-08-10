import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Lawyer } from "@/components/site/Lawyer";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { ConsultForm } from "@/components/site/ConsultForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const title = "الحميدي للمحاماة والاستشارات القانونية";
const description =
  "مكتب الحميدي للمحاماة والاستشارات القانونية: استشارات قانونية، قضايا تجارية وعمالية وعقارية، عقود، تنفيذ وتحكيم، بسرية تامة ومتابعة مباشرة من المحامي.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: title,
          description,
          areaServed: "SA",
          address: {
            "@type": "PostalAddress",
            streetAddress: "حي البلدية",
            addressLocality: "حفر الباطن",
            addressCountry: "SA",
          },
          telephone: "+966506007896",
          email: "humidilawyer@gmail.com",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Lawyer />
        <Process />
        <Testimonials />
        <Faq />
        <ConsultForm />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
