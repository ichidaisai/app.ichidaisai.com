import Image from "next/image";
import styles from "./style.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bg}>
        <img
          src="/images/logo.webp"
          alt="ロゴ"
          className={styles.logo}
          width={240}
          height={240}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/home1.webp"
            alt="Toytopia"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            といとぴあ <span className={styles.subtitle}>Toytopia</span>
          </h1>
          <p className={styles.text}>
            今年度の市大祭のテーマは「といとぴあ」です。
            <br />
            この言葉は、おもちゃという意味の「toy」と理想郷という意味の「Utopia」を掛け合わせた造語で、大人になっても忘れたくない遊び心あふれる世界と理想的な場所が融合した特別な空間を象徴しています。
            <br />
            大学祭は学生たちにとって、日常の枠を超えて自由に表現し、楽しむことができる貴重な時間です。
            <br />
            その中で、参加者全員が遊び心に満ちた夢のような世界に足を踏み入れ、思い出に残るひとときを過ごすことができるような大学祭を目指しています。
          </p>
        </div>
      </div>
    </>
  );
}
