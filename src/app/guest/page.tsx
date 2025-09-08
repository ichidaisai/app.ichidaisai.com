import Image from "next/image";
import styles from "./style.module.css";

export default function Page() {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.posterWrapper}>
            <Image
              src="/images/guest-poster.webp"
              height={1200}
              width={800}
              alt="Laughing Hick"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className={styles.description}>
          <h2 className={styles.heading}>
            山梨・富士吉田発の3ピースロックバンド
            <br />
            「Laughing Hick（ラフィングヒック）」が大学祭に登場！
          </h2>
          <p className={styles.text}>
            切ない歌詞とキャッチーなメロディー、そして一度聴いたら耳から離れない疾走感あるサウンドで、今じわじわ注目を集めているバンドです。
            代表曲「カシスオレンジ」や「愛してるって」に胸を打たれた人も多いはず。
            最新作まで勢いが止まらない彼らのライブは、観客と一体になって盛り上がれること間違いなし！
            普段のキャンパスがライブハウスに変わる瞬間を、一緒に体感しよう！
          </p>
        </div>
      </div>
    </div>
  );
}
