import type { ReactNode } from "react";
import PhotoFrame from "./PhotoFrame";

type LetterSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  imageSrc?: string;
  imagePosition?: "left" | "right";
  bg?: "rice" | "cream";
  closing?: ReactNode;
};

export default function LetterSection({
  eyebrow,
  title,
  children,
  imageSrc,
  imagePosition = "right",
  bg = "rice",
  closing,
}: LetterSectionProps) {
  const textBlock = (
    <div className="flex flex-col justify-center">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-section mb-10 md:mb-12">{title}</h2>
      <div className="max-w-lg space-y-7 body-prose">{children}</div>
      {closing ? <div className="mt-12">{closing}</div> : null}
    </div>
  );

  const imageBlock = imageSrc ? (
    <PhotoFrame
      src={imageSrc}
      aspectClass="aspect-[4/5] lg:aspect-[5/6]"
      className="w-full"
    />
  ) : (
    <PhotoFrame aspectClass="aspect-[4/5] lg:aspect-[5/6]" className="w-full" />
  );

  return (
    <section className={bg === "cream" ? "bg-cream" : "bg-rice"}>
      <div className="section-inner section-pad">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            className={
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            }
          >
            {textBlock}
          </div>
          <div
            className={
              imagePosition === "left" ? "lg:order-1" : "lg:order-2"
            }
          >
            {imageBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
