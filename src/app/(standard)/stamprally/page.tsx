import Title from "@/components/Title";
import styles from "./style.module.css";
import { Kaisei_Opti } from "next/font/google";
export default function Page() {
  return (
    <>
      {/* タイトル部分 */}
      {/* <div className={styles.page_title}>
        <h1>ビンゴ大会</h1>
      </div> */}
      <Title heading="スタンプラリー" headingEnglish="Stamp Rally" />

      <div className={styles.subtitle}>
          <p>
            市大祭でスタンプラリーを開催！！！<br />
            ゴールした方には豪華景品が！台紙はパンフレットの裏をご覧ください！！
          </p>
      </div>

      {/* コンテンツ部分 */}
      <div className={styles.line}>
        <div className={styles.content_wrapper}>
          <div className={styles.minititle}>
            <b>①まずはスタート地点に行こう！</b>
          </div>
          <div className={styles.wrapper}>
            {/* 右側：画像 */}
            <div className={styles.image_section}>
              <img src="/images/stamprally_tori.png" className={styles.image} />
            </div>  
            <div className={styles.text_box}>
              <p>
                まずは受付で１つ目のスタンプを押そう！
                パンフレットの裏に押すことができるよ！
              </p>
            </div>
          </div>

          <div className={styles.minititle}>
            <b>②目的地へレッツゴー！</b>
          </div>
          <div className={styles.wrapper}>
            {/* 右側：画像 */}
            <div className={styles.image_section}>
              <img src="/images/stamposu.png" className={styles.image} />
            </div>  
            <div className={styles.text_box}>
              <p>
                パンフレットを頼りにスタート！各目的地でスタンプをゲット！
              </p>
            </div>
          </div>

          <div className={styles.minititle}>
            <b>③ヒントを頼りに次の目的地にGO！</b>
          </div>
          <div className={styles.wrapper}>
            {/* 右側：画像 */}
            <div className={styles.image_section}>
              <img src="/images/stampcomplete.png" className={styles.image} />
            </div>  
            <div className={styles.text_box}>
              <p>
                現在地にあるヒントから次の目的地を探そう！
                全部集めたら玄関受付でいいことが待っているかも！？
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
