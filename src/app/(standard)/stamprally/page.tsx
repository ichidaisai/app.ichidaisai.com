import Title from "@/components/Title";
import styles from "./style.module.css";
export default function Page() {
  return (
    <>
      {/* タイトル部分 */}
      {/* <div className={styles.page_title}>
        <h1>ビンゴ大会</h1>
      </div> */}
      <Title heading="スタンプラリー" headingEnglish="Stamp Rally" />

      {/* コンテンツ部分 */}
      <div className={styles.content_wrapper}>
        {/* 左側：本文 */}
        <div className={styles.wrapper}>
          {/* 右側：画像 */}
          <div className={styles.image_section}>
            <img src="/images/bingo_img.png" className={styles.image} />
          </div>  
          <div className={styles.text_box}>
            <p>
                市大祭スタンプラリーへようこそ！
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
