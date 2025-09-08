import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.heading}>問い合わせ先</h3>
          <div className={styles.linkList}>
            <p>広島市立大学 大学祭実行委員会</p>
            <p>
              〒731-3194 広島市安佐南区大塚東三丁目4番1号 学生会館 2階 大祭室
            </p>
            <p>
              TEL & FAX:{" "}
              <a href="tel:0828485443" className={styles.link}>
                (082) 848-5443
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:ichidaisai@outlook.jp" className={styles.link}>
                ichidaisai@outlook.jp
              </a>
            </p>
          </div>
        </div>
        <p className={styles.copyright}>© 2025 広島市立大学 大学祭実行委員会</p>
      </div>
    </footer>
  );
}
