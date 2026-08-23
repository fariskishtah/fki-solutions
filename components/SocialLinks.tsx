import { visibleSocialLinks } from "@/data/site";

const labels: Record<string, { name: string; mark: string }> = {
  linkedin: { name: "LinkedIn", mark: "in" },
  github: { name: "GitHub", mark: "GH" },
  portfolio: { name: "Portfolio", mark: "↗" },
};

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "social-links-compact" : ""}`}>
      {visibleSocialLinks.map(([network, href]) => {
        const item = labels[network] ?? { name: network, mark: "↗" };
        return (
          <a key={network} href={href} target="_blank" rel="noreferrer" aria-label={`${item.name} (opens in a new tab)`}>
            <span aria-hidden="true">{item.mark}</span>{item.name}
          </a>
        );
      })}
    </div>
  );
}
