import React from "react";
import styles from "./style.module.css";
import Title from "@/components/Title";

export default function AccessPage() {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.container}>
        <Title heading="アクセス" headingEnglish="Access" />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>会場周辺マップ</h2>
          <div className={styles.mapWrap}>
            {/* Google Maps embed - replace the src with the real place/embed link or API-based iframe if preferred */}
            <iframe
              title="大学の地図"
              className={styles.map}
              src="https://maps.google.com/maps?q=34.438381,132.415861&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>会場へのアクセス</h2>
          <p className={styles.lead}>
            広島市立大学へのアクセス方法となります。所要時間は交通状況等により変動する場合があります。
          </p>

          <div className={styles.card}>
            <h3 className={styles.subheading}>アストラムライン</h3>
            <p className={styles.paragraph}>
              大塚（市立大学口）駅から徒歩約25分。東出口（市立大学方面）を出て、広島高速4号線方面へ進んでください。
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>広島電鉄バス</h3>

            <div className={styles.nested}>
              <h4 className={styles.subSubheading}>
                広島バスセンターからお越しの方
              </h4>
              <p className={styles.paragraph}>
                2番乗り場「くすの木台」行に乗車し「市立大学前」下車。
                <br />
                4番乗り場「こころ西風梅苑・こころ産業団地・花の季台・こころ南中央」行に乗車し「沼田料金所前」下車。徒歩約8分。
                <br />
                ※市立大学前に停車する便もあります。
              </p>

              <h4 className={styles.subSubheading}>横川駅からお越しの方</h4>
              <p className={styles.paragraph}>
                3番乗り場「こころ西風梅苑・こころ産業団地・花の季台・こころ南中央」行に乗車し「沼田料金所前」下車、徒歩約8分。
                <br />
                ※市立大学前に停車する便もあります。
              </p>

              <h4 className={styles.subSubheading}>臨時バスについて</h4>
              <p className={styles.paragraph}>
                大会開催に合わせて臨時便が運行される予定です。運航内容・運賃・所要時間などの詳細は以下の公式情報をご確認ください。
                <br />
                <a
                  href="https://www.hiroden.co.jp/topics/2025/1020-cityunivfes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  広島電鉄：大学祭臨時便情報（外部サイト）
                </a>
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.subheading}>お車でお越しの方</h3>
            <p className={styles.paragraph}>
              広島高速4号線「沼田料金所」から約3分。指定の大学駐車場を利用してください。混雑が予想されますので公共交通機関の利用を推奨します。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
