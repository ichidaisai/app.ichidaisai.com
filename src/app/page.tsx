import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.css";
import News from "@/components/News";

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
      <News />

      <div className={styles.container}>
        <div className={styles.sponsorHeader}>
          <Image
            src="/images/sponsor.webp"
            alt={"Sponsor"}
            width={400}
            height={300}
            className={styles.sponsorTitleImage}
          />
        </div>
        <div className={styles.sponsortext}>
          <div className={styles.sponsor}>
            <div className={styles.sponsorContent}>
              私たちは、今年も新たな一歩を踏み出すべく、第32回 広島市立大学
              大学祭を開催します。
              <br />
              これは、下記の企業様方のご協賛が在ってこそ成り立つことができています。
              <br />
              これからも市大祭がより良いものとなるよう精一杯努めてまいりますので、
              今後とも温かいご声援をどうぞよろしくお願いします。
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
