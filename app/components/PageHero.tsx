import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  footnote?: ReactNode;
  tone?: "rice" | "cream" | "dawn" | "brown";
};

const toneBg = {
  rice: "bg-rice",
  cream: "bg-cream",
  dawn: "bg-dawn",
  brown: "bg-brown text-white",
};

const toneSubtitle = {
  rice: "text-brown/60",
  cream: "text-brown/60",
  dawn: "text-brown/65",
  brown: "text-white/65",
};

const toneFootnote = {
  rice: "text-brown/45",
  cream: "text-brown/45",
  dawn: "text-brown/45",
  brown: "text-white/45",
};

const toneEyebrow = {
  rice: "text-brown/30",
  cream: "text-brown/30",
  dawn: "text-brown/30",
  brown: "text-white/35",
};

const toneTitle = {
  rice: "text-brown",
  cream: "text-brown",
  dawn: "text-brown",
  brown: "text-white/95",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  footnote,
  tone = "cream",
}: PageHeroProps) {
  return (
    <section className={`${toneBg[tone]} min-h-[72vh] md:min-h-[78vh]`}>
      <div className="section-inner flex min-h-[inherit] flex-col justify-end section-pad">
        {eyebrow ? (
          <p
            className={`mb-8 text-[10px] tracking-[0.45em] ${toneEyebrow[tone]}`}
          >
            {eyebrow}
          </p>
        ) : null}

        <h1
          className={`mb-10 max-w-3xl text-3xl font-medium leading-[1.2] tracking-[0.02em] md:text-4xl lg:text-[2.5rem] ${toneTitle[tone]}`}
        >
          {title}
        </h1>

        {subtitle ? (
          <div
            className={`mb-12 max-w-2xl body-lead ${toneSubtitle[tone]} ${tone === "brown" ? "!text-white/65" : ""}`}
          >
            {subtitle}
          </div>
        ) : null}

        {footnote ? (
          <p
            className={`max-w-xl text-sm leading-[2.3] tracking-[0.08em] ${toneFootnote[tone]}`}
          >
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
