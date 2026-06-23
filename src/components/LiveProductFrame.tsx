import Image from "next/image";
import { ExternalLink } from "lucide-react";

type LiveProductFrameProps = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
  label?: string;
  ctaLabel?: string;
};

export function LiveProductFrame({
  src,
  alt,
  caption,
  href,
  label = "Live Prototype",
  ctaLabel = "View Prototype"
}: LiveProductFrameProps) {
  return (
    <figure className="live-product-frame">
      <div className="live-frame-bar">
        <div className="browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="live-badge">{label}</span>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <ExternalLink size={14} />
          </a>
        ) : null}
      </div>
      <div className="live-frame-image">
        <Image src={src} alt={alt} fill sizes="(max-width: 860px) 100vw, 980px" />
        {href ? (
          <a
            className="live-frame-overlay"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{ctaLabel}</span>
          </a>
        ) : null}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
