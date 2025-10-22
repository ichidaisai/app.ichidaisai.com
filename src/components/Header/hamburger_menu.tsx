"use client";
import React, { useEffect, useRef, useState } from "react";
// Styles are imported globally from app/layout.tsx (Next.js requires global CSS to be loaded in a top-level file)

type MenuItem = { href: string; label: string; external?: boolean };

const DEFAULT_ITEMS: MenuItem[] = [
  { href: "/", label: "ホーム" },
  { href: "/projects", label: "企画検索" },
  { href: "/guest", label: "ゲスト" },
  { href: "/map", label: "マップ" },
  { href: "/access", label: "アクセス" },
];

export default function HamburgerMenu({ items = DEFAULT_ITEMS }: { items?: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // click outside to close
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        className={`hamburger-btn ${open ? "is-active" : ""}`}
        aria-expanded={open}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hamburger-icon" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

  <div ref={menuRef} className={`hamburger-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="menu-panel" role="dialog" aria-modal="true">
          <ul className="menu-list">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
