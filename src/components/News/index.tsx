import styles from "./style.module.css";

type NewsItem = {
  date: string;
  text: string;
};

type NewsProps = {
  newsList?: NewsItem[];
  moreNewsUrl?: string;
};

export default function News({
  newsList = [
    { date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
    { date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
    { date: "2025.09.01 ・ カテゴリ", text: "広島市立大学 大学祭のウェブサイトを公開しました。" },
  ],
  moreNewsUrl,
}: NewsProps) {
  const handleMoreNewsClick = () => {
    if (moreNewsUrl) {
      window.location.href = moreNewsUrl;
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.newsSection}>
        <div className={styles.newsLeft}>
          <h2 className={styles.newsTitle}>News</h2>
          <ul className={styles.newsList}>
            {newsList.map((item, idx) => (
              <li key={idx}>
                <span className={styles.date}>{item.date}</span>
                <p className={styles.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.newsRight}>
          <img src="/images/megaphone.png" alt="megaphone" className={styles.megaphone} />
          <button
            type="button"
            className={styles.moreNewsBtn}
            onClick={handleMoreNewsClick}
          >
            <span>他のニュースを見る</span>
            <span className={styles.arrow}></span>
          </button>
        </div>
      </section>
    </div>
  );
}
