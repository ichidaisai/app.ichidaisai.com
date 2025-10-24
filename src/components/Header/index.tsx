"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.css";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="ロゴ"
              width={512}
              height={512}
              className={styles.logo}
            />
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={open}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "閉じる" : "メニュー"}
        >
          {isOpen ? (
            // バツアイコン（SVG）
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <Image src="/images/menu.svg" alt="メニュー" width={32} height={32} />
          )}
        </button>

        <nav className={styles.headerLinks}>
          <Link href="/" className={styles.link}>
            ホーム
          </Link>
          <Link href="/projects" className={styles.link}>
            出展一覧
          </Link>
          <Link href="/guest" className={styles.link}>
            ゲスト
          </Link>
          <Link href="/timetable" className={styles.link}>
            タイムテーブル
          </Link>
          <Link href="/access" className={styles.link}>
            アクセス
          </Link>
          <a
            href="https://www.instagram.com/ichidai_sai/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
        </nav>
        {/* モバイル用メニュー: 表示/非表示は isOpen によって制御します。CSSは別ファイルで定義される想定です。 */}
        <div
          id="mobile-menu"
          className={styles.mobileMenu}
          style={{ display: isOpen ? "block" : "none" }}
          aria-hidden={!isOpen}
        >
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>
              ホーム
            </Link>
            <Link href="/projects" className={styles.mobileLink} onClick={() => setOpen(false)}>
              出展一覧
            </Link>
            <Link href="/guest" className={styles.mobileLink} onClick={() => setOpen(false)}>
              ゲスト
            </Link>
            <Link href="/timetable" className={styles.mobileLink} onClick={() => setOpen(false)}>
              タイムテーブル
            </Link>
            <Link href="/access" className={styles.mobileLink} onClick={() => setOpen(false)}>
              アクセス
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
