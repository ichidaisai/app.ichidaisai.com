import Title from "../Title";
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
    {
      id: "n1",
      date: "2025.10.24",
      text: "コスプレイベントの参加者を募集しています！応募はイベント詳細ページから！",
    },
    {
      id: "n2",
      date: "2025.10.24",
      text: "広島市立大学 大学祭のウェブサイトを公開しました。",
    },
  ],
}: NewsProps) {
  return (
    <div className={styles.container}>
      <section className={styles.newsSection}>
        <div className={styles.newsLeft}>
          <Title heading="お知らせ" headingEnglish="News" />
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
        </div>
      </section>
    </div>
  );
}
