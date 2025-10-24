'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import styles from './style.module.css';

type Slide = {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  avatarImage?: string;
};

const slides: Slide[] = [
  {
    id: 10,
    image: '/images/bingo_img.png',
    subtitle: '1日目／大学祭を彩る',
    title: 'ステージ・ゲスト情報',
  },
  {
    id: 11,
    image: '/images/slide2.jpg',
    subtitle: '1日目／大学祭を彩る',
    title: 'ステージ・ゲスト情報',
  },
  {
    id: 12,
    image: '/images/slide3.jpg',
    subtitle: '1日目／大学祭を彩る',
    title: 'ステージ・ゲスト情報',
  },
  {
    id: 13,
    image: '/images/slide4.jpg',
    subtitle: '1日目／大学祭を彩る',
    title: 'ステージ・ゲスト情報',
  },
  {
    id: 14,
    image: '/images/slide3.jpg',
    subtitle: '1日目／大学祭を彩る',
    title: 'ステージ・ゲスト情報',
  },
];

export default function TopCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
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
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
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
            <div className={styles.emblaSlide} key={slide.id}>
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
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}