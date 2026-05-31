import type { ReactNode } from "react";

type PhotoFrameProps = {
  src?: string;
  aspectClass?: string;
  className?: string;
  children?: ReactNode;
  overlay?: boolean;
};

export default function PhotoFrame({
  src,
  aspectClass = "aspect-[4/5]",
  className = "",
  children,
  overlay = true,
}: PhotoFrameProps) {
  return (
    <div className={`photo-frame ${aspectClass} ${className}`.trim()}>
      <div className="photo-frame-mat" aria-hidden />
      {src ? (
        <div
          className="photo-frame-image"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(43,36,29,0.05) 0%, rgba(43,36,29,0.12) 100%), url('${src}')`,
          }}
        />
      ) : null}
      {overlay ? <div className="photo-frame-vignette" aria-hidden /> : null}
      {children}
    </div>
  );
}
