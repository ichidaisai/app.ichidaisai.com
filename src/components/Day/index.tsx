import styles from "./style.module.css";
import Image from "next/image";
import { Kaisei_Opti } from "next/font/google";
const kaisei = Kaisei_Opti({ subsets: ["latin"], weight: ["500"] });
type DayProps = {
  month: string;
  day: string;
  count: number;
  className?: string;
};

export default function Day({ month, day, count, className }: DayProps) {
  return (
    <div className={`${styles.container} ${kaisei.className} ${className}`}>
      <div className={`${styles.dayCount} ${kaisei.className} ${className}`}>
        Day {count}
      </div>
      <div className={styles.date}>
        <div className={`${styles.month} ${kaisei.className} ${className}`}>
          {month}
        </div>
        <div className={`${styles.day} ${kaisei.className} ${className}`}>
          {day}
        </div>
      </div>
    </div>
  );
}
