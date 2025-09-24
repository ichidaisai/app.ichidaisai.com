import styles from "./style.module.css";
import Image from "next/image";

type StoreCardProps = {
  name: string;
  belong: string;
  category: string;
  location: string;
  detail: string;
  imageSrc: string;
};

export default function StoreCard({
  name,
  belong,
  category,
  location,
  detail,
  imageSrc,
}: StoreCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.belong}>{belong}</div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          width={64}
          height={64}
          src={imageSrc}
          alt={`${name}の画像`}
        />
        <div className={styles.info}>
          <div className={styles.category}>{category}</div>
          <div className={styles.location}>
            <Image src="/images/map-pin.svg" width={24} height={24} alt="" />
            {location}
          </div>
        </div>
      </div>
      <div className={styles.detail}>{detail}</div>
    </div>
  );
}
