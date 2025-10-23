import styles from "./style.module.css";
import Image from "next/image";
import { Kaisei_Opti } from "next/font/google";
type EventCardProps = {
  name: string;
  category: string;
  location: string;
  min: number;
  start: string;
  end: string;
};
const kaisei = Kaisei_Opti({ subsets: ["latin"], weight: "400" });
export default function EventCard({
  name,
  category,
  location,
  min,
  start,
  end,
}: EventCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.name} ${kaisei.className}`}>{name}</div>
        <div className={styles.imageWrapper}>
          <div className={`${styles.info} ${kaisei.className}`}>
            {category !== "" ? (
              <div className={`${styles.category} ${kaisei.className}`}>
                {category}
              </div>
            ) : null}
            <div className={`${styles.location} ${kaisei.className}`}>
              <Image src="/images/map-pin.svg" width={24} height={24} alt="" />
              {location}
            </div>
            {start} - {end} {min}分
          </div>
        </div>
      </div>
    </div>
  );
}
