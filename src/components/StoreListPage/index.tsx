// components/StoreListPage.tsx
import Button from "@/components/LinkButton";
import styles from "./style.module.css";
import StoreCard from "@/components/StoreCard";

type Props = {
  heading: string;
  headingEnglish: string;
  stores: Store[];
};

export default function StoreListPage({
  heading,
  headingEnglish,
  stores,
}: Props) {
  return (
    <div className={styles.pageRoot}>
      <div className={styles.inner}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.headingEnglish}>{headingEnglish}</div>
        </div>
        <div className={styles.categorys}>
          <div className={styles.category}>カテゴリ</div>
          <Button href="/projects" text="全て" />
          <Button href="/projects/food" text="飲食" />
          <Button href="/projects/shop" text="物販・展示" />
        </div>
        <div className={styles.storeContainer}>
          {stores.map((store, i) => (
            <StoreCard
              key={i}
              name={store.name}
              belong={store.belong}
              category={store.category}
              location={store.location}
              detail={store.detail}
              imageSrc={store.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
