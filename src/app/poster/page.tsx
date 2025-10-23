import Image from "next/image";
import styles from "./style.module.css";

const posterPlaces = {
  高校: [
    "広島市立基町高等学校",
    "崇徳高等学校",
    "広島市立美鈴が丘高等学校",
    "広島県立安古市高等学校",
    "広島城北高等学校",
    "広島市立沼田高等学校",
    "安田女子中学高等学校",
    "広島県立広島皆実高等学校",
    "比治山女子中学校・高等学校",
    "広島県瀬戸内高等学校",
    "広島県立安芸府中高等学校",
    "広島県立海田高等学校",
    "広島国際学院高等学校",
    "広島県立安芸南高等学校",
    "広島県立広島井口高等学校",
    "山陽学園山陽高等学校",
  ],
  学習塾: [
    "明光義塾 中区役所前教室",
    "明光義塾 横川駅駅前教室",
    "総合学習塾 田中学習会 上安校",
    "総合学習塾 田中学習会 八幡校",
    "個別指導塾Axis",
    "個別塾 ALL-up 大塚教室",
  ],
  地方公共団体: [
    "安芸区役所",
    "安佐北区役所",
    "安佐南区役所",
    "佐伯区役所",
    "西区役所",
    "南区役所",
    "東区役所",
  ],
  公共交通機関: [
    "JR横川駅",
    "広島電鉄バス",
    "アストラムライン 大塚駅",
    "アストラムライン 広域公園前駅",
    "アストラムライン 伴中央駅",
  ],
  大学: ["修道大学"],

  その他: ["広島市青少年センター", "ロイヤル自動車学校"],
};

export default function Page() {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.hero}>
        <Image
          src="/images/kv.webp"
          alt="広島修道大学"
          width={1200}
          height={675}
          className={styles.heroImage}
          priority
        />
      </div>
      <div className={styles.inner}>
        <h1 className={styles.title}>ポスター掲示場所</h1>
        <div className={styles.grid}>
          {Object.entries(posterPlaces).map(([category, places]) => (
            <div key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <ul className={styles.list}>
                {places.map((place) => (
                  <li key={place} className={styles.listItem}>
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
