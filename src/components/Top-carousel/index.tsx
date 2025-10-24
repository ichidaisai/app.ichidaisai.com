"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  url: string;
  avatarImage?: string;
};

const slides: Slide[] = [
  {
    id: 10,
    image: "/images/bingo.jpg",
    subtitle: "1日目／大学祭を彩る",
    title: "ビンゴ大会",
    url: "/bingotaikai",
  },
  {
    id: 11,
    image: "/images/entrance.jpg",
    subtitle: "1日目／大学祭を彩る",
    title: "借り物競走",
    url: "/karimono",
  },
  {
    id: 12,
    image: "/images/entrance.jpg",
    subtitle: "1日目／大学祭を彩る",
    title: "スタンプラリー",
    url: "https://stamp.ichidaisai.com",
  },
  {
    id: 13,
    image: "/images/cosplay.jpg",
    subtitle: "1日目／大学祭を彩る",
    title: "コスプレコンテスト",
    url: "/cosplay",
  },
];

export default function TopCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <Image
        src="/images/pickup.png"
        alt={"Pickup"}
        width={400}
        height={300}
        className={styles.pickupTitleImage}
      />
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlButton}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="前のスライド"
        >
          <div className={`${styles.arrow} ${styles.arrowLeft}`} />
        </button>
        <button
          type="button"
          className={styles.controlButton}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="次のスライド"
        >
          <div className={`${styles.arrow} ${styles.arrowRight}`} />
        </button>
      </div>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide) => (
            <Link
              className={styles.emblaSlide}
              key={slide.id}
              href={slide?.url || "#"}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div className={styles.slideContent}>
                <div>
                  <div className={styles.slideSubtitle}>{slide.subtitle}</div>
                  <div className={styles.slideTitle}>{slide.title}</div>
                </div>
                {slide.avatarImage && (
                  <div className={styles.slideFooter}>
                    <div className={styles.avatarCircle}>
                      <img
                        src={slide.avatarImage}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
