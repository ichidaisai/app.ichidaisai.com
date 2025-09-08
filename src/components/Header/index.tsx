import Link from "next/link";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          市大祭
        </Link>
        <nav className={styles.nav}>
          <Link href="/projects" className={styles.link}>
            企画検索
          </Link>
          <Link href="/guest" className={styles.link}>
            ゲスト
          </Link>
          <Link href="/map" className={styles.link}>
            マップ
          </Link>
          <Link href="/access" className={styles.link}>
            アクセス
          </Link>
        </nav>
      </div>
    </header>
  );
}
