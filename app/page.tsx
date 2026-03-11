"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colors = {
  background: "#f5f0e8",
  cream: "#fbf8f3",
  sand: "#ebe2d6",
  stone: "#ddd2c4",
  taupe: "#b4a594",
  warmButton: "#b8946a",
  warmButtonText: "#fffaf4",
  text: "#2b2723",
  muted: "#6d655c",
  overlay: "rgba(20, 17, 14, 0.42)",
  error: "#b3261e",
};

const heroImage =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80";
const contactHeroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80";
const successImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80";

const aboutImages = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505693416388-8b8f0f0d3c1d?auto=format&fit=crop&w=1400&q=80",
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505693416388-36a1f4f4c7d5?auto=format&fit=crop&w=1400&q=80",
];

function FadeUp({
  children,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  centered?: boolean;
}) {
  const headingColor = light ? "#ffffff" : colors.text;
  const bodyColor = light ? "rgba(255,255,255,0.82)" : colors.muted;

  return (
    <div className={`mb-10 max-w-4xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs uppercase tracking-[0.35em]" style={{ color: bodyColor }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight md:text-5xl" style={{ color: headingColor, fontFamily: "Georgia, serif" }}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-8 md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`} style={{ color: bodyColor }}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

function SiteNav({ light = true }: { light?: boolean }) {
  const textClass = light ? "text-white" : "";
  const borderColor = light ? "rgba(255,255,255,0.28)" : colors.stone;
  const bg = light ? "rgba(251,248,243,0.18)" : colors.warmButton;
  const color = light ? "#ffffff" : colors.warmButtonText;

  return (
    <div className="absolute inset-x-0 top-0 z-30 px-2 py-2 md:px-5 md:py-4">
      <div className="flex w-full items-start justify-between">
        <a href="#" className={`text-lg md:text-xl tracking-[0.18em] ${textClass}`} style={{ fontFamily: "Georgia, serif" }}>
          ALVARA MAISON
        </a>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] md:gap-8 md:text-sm">
          <a href="#" className={textClass}>Home</a>
          <a href="#about" className={textClass}>About us</a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2"
            style={{ backgroundColor: bg, border: `1px solid ${borderColor}`, color }}
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-start overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-8 md:px-10"
      style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${heroImage})` }}
    >
      <SiteNav light />
      <div className="mx-auto w-full max-w-7xl">
        <FadeUp>
          <div className="max-w-4xl pt-28 md:pt-36">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">
              Refined property partnerships
            </p>
            <h1 className="text-5xl leading-tight text-white md:text-7xl" style={{ fontFamily: "Georgia, serif" }}>
              Refined stays and dependable property performance.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Alvara Maison helps owners create a more effortless property experience through polished presentation, consistent care, and a hospitality model designed to support reliable income.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function AboutBlock({
  image,
  title,
  body1,
  body2,
  imageLeft = false,
}: {
  image: string;
  title: string;
  body1: string;
  body2: string;
  imageLeft?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <FadeUp>
        <div className={imageLeft ? "md:order-1" : "md:order-2"}>
          <img src={image} alt={title} className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl md:h-[520px]" />
        </div>
      </FadeUp>
      <FadeUp delay={0.04}>
        <div className={imageLeft ? "md:order-2" : "md:order-1"}>
          <h3 className="text-3xl leading-tight md:text-5xl" style={{ color: colors.text, fontFamily: "Georgia, serif" }}>
            {title}
          </h3>
          <p className="mt-5 text-base leading-8 md:text-lg" style={{ color: colors.muted }}>
            {body1}
          </p>
          <p className="mt-5 text-base leading-8" style={{ color: colors.muted }}>
            {body2}
          </p>
        </div>
      </FadeUp>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative overflow-hidden px-6 py-6 md:px-10 md:py-10"
      style={{
        backgroundImage: `url(${aboutImages[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch md:grid-cols-[0.8fr_1.2fr]">
          <FadeUp>
            <div
              className="h-full w-full max-w-[480px] px-8 py-10 md:px-10 md:py-12"
              style={{ backgroundColor: colors.cream }}
            >
              <p
                className="mb-3 text-xs uppercase tracking-[0.35em]"
                style={{ color: colors.muted }}
              >
                About us
              </p>

              <h2
                className="text-3xl leading-tight md:text-4xl"
                style={{ color: colors.text, fontFamily: "Georgia, serif" }}
              >
                A cleaner, calmer ownership experience with a more polished brand presence.
              </h2>

              <p
                className="mt-5 text-base leading-7"
                style={{ color: colors.muted }}
              >
                Alvara Maison is designed to make ownership feel simpler. We focus on presentation, reliable execution, and consistent property oversight so the home stays protected, appealing, and guest ready.
              </p>

              <p className="mt-4 text-base leading-7" style={{ color: colors.muted }}>
                We approach every property with a partnership mindset, creating a calm and professional ownership experience while preserving the long term quality of the asset.
              </p>
            </div>
          </FadeUp>

          <div />
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    {
      icon: "💰",
      title: "Steady monthly income",
      text: "A structured leasing model designed to support dependable monthly payments and less day to day uncertainty for owners.",
    },
    {
      icon: "🛡️",
      title: "Enhanced security",
      text: "Smart home safeguards, clear rules, and a more intentional guest process help keep each property protected.",
    },
    {
      icon: "✨",
      title: "Exceptional property care",
      text: "Professional cleaning, regular oversight, and strong presentation standards help protect the condition of the home.",
    },
    {
      icon: "📈",
      title: "Strong financial foundation",
      text: "A more stable operating model built around consistency, planning, and responsible execution rather than vacancy risk.",
    },
    {
      icon: "🏠",
      title: "Reduced vacancy friction",
      text: "We manage transitions, guest coordination, and turnover logistics so the property stays active and operationally smooth.",
    },
    {
      icon: "🤝",
      title: "Refined partnership approach",
      text: "A calmer, more professional owner experience centered on trust, responsiveness, and long term alignment.",
    },
  ];

  return (
    <section
      id="why-section"
      className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10"
        style={{ backgroundColor: colors.background }}
      />

      <div className="relative z-30 mx-auto max-w-7xl text-center">
        <SectionHeading
          eyebrow="Why choose us"
          title="Clear owner benefits presented in a lighter and more centered layout."
          body="This section is centered end to end so the structure feels different from the rest of the page and gives the site more variety."
          centered
        />

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-b pb-8 text-center"
              style={{ borderColor: colors.stone }}
            >
              <div className="mb-4 flex justify-center text-3xl leading-none" aria-hidden="true">
                <span>{item.icon}</span>
              </div>
              <h3
                className="text-2xl leading-tight"
                style={{ color: colors.text, fontFamily: "Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p
                className="mx-auto mt-4 max-w-sm text-sm leading-7"
                style={{ color: colors.muted }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessSection() {
  const steps = [
    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      title: "Reliable monthly income",
      text:
        "A structure designed to create consistency for owners, with dependable payments and less day to day uncertainty.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      title: "Thoughtful property care",
      text:
        "Professional cleaning, regular oversight, and presentation standards that help the home stay guest ready and well maintained.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      title: "Protection and peace of mind",
      text:
        "Clear standards, smart safeguards, and a hospitality model built to protect both the guest experience and the asset itself.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Own a property?"
          title="Let it work for you."
          body="Alvara Maison is built to help owners create a more effortless income experience through consistent execution, stronger care, and a more polished standard of hospitality."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title}>
              <img
                src={step.image}
                alt={step.title}
                className="h-[320px] w-full object-cover md:h-[360px]"
              />
              <div className="pt-5">
                <h3
                  className="text-2xl leading-tight"
                  style={{ color: colors.text, fontFamily: "Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-3 text-base leading-7"
                  style={{ color: colors.muted }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section style={{ backgroundColor: colors.cream }}>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-20 md:px-10 md:py-28"
        style={{
backgroundImage: `linear-gradient(rgba(20, 17, 14, 0.38), rgba(20, 17, 14, 0.38)), url(${contactHeroImage})`,        }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="max-w-4xl">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/80">
                Showcasing excellence
              </p>
              <h2
                className="text-4xl leading-tight text-white md:text-6xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Our portfolio
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
                Each property in our portfolio is carefully selected, beautifully presented, and maintained to create strong guest appeal while supporting long term owner performance.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                From elevated urban stays to refined residential homes, every property is positioned to feel polished, memorable, and highly marketable while preserving a calm premium brand standard.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

<section
  className="px-8 py-10 md:px-12 md:py-12 lg:px-27"
  style={{ backgroundColor: colors.cream }}
>
  <div className="w-full">
    <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
      {portfolioImages.map((src, index) => (
        <img
          key={src + index}
          src={src}
          alt={`Portfolio ${index + 1}`}
          className="aspect-[1/1] min-h-[440px] md:min-h-[540px] w-full object-cover"
        />
      ))}
    </div>
  </div>
</section>
    </section>
  );
}

function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-16 md:px-10 md:py-24"
      style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${contactHeroImage})` }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let us help you build a more refined and more effortless property experience."
          body="Reach out to discuss your property, ownership goals, or how Alvara Maison can create a cleaner and more elevated operating experience."
          light
          centered
        />
        <a
          href="#contact"
          className="inline-block rounded-full px-7 py-3 text-sm uppercase tracking-[0.18em]"
          style={{ backgroundColor: colors.warmButton, color: colors.warmButtonText }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50 flex h-9 w-9 cursor-pointer items-center justify-center shadow-lg"
      style={{ backgroundColor: colors.warmButton, color: colors.warmButtonText }}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <SuccessSection />
      <WhyChooseUs />
      <PortfolioSection />
      <ClosingCta />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="relative min-h-[55vh] bg-cover bg-center bg-no-repeat px-6 py-8 md:px-10" style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${heroImage})` }}>
        <SiteNav light />
        <div className="mx-auto max-w-7xl pt-28 md:pt-36">
          <h1 className="text-5xl leading-tight text-white md:text-7xl" style={{ fontFamily: "Georgia, serif" }}>
            About us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            A more refined, owner focused way to approach property performance.
          </p>
        </div>
      </section>
      <AboutSection />
    </>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!values.name.trim()) nextErrors.name = "This field is required.";
    if (!values.email.trim()) nextErrors.email = "This field is required.";
    if (!values.subject.trim()) nextErrors.subject = "This field is required.";
    if (!values.message.trim()) nextErrors.message = "This field is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(
      `Name: ${values.name}
Email: ${values.email}

Message:
${values.message}`
    );
    window.location.href = `mailto:info@alvaramaison.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  const inputStyle = (field: string) => ({
    backgroundColor: "#ffffff",
    color: colors.text,
    borderColor: errors[field] ? colors.error : colors.stone,
  });

  const onChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <form className="p-0" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5">
        {[
          ["name", "Name", "text", "Your name"],
          ["email", "Email", "email", "Your email"],
          ["subject", "Subject", "text", "How can we help"],
        ].map(([field, label, type, placeholder]) => (
          <div key={field}>
            <label className="mb-2 block text-xs uppercase tracking-[0.22em]" style={{ color: colors.muted }}>
              {label} <span style={{ color: colors.error }}>*</span>
            </label>
            <input
              type={type}
              placeholder={placeholder}
              value={(values as Record<string, string>)[field]}
              onChange={(e) => onChange(field, e.target.value)}
              required
              aria-invalid={!!errors[field]}
              className="w-full rounded-xl border px-4 py-3 outline-none"
              style={inputStyle(field)}
            />
            {errors[field] ? <p className="mt-2 text-sm" style={{ color: colors.error }}>{errors[field]}</p> : null}
          </div>
        ))}

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.22em]" style={{ color: colors.muted }}>
            Message <span style={{ color: colors.error }}>*</span>
          </label>
          <textarea
            placeholder="Tell us about your goals"
            rows={6}
            value={values.message}
            onChange={(e) => onChange("message", e.target.value)}
            required
            aria-invalid={!!errors.message}
            className="w-full rounded-2xl border px-4 py-3 outline-none"
            style={inputStyle("message")}
          />
          {errors.message ? <p className="mt-2 text-sm" style={{ color: colors.error }}>{errors.message}</p> : null}
        </div>

        <button type="submit" className="cursor-pointer rounded-full px-6 py-3 text-sm uppercase tracking-[0.18em]" style={{ backgroundColor: colors.warmButton, color: colors.warmButtonText }}>
          Send message
        </button>
        {status ? <p className="text-sm" style={{ color: colors.muted }}>{status}</p> : null}
      </div>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <section className="relative min-h-[62vh] bg-cover bg-center bg-no-repeat px-6 py-8 md:px-10" style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${contactHeroImage})` }}>
        <SiteNav light />
        <div className="mx-auto max-w-7xl pt-28 md:pt-36">
          <SectionHeading
            eyebrow="Contact us"
            title="Let us talk about your property."
            body="A refined, direct way to start the conversation."
            light
          />
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: colors.background }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.08fr_0.92fr]">
            <FadeUp>
              <div>
                <h2 className="text-4xl leading-tight md:text-6xl" style={{ color: colors.text, fontFamily: "Georgia, serif" }}>
                  Contact us
                </h2>
                <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: colors.muted }}>
                  Have questions or thinking about your next move? We’re here to guide you. Whether you’re looking to learn more about our services or discover how to maximize your property’s potential, our team is ready to provide the support and expertise you need. Property ownership should be effortless and rewarding, and we’re committed to helping you achieve just that.
                </p>
                <p className="mt-5 text-base leading-8" style={{ color: colors.muted }}>
                  If you’re ready to take the next step, we’d love to connect. Fill out the form below or reach out to us directly—we’re here to answer your questions, discuss your goals, and help you make the most of your property.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  const [page, setPage] = useState<"home" | "about" | "contact">("home");

  useEffect(() => {
    const setRouteFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "about") setPage("about");
      else if (hash === "contact") setPage("contact");
      else setPage("home");
    };

    setRouteFromHash();
    window.addEventListener("hashchange", setRouteFromHash);
    return () => window.removeEventListener("hashchange", setRouteFromHash);
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
      {page === "home" ? <HomePage /> : page === "about" ? <AboutPage /> : <ContactPage />}

      <footer className="px-6 py-8 text-center md:px-10" style={{ backgroundColor: colors.background }}>
        <p className="text-sm" style={{ color: colors.muted }}>
          Copyright © 2026 Alvara Maison LLC
        </p>
      </footer>

      <ScrollToTopButton />
    </main>
  );
}
