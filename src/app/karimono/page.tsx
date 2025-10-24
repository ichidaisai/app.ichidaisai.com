import styles from "./style.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>借りモノ競争</div>
        <img src="/images/karimono1.png" className={styles.side_img} />
        <div className={styles.content}>
          <p>
            <span className={styles.emphasis}>走って！探して！笑って！</span>
            <br />
            その場で指定されたモノや人を見つけ出し、ゴールを目指せ！
            <br />
            勝敗を分けるのは「<strong>スピード</strong>」と「
            <strong>ひらき力</strong>」！！
            <br />
            ドキドキのお題＆豪華景品も待っている！
            <br />
            君の開発力が試される！さあ挑戦だ！
          </p>
        </div>
        <img className={styles.side_img_right} src="/images/karimono2.png" />
      </div>
    </>
  );
}
