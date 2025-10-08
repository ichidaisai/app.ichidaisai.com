import styles from "./style.module.css";

export default function News() {
  return (
    <div className={styles.container}>
      <section className={styles.newsSection}>
        <div className={styles.newsLeft}>
          <img
            src="/images/news-title.png"
            alt="News"
            className={styles.newsTitleImg}
          />
          <ul className={styles.newsList}>
            <li>
              <span className={styles.date}>2025.09.01 ・ カテゴリ</span>
              <p className={styles.text}>
                広島市立大学 大学祭のウェブサイトを公開しました。
              </p>
            </li>
            <li>
              <span className={styles.date}>2025.09.01 ・ カテゴリ</span>
              <p className={styles.text}>
                広島市立大学 大学祭のウェブサイトを公開しました。
              </p>
            </li>
            <li>
              <span className={styles.date}>2025.09.01 ・ カテゴリ</span>
              <p className={styles.text}>
                広島市立大学 大学祭のウェブサイトを公開しました。
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.newsRight}>
          <img
            src="/images/megaphone.png"
            alt="megaphone"
            className={styles.megaphone}
          />
          <a href="#" className={styles.moreNewsImg}>
            <img src="/images/more-news.png" alt="他のニュースを見る" />
          </a>
        </div>
      </section>
    </div>
  );
}
