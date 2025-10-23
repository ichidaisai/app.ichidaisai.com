"use client";
import react, { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.headerLogo}>
          <Image
            src="/images/logo.webp"
            alt="ロゴ"
            width={512}
            height={512}
            className={styles.logo}
          />
        </div>

        <button
          className={styles.menuButton}
          onClick={open}
          aria-label="メニュー"
        >
          <Image src="/images/menu.svg" alt="メニュー" width={32} height={32} />
        </button>
        <nav className={styles.headerLinks}>
          <Link href="/" className={styles.link}>
            ホーム
          </Link>
          <Link href="/projects" className={styles.link}>
            企画
          </Link>
          <Link href="/guest" className={styles.link}>
            ゲスト
          </Link>
          <Link href="/timetable" className={styles.link}>
            タイムテーブル
          </Link>
          <Link href="/map" className={styles.link}>
            マップ
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
      </div>
    </header>
  );
}
