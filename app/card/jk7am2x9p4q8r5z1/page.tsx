"use client";

import { motion } from "framer-motion";

const colors = {
  background: "#f5f0e8",
  cream: "#fbf8f3",
  stone: "#ddd2c4",
  warmButton: "#b8946a",
  warmButtonText: "#fffaf4",
  text: "#2b2723",
  muted: "#6d655c",
  overlay: "rgba(20, 17, 14, 0.42)",
};

const heroImage =
  "https://jreiko.com/wp-content/uploads/2024/04/J.ReikoDesignCo-QuietLuxuryBedroom-01.jpg";


function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function SaveContactButton({ className }: { className?: string }) {
  const handleSave = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Justin Kim",
      "ORG:Alvara Maison",
      "TEL;TYPE=CELL:505-550-3021",
      "EMAIL:justin@alvaramaison.com",
      "URL:https://www.alvaramaison.com",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Justin Kim.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={handleSave}
      className={`cursor-pointer inline-block rounded-full px-8 py-3 text-sm uppercase tracking-[0.18em] transform transition duration-300 hover:scale-105 ${className}`}
      style={{ backgroundColor: colors.warmButton, color: colors.warmButtonText }}
    >
      Save Contact
    </motion.button>
  );
}

export default function NfcCardPage() {
  return (
    <main
      className="min-h-screen scroll-smooth"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* Hero */}
      <section
        className="relative min-h-[45vh] md:min-h-[50vh] bg-[length:130%] md:bg-cover bg-[center_75%] bg-no-repeat md:bg-fixed px-6 py-8 md:px-10"
        style={{
          backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${heroImage})`,
        }}
      >
        {/* Logo */}
        <div className="absolute inset-x-0 top-0 z-30 px-4 py-4 md:px-6 md:py-5">
          <a href="https://www.alvaramaison.com">
            <img
              src="/logo.png"
              alt="Alvara Maison"
              className="h-14 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </a>
        </div>

        <div className="mx-auto max-w-7xl pt-27 md:pt-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-3 text-xs uppercase tracking-[0.45em] text-white/80"
          >
            Alvara Maison
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-5xl leading-tight text-white md:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact info */}
      <section
        className="px-6 py-16 md:px-10 md:py-24"
        style={{ backgroundColor: colors.background }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <p
              className="mb-3 text-sm uppercase tracking-[0.35em] text-center"
              style={{ color: colors.muted }}
            >
              Get in touch
            </p>
            <h2
              className="text-4xl leading-tight md:text-5xl mb-6 text-center"
              style={{ color: colors.text, fontFamily: "Georgia, serif" }}
            >
              Justin Kim
            </h2>
          </FadeUp>

          <div className="grid gap-0">
            {[
              {
                label: "Phone",
                display: "505-550-3021",
                href: "tel:5055503021",
                delay: 0.08,
              },
              {
                label: "Email",
                display: "justin@alvaramaison.com",
                href: "mailto:justin@alvaramaison.com",
                delay: 0.14,
              },
              {
                label: "Website",
                display: "www.alvaramaison.com",
                href: "https://www.alvaramaison.com",
                delay: 0.2,
              },
            ].map((item) => (
              <FadeUp key={item.label} delay={item.delay}>
                <div
                  className="flex flex-col gap-2 rounded-xl px-6 py-6 mb-4 border"
                  style={{
                    backgroundColor: colors.cream,
                    borderColor: colors.stone,
                    borderLeftWidth: "3px",
                    borderLeftColor: colors.warmButton,
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.28em]"
                    style={{ color: colors.muted }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.label === "Website" ? "_blank" : undefined}
                    rel={
                      item.label === "Website" ? "noopener noreferrer" : undefined
                    }
                    className="text-xl md:text-2xl transition-opacity hover:opacity-60"
                    style={{ color: colors.text, fontFamily: "Georgia, serif" }}
                  >
                    {item.display}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.26}>
            <div className="mt-10 flex justify-center">
              <SaveContactButton />
            </div>
          </FadeUp>
        </div>
      </section>

<footer
        className="px-6 py-8 text-center md:px-10"
        style={{ backgroundColor: colors.background }}
      >
        <p className="text-sm" style={{ color: colors.muted }}>
          Copyright © 2026 Alvara Maison LLC
        </p>
      </footer>
    </main>
  );
}
