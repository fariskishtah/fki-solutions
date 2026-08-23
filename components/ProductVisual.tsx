export function ProductVisual({
  index,
  accent,
  compact = false,
}: {
  index: string;
  accent: "lime" | "violet" | "amber";
  compact?: boolean;
}) {
  return (
    <div className={`product-visual accent-${accent} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="product-grid-lines" />
      <div className="product-orbit orbit-a" />
      <div className="product-orbit orbit-b" />
      <div className="product-signal signal-a" />
      <div className="product-signal signal-b" />
      <span className="visual-index">FK / {index}</span>
      <div className="visual-readout"><i /> System architecture</div>
    </div>
  );
}
