import Title from "@/components/Title";
import styles from "./style.module.css";
export default function Page() {
  return (
    <>
      {/* タイトル部分 */}
      {/* <div className={styles.page_title}>
        <h1>ビンゴ大会</h1>
      </div> */}
      <Title heading="ビンゴ大会" headingEnglish="Bingo Event" />

      {/* コンテンツ部分 */}
      <div className={styles.content_wrapper}>
        {/* 右側：画像 */}
        <div className={styles.image_section}>
          <img src="/images/bingo_img.webp" className={styles.image} />
        </div>
        {/* 左側：本文 */}
        <div className={styles.wrapper}>
          <div className={styles.top_box}></div>
          <div className={styles.text_box}>
            <p>
              <span style={{ color: "#F8B500", fontWeight: "bold" }}>運</span>
              を味方につけろ！
              <br />
              毎年大盛り上がりのビンゴ大会が今年もやってくる！
              <br />
              次々に読み上げられる数字に一喜一憂するスリル！
              <br />
              見事ビンゴを揃えれば
              <span style={{ color: "red", fontWeight: "bold" }}>豪華景品</span>
              をゲットするチャンス！
              <br />
              勝敗はただ一つ「
              <span style={{ color: "#F8B500", fontWeight: "bold" }}>運</span>
              」！ あなたは
              <span style={{ color: "#F8B500", fontWeight: "bold" }}>幸運</span>
              をつかめるか！？
            </p>
          </div>
          <div className={styles.bottom_box}></div>
        </div>
      </div>
    </>
  );
}
