"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchIndex } from "@/data/search";

export function SiteSearch() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return searchIndex.slice(0, 7);
    return searchIndex.filter((item) => [item.title, item.description, item.type, ...item.keywords].join(" ").toLowerCase().includes(term)).slice(0, 9);
  }, [query]);

  function openSearch() {
    dialogRef.current?.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeSearch() {
    dialogRef.current?.close();
    setQuery("");
  }

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <button className="search-trigger" type="button" onClick={openSearch} aria-label="Search FK Solutions"><span aria-hidden="true">⌕</span><kbd>⌘K</kbd></button>
      <dialog className="search-dialog" ref={dialogRef} onClose={() => setQuery("")}>
        <div className="search-panel">
          <div className="search-input-row"><span aria-hidden="true">⌕</span><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, work, Labs, services…" aria-label="Search site" /><button type="button" onClick={closeSearch} aria-label="Close search">Esc</button></div>
          <div className="search-results" aria-live="polite">
            {results.length ? results.map((item) => <Link key={item.id} href={item.href} onClick={closeSearch}><span>{item.type}</span><div><strong>{item.title}</strong><p>{item.description}</p></div><i aria-hidden="true">↗</i></Link>) : <p className="search-empty">No matching products, projects, experiments, or services.</p>}
          </div>
          <div className="search-foot"><span>Searches the local site index</span><span><kbd>Tab</kbd> navigate · <kbd>Esc</kbd> close</span></div>
        </div>
      </dialog>
    </>
  );
}
