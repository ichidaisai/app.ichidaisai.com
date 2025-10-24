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

      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <center>
            <h1 className={styles.title}>
              注意事項
            </h1>
            <h2 className={styles.subtitle}>
              <b>本日はご来場ありがとうございます</b>
            </h2>
          <p className={styles.notice_text}>
            全てのご来場の方が安心して<span className={styles.br}></span>市大祭をお楽しみいただけるよう
            <br />
            以下の点にご協力をお願いします。
          </p>
          </center>
          <div className={styles.notice}>
            <div>
              <center>
              <h3>全面禁煙</h3>
              <Image
                src="/images/kinen_mark.png"
                className={styles.notice_Image}
                alt="全面禁煙"
                width={300}
                height={300}
              />
              </center>
            </div>
            <div>
              <center>
              <h3>ペット禁止</h3>
              <Image
                src="/images/pettokinsi_mark.png"
                className={styles.notice_Image}
                alt="ペット禁止"
                width={300}
                height={300}
              />
              </center>
            </div>
            <div>
              <center>
              <h3>
                全面飲酒禁止
                <br />
                酒類の持ち込み不可
              </h3>
              <Image
                src="/images/osakekinsi_mark.png"
                className={styles.notice_Image}
                alt="全面飲酒禁止酒類の持ち込み不可"
                width={300}
                height={300}
              />
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <center>
            <b>
              <h2 className={styles.subtitle}>
                ごみの分別にご協力をお願いします！
              </h2>
            </b>
            <Image
              src="/images/gomibunbetu.png"
              alt="ごみの分別"
              width={300}
              height={300}
              className={styles.notice_Image}
            />
          </center>
        </div>
      </div>
    </>
  );
}
