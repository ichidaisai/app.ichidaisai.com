import styles from "./style.module.css";

export default function Pending() {
  return (
    <div className={styles.pendingRoot}>
      <div className={styles.inner}>
        <h1 className={styles.title}>準備中</h1>
        <p className={styles.text}>
          このページは現在準備中です。
          <br />
          公開までしばらくお待ちください。
        </p>
      </div>
    </div>
  );
}
