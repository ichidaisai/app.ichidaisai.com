"use client";
import styles from "./style.module.css";
import EventCard from "@/components/EventCard";
import { useState } from "react";
import { Kaisei_Opti } from "next/font/google";
import { getTimeTable } from "@/libs/dummyData";

const events = getTimeTable();
const kaisei = Kaisei_Opti({ subsets: ["latin"], weight: ["500"] });

export default function Page() {
  const [selectedDay, setSelectedDay] = useState<string>("10/25");

  const filteredEvents = events.filter((event) => event.day === selectedDay);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className={styles.pageRoot}>
      <div className={styles.inner}>
        <div className={styles.timelineContainer}>
          <div className={styles.dayContainer}>
            <div className={styles.dayButtonsContainer}>
              <button
                type="button"
                className={`${styles.dayButton} ${
                  selectedDay === "10/25" ? styles.active : ""
                }`}
                onClick={() => handleDayClick("10/25")}
              >
                10/25
              </button>
              <button
                type="button"
                className={`${styles.dayButton} ${
                  selectedDay === "10/26" ? styles.active : ""
                }`}
                onClick={() => handleDayClick("10/26")}
              >
                10/26
              </button>
            </div>
          </div>
          {filteredEvents.map((event, index) => (
            <div className={styles.timelineItem} key={index}>
              <div className={styles.timelineContent}>
                <time className={kaisei.className}>{event.start}</time>
                <EventCard
                  location={event.location}
                  min={event.time}
                  category={event.club ?? ""}
                  name={event.name}
                  start={event.start}
                  end={event.end}
                />
                <span className={styles.circle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
