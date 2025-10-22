"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import StoreCard from "@/components/StoreCard";

type Props = {
  heading: string;
  headingEnglish: string;
  stores: Store[];
};

const getCategoryDisplayName = (category: string): string => {
  switch (category) {
    case "food":
      return "飲食";
    case "shop":
      return "物販・展示";
    default:
      return category;
  }
};

export default function StoreListPage({
  heading,
  headingEnglish,
  stores,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredStores =
    selectedCategory === "all"
      ? stores
      : stores.filter((store) => store.category === selectedCategory);

  useEffect(() => {}, [selectedCategory, filteredStores.length]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.pageRoot}>
      <div className={styles.inner}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.headingEnglish}>{headingEnglish}</div>
        </div>
        <div className={styles.categorys}>
          <div className={styles.category}>カテゴリ</div>
          <button
            className={`${styles.filterButton} ${
              selectedCategory === "all" ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick("all")}
            type="button"
          >
            全て ({stores.length})
          </button>
          <button
            className={`${styles.filterButton} ${
              selectedCategory === "food" ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick("food")}
            type="button"
          >
            飲食 ({stores.filter((s) => s.category === "food").length})
          </button>
          <button
            className={`${styles.filterButton} ${
              selectedCategory === "shop" ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick("shop")}
            type="button"
          >
            物販・展示 ({stores.filter((s) => s.category === "shop").length})
          </button>
        </div>

        <div className={styles.storeContainer}>
          {filteredStores.map((store, i) => (
            <StoreCard
              key={`${store.name}-${i}`}
              name={store.name}
              category={getCategoryDisplayName(store.category)}
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
