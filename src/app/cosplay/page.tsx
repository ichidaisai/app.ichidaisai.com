import cosplay from '../../assets/cosplay.png';
import styles from './style.module.css';
export default function CosplayContest  ()  {
  return (
    <>
        <div className={styles.visual}>
            <div className={styles.cosplay_title}>コスプレ<br />コンテスト</div>
        </div>  
        <div>
          <div className={styles.imageRow}> 
            <img src="/projects/cosplay_contest1.png" className={styles.sideImage} /> 
            <img src="/projects/cosplay_contest2.png" className={styles.mainImage} />
            <img src="/projects/cosplay_contest3.png" className={styles.sideImage} /> 
          </div>
            <div className={styles.textbox}>
                <p>
                コスプレコンテスト変身の魔法、開幕！コスプレで新しい自分に大変身！
                <br />
                大胆に、豪華に、ユーモラスに個性あふれる参加者たちがステージを彩ります！
                <br />
                勝敗を決めるのは審査員ではなく、<span className={styles.highlight}>会場のあなたの一票！</span>
                <br />
                参加者の魅力を見逃さず、ぜひ投票で盛り上げてください！
                <br />
                優勝者には<span className={styles.highlight}>豪華景品</span>をご用意！見るだけでも楽しめる、
                <br />
                参加すればもっと楽しい、この瞬間を一緒に作り上げましょう！
                <br />
                </p>
            </div>
            <div className={styles.form_link}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScOvKlPFdLcEpKyfXEOcwVFdcpuWxW8Tudtq020oLcUMHGQBg/viewform?usp=header">参加したい人はこちらをクリック</a>
            </div>
        </div>
    </>
  );
};