"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colors = {
  background: "#f5f0e8",
  cream: "#fbf8f3",
  sand: "#ece7e0",
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
  "https://nwdb.nyc/wp-content/uploads/2021/02/1216_176-Broadway-master-bedroom_02_D.jpg";
const portfolioHeroImage =
  "https://wwd.com/wp-content/uploads/2023/08/GettyImages-1357529184-e1690979672961.jpg";
  const contactHeroImage =
  "https://media.admiddleeast.com/photos/652a576827fa57f09b169936/16:9/w_2560%2Cc_limit/22060_press_jcarlyle_9-16-22_12.jpg";
const successImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80";

const aboutImages = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505693416388-8b8f0f0d3c1d?auto=format&fit=crop&w=1400&q=80",
];

const portfolioImages = [
  "https://wwd.com/wp-content/uploads/2023/08/GettyImages-1357529184-e1690979672961.jpg?w=1000&h=563&crop=1",
  "https://www.atomic-ranch.com/wp-content/uploads/2024/01/DSC07799-800x533.jpg",
    "https://cdn.mos.cms.futurecdn.net/9DFRUYnY3Eu7nGrgB8hygE.jpg",
  "https://www.thespruce.com/thmb/eNEDy0ib4ReAvWikahyPQcWSQ4A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Screenshot2025-12-24at12.17.14PM-aef15f6399324fd59d3139f624d2e5b6.png",
  "https://images.ctfassets.net/wlzmdirin2hy/4uv2NDkpa2YxdnUyJG72BI/1562a9496a6a0c02f5729655b0a146d5/lx_california79_hom_kalman_03",
  "https://www.mountainliving.com/content/uploads/2024/12/u/p/ml-winter-ea-photo-2-scaled.jpg",
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
      <p className="mb-3 text-sm md:text-base uppercase tracking-[0.35em]" style={{ color: bodyColor }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl tracking-tight leading-[1.15] md:text-5xl" style={{ color: headingColor, fontFamily: "Georgia, serif" }}>
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
    <div className="absolute inset-x-0 top-0 z-30 px-2 py-2 md:px-6 md:py-3">
      <div className="flex w-full items-start justify-between">
        <a href="#" className="flex items-center">
  <img
    src="/logo.png"
    alt="Alvara Maison"
    className="h-50 md:h-20 w-auto brightness-0 invert"
  />
</a>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] md:gap-8 md:text-sm mt-4 md:mt-4">
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
 className="relative flex min-h-[100vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed px-6 py-8 md:px-10"
  style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${heroImage})` }}
>
  <SiteNav light />
  <div className="mx-auto w-full max-w-7xl">
    <FadeUp>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-s uppercase tracking-[0.35em] text-white/80">
          Invest Smart with Alvara Maison
        </p>

        <h1
          className="text-5xl leading-tight text-white md:text-7xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Effortless Income,
        </h1>
 <h1
          className="text-5xl leading-tight text-white md:text-7xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Expert Care
        </h1>

        <p className="mt-6 mx-auto max-w-3xl text-base font light leading-8 text-white/85 md:text-lg">
          Maximize returns, minimize stress. We transform properties into profitable, well-maintained luxury stays promising guaranteed income and a stress-free ownership experience.
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
      icon: "/Income.png",
      title: "Steady Monthly Income",
      text: "A structured leasing model designed to ensure steady monthly payments and less uncertainty for owners.",
      delay: 0.05,
      y: 18,
      rotate: -2,
    },
    {
      icon: "/Security.png",
      title: "Enhanced Security Features",
      text: "We prioritize safety with 24/7 monitoring, smart lock technology, and real-time noise detection, providing protection for both your home and guests.",
      delay: 0.12,
      y: 24,
      rotate: 2,
    },
    {
      icon: "/Care.png",
      title: "Exceptional property care",
      text: "Professional cleaning, regular oversight, and strong presentation standards help protect the condition of your home.",
      delay: 0.18,
      y: 30,
      rotate: -1,
    },
    {
      icon: "/Finance.png",
      title: "Strong Financial Stability",
      text: "Our strong financial backing means you’ll enjoy dependable earnings, regardless of market trends or seasonal fluctuations.",
      delay: 0.1,
      y: 18,
      rotate: 1,
    },
    {
      icon: "/Vacancy.png",
      title: "Eliminate Vacancy Costs",
      text: "Forget costly turnovers. We handle cleaning, maintenance, and seamless guest transitions to keep your property occupied and generating revenue year-round.",
      delay: 0.16,
      y: 24,
      rotate: -2,
    },
    {
      icon: "/Protection.png",
      title: "$2M Property Protection",
      text: "Your property is safeguarded with up to $2 million in coverage, adding an extra layer of protection against unexpected events.",
      delay: 0.22,
      y: 30,
      rotate: 2,
    },
  ];

  return (
    <section
      id="why-section"
      className="relative overflow-hidden px-6 py-16 md:px-10 md:py-18"
      style={{ backgroundColor: colors.background }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10"
        style={{ backgroundColor: colors.background }}
      />

      <div className="relative z-30 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow=""
            title="Why Choose Us?"
            body="At Alvara Maison, we go beyond traditional rentals—we turn your property into a profitable, worry-free investment. Our expert team handles everything, from security and maintenance to guest management and financial stability, ensuring you enjoy consistent income with zero hassle."
            centered
          />
        </motion.div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: item.y, rotate: item.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.8,
                delay: item.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b pb-8 text-center"
              style={{ borderColor: colors.stone }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: item.delay + 0.08 }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 object-contain"
                />
              </motion.div>

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
            </motion.div>
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
        "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2022/07/Modern-contemporary-interior-design-living-rooms-2-scaled.jpeg?width=900",
      title: "Mission.",
      text:
      <>
        Our mission is to provide property owners with guaranteed income, minimized risks, and impeccable care for their homes, all while delivering unforgettable stays for our guests. We bridge the gap between owners seeking peace of mind and travelers looking for high-quality, short-term accommodations.
        </>
    },
    {
      image:
        "https://www.marthastewart.com/thmb/5HuP0UkW3b9A_TiGDPGt-fx4KoE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2021-11-17-collected_belmont-33-Edit-df9880ffa9734b158f7436777ba804f0.jpg",
      title: "Vision.",
      text:
        "Whether you’re looking to optimize a single home or expand your real estate portfolio, we transform properties into high-performing, luxury retreats—effortlessly. Looking ahead, we strive to redefine luxury living by creating a global network of stylish, high-yield retreats that deliver unparalleled value to both owners and guests.",
    },
  ];

    return (
    <section
      className="relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p
            className="mb-4 text-sm md:text-base uppercase tracking-[0.35em]"
            style={{ color: colors.muted }}
          >
            Own a property?
          </p>

          <h2
            className="text-5xl leading-tight md:text-7xl"
            style={{ color: colors.text, fontFamily: "Georgia, serif" }}
          >
            Let it work for you.
          </h2>

          <p
            className="mt-4 mx-auto max-w-3xl text-base leading-8 md:text-lg"
            style={{ color: colors.muted }}
          >
            Alvara Maison is built to help owners create a more effortless income
            experience through consistent execution, stronger care, and a more
            polished standard of hospitality.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16">
          {steps.map((step, index) => {
            const isMiddle = index === 1;
            const imageFromLeft = !isMiddle;

            return (
              <div
                key={step.title}
                className="grid items-center gap-10 md:grid-cols-2"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageFromLeft ? -70 : 70,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={isMiddle ? "md:order-2" : ""}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-[340px] w-full object-cover shadow-xl"
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: imageFromLeft ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={isMiddle ? "md:order-1" : ""}
                >
                  <h3
                    className="text-3xl leading-tight"
                    style={{ color: colors.text, fontFamily: "Georgia, serif" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-4 text-base leading-7"
                    style={{ color: colors.muted }}
                  >
                    {step.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section style={{ backgroundColor: colors.cream }}>
     <section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed px-6 py-20 md:px-10 md:py-28"
  style={{
    backgroundImage: `linear-gradient(rgba(20, 17, 14, 0.38), rgba(20, 17, 14, 0.38)), url(${portfolioHeroImage})`,
  }}
>
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="max-w-4xl">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/80">
                Showcasing excellence
              </p>
              <h2
                className="text-4xl leading-tight text-white md:text-6xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Portfolio
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
  className="px-8 py-10 md:px-12 md:py-15 lg:px-17"
  style={{ backgroundColor: colors.cream }}
>
  <div className="w-full">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed px-6 py-16 md:px-10 md:py-24"
      style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${contactHeroImage})` }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Talk Success"
          body="Ready to turn your property into a high-earning asset? At Alvara Maison, we handle everything so you don’t have to. Get in touch today and discover how we can maximize your returns with zero hassle."
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
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-9 w-9 cursor-pointer items-center justify-center shadow-lg"
      style={{ backgroundColor: colors.warmButton, color: colors.warmButtonText }}
      aria-label="Back to top"
    >
      ↑
    </button>
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
<section
  className="relative min-h-[62vh] bg-cover bg-center bg-no-repeat bg-fixed px-6 py-8 md:px-10"
  style={{
    backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${heroImage})`,
  }}
>
        <SiteNav light />
        <div className="mx-auto max-w-7xl pt-28 md:pt-36">
          <h1
            className="text-5xl leading-tight text-white md:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            A more refined, owner focused way to approach property performance.
          </p>
        </div>
      </section>

<section
  className="px-6 py-16 md:px-10 md:py-24"
  style={{ backgroundColor: colors.cream }}
>
  <div className="mx-auto max-w-7xl">

    {/* centered heading */}
    <FadeUp>
      <div className="mx-auto mb-14 max-w-5xl text-center">
        <p
          className="mb-3 text-sm md:text-base uppercase tracking-[0.28em]"
          style={{ color: colors.muted }}
        >
          Our approach
        </p>

        <h2
          className="text-4xl leading-wide tracking-wide md:text-4xl"
          style={{ color: colors.text, fontFamily: "'Playfair Display', serif" }}
        >
          Committed to Exceptional Service and Lasting Quality
        </h2>
      </div>
    </FadeUp>

    {/* image left / text right */}
    <div className="grid items-center gap-10 md:grid-cols-2">

      <FadeUp>
        <img
          src="https://www.somfy.com.au/common/img/library/photo-1600585152220-90363fe7e115.png"
          alt="Luxury interior"
          className="h-[420px] w-full object-cover shadow-xl md:h-[500px]"
        />
      </FadeUp>

      <FadeUp delay={0.08}>
        <div>
          <p
            className="text-base leading-8 md:text-lg"
            style={{ color: colors.muted }}
          >
          Your property is more than just real estate. It is an investment that deserves thoughtful care and professional attention. At Alvara Maison, our focus is maximizing your rental income while protecting the long term quality of your home, creating a hands off ownership experience with dependable, consistent returns.
          </p>

          <p
            className="mt-12 text-base leading-8 md:text-lg"
            style={{ color: colors.muted }}
          >
           We create elevated stays tailored to business travelers, relocating professionals, and guests who value thoughtful design and comfort. Each property is professionally managed, carefully furnished, and meticulously maintained to deliver a refined guest experience while supporting strong and consistent performance for owners.
          </p>
        </div>
      </FadeUp>

    </div>
  </div>
</section>

<section
  className="px-6 py-20 md:px-10 md:py-15"
  style={{ backgroundColor: colors.cream }}
>
  <div className="mx-auto max-w-7xl">

    <div
      className="grid items-center gap-10 md:grid-cols-2 pt-7"
      style={{ borderTop: `1px solid ${colors.stone}` }}
    >

      <FadeUp>
        <h3
          className="text-3xl leading-tight md:text-4xl"
          style={{ color: colors.text, fontFamily: "'Playfair Display', serif" }}
        >
          Want to Maximize Your Property’s Potential? Let's Talk!
        </h3>
      </FadeUp>

<FadeUp delay={0.08}>
  <div className="flex flex-col gap-6 md:items-end">
    <a
      href="#contact"
      className="rounded-full px-8 py-3 text-sm uppercase tracking-[0.18em]"
      style={{
        backgroundColor: colors.warmButton,
        color: colors.warmButtonText,
      }}
    >
      Contact us
    </a>
  </div>
</FadeUp>

    </div>

  </div>
</section>
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
          ["name", "Name", "text", "Full name"],
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
              className="w-full border px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#b8946a]"
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
            className="w-full min-h-[160px] resize-y border px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#b8946a]"
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
      <section className="relative min-h-[62vh] bg-cover bg-center bg-no-repeat bg-fixed px-6 py-8 md:px-10" style={{ backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${contactHeroImage})` }}>
        <SiteNav light />
        <div className="mx-auto max-w-7xl pt-28 md:pt-45">
<h1
  className="text-5xl leading-tight text-white md:text-7xl"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  Contact us
</h1>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: colors.background }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 md:grid-cols-[1.08fr_0.92fr]">
            <FadeUp>
              <div>
                <h2 className="text-4xl leading-tight md:text-6xl" style={{ color: colors.text, fontFamily: "Georgia, serif" }}>
                  Send Us a Message
                </h2>
                <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: colors.muted }}>
                  Have questions or thinking about your next move? We’re here to guide you. Whether you’re looking to learn more about our services or discover how to maximize your property’s potential, our team is ready to provide the support and expertise you need. Property ownership should be effortless and rewarding, and we’re committed to helping you achieve just that.
                </p>
                <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: colors.muted }}>
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
    <main className="min-h-screen scroll-smooth" style={{ backgroundColor: colors.background, color: colors.text }}>
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
