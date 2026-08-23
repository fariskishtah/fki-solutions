"use client";

export function FilterControls({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (option: string) => void;
}) {
  return (
    <div className="filter-controls" aria-label={label} role="group">
      {options.map((option) => (
        <button
          type="button"
          key={option}
          className={active === option ? "is-active" : ""}
          aria-pressed={active === option}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
