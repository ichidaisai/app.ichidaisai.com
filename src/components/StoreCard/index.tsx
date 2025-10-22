import styles from "./style.module.css";
import Image from "next/image";

type StoreCardProps = {
  name: string;
  category: string;
  location: string;
  detail: string;
  imageSrc: string;
};

export default function StoreCard({
  name,
  category,
  location,
  detail,
  imageSrc,
}: StoreCardProps) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>{truncateText(name, 20)}</div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          width={120}
          height={120}
          src={imageSrc}
          alt={`${name}の画像`}
        />
        <div className={styles.info}>
          <div className={styles.category}>{category}</div>
          <div className={styles.location}>
            <Image src="/images/map-pin.svg" width={24} height={24} alt="" />
            {truncateText(location, 15)}
          </div>
        </div>
      </div>
      <div className={styles.detail}>{truncateText(detail, 100)}</div>
    </div>
  );
}
