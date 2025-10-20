import Link from "next/link";
import styles from "./style.module.css";

type NewsItem = {
  id: string;
  date: string;
  text: string;
};

type NewsProps = {
  newsList?: NewsItem[];
  moreNewsUrl?: string;
};

export default function News({
  newsList = [
    { id: "n1", date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
    { id: "n2", date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
    { id: "n3", date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
  ],
  moreNewsUrl,
}: NewsProps) {
  const isExternal = typeof moreNewsUrl === "string" && /^(https?:)?\/\//.test(moreNewsUrl);

  return (
    <div className={styles.container}>
      <section className={styles.newsSection}>
        <div className={styles.newsLeft}>
          <h2 className={styles.newsTitle}>News</h2>
          <ul className={styles.newsList}>
            {newsList.map((item) => (
              <li key={item.id}>
                <span className={styles.date}>{item.date}</span>
                <p className={styles.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.newsRight}>
          <img
            src="/images/megaphone.png"
            alt="ニュース告知のアイコン"
            className={styles.megaphone}
          />

          {moreNewsUrl ? (
            isExternal ? (
              <a
                href={moreNewsUrl}
                className={styles.moreNewsBtn}
                aria-label="他のニュースを見る"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>他のニュースを見る</span>
                <span className={styles.arrow}></span>
              </a>
            ) : (
              <Link
                href={moreNewsUrl}
                className={styles.moreNewsBtn}
                aria-label="他のニュースを見る"
              >
                <span>他のニュースを見る</span>
                <span className={styles.arrow}></span>
              </Link>
            )
          ) : (
            <button
              type="button"
              className={styles.moreNewsBtn}
              aria-label="他のニュースを見る"
              disabled
            >
              <span>他のニュースを見る</span>
              <span className={styles.arrow}></span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}